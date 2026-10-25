<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import {
  OBJECTION_CATALOG_GROUPS,
  OBJECTION_SCENARIOS,
  type NavigatorChannel
} from '~/shared/objection-navigator';

const props = defineProps<{
  dealId: number | null;
  agentName: string;
  clientName: string;
  loadingContext?: boolean;
}>();

const toast = useToast();
const search = ref('');
const activeId = ref('expensive');
const channel = ref<NavigatorChannel>('message');

const active = computed(() => OBJECTION_SCENARIOS.find((item) => item.id === activeId.value) || OBJECTION_SCENARIOS[0]!);
const activeStep = computed(() => active.value.steps[0]!);
const availableChannels = computed(() => Object.keys(activeStep.value.text) as NavigatorChannel[]);
const normalizedSearch = computed(() => search.value.trim().toLocaleLowerCase('ru-RU'));
const filtered = computed(() => OBJECTION_SCENARIOS.filter((scenario) => {
  const text = [
    scenario.title,
    scenario.description,
    scenario.steps[0]?.goal || '',
    ...Object.values(scenario.steps[0]?.text || {})
  ].join(' ').toLocaleLowerCase('ru-RU');
  return !normalizedSearch.value || text.includes(normalizedSearch.value);
}));
const groups = computed(() => OBJECTION_CATALOG_GROUPS.map((group) => ({
  ...group,
  items: filtered.value.filter((scenario) => scenario.group === group.id)
})).filter((group) => group.items.length));
const responseText = computed(() => renderTemplate(
  activeStep.value.text[channel.value] || activeStep.value.text[availableChannels.value[0] || 'message'] || '',
  { clientName: props.clientName, agentName: props.agentName }
));

watch([active, availableChannels], () => {
  if (!availableChannels.value.includes(channel.value)) channel.value = availableChannels.value[0] || 'message';
}, { immediate: true });

function selectObjection(id: string) { activeId.value = id; }
function channelLabel(value: NavigatorChannel) {
  if (value === 'call') return 'Звонок';
  if (value === 'remote') return 'Дистанционно';
  return 'Сообщение';
}
function renderTemplate(template: string, values: Record<string, string>) {
  const fallbacks: Record<string, string> = { clientName: 'клиент', agentName: 'менеджер', hotel: 'отелю', destination: 'направлению' };
  return template.replace(/{{(\w+)}}/g, (_, key: string) => values[key]?.trim() || fallbacks[key] || 'данным поездки');
}
async function copyAnswer() {
  try {
    if (navigator.clipboard?.writeText && window.isSecureContext) await navigator.clipboard.writeText(responseText.value);
    else {
      const textarea = document.createElement('textarea');
      textarea.value = responseText.value;
      textarea.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand('copy');
      textarea.remove();
      if (!copied) throw new Error('Clipboard unavailable');
    }
    toast.add({ title: 'Ответ скопирован', description: 'Текст можно отредактировать перед отправкой клиенту.', color: 'air-primary-success', duration: 2600 });
  } catch {
    toast.add({ title: 'Не удалось скопировать ответ', description: 'Выделите текст и скопируйте его вручную.', color: 'air-primary-alert' });
  }
}
</script>

<template>
  <main class="re-objection-workspace workspace-layout p-4">
    <header class="re-objection-hero">
      <div><p class="eyebrow">База знаний</p><h1>Навигатор возражений</h1><p>Полный перечень типовых возражений и готовых отработок для разговора с клиентом.</p></div>
      <label class="re-objection-search"><span class="sr-only">Поиск возражения</span><input v-model="search" type="search" placeholder="Найти возражение" /></label>
    </header>

    <section class="re-objection-layout" aria-label="База знаний по возражениям">
      <aside class="re-objection-catalog work-panel">
        <p class="re-objection-catalog-title">Все возражения <span>{{ filtered.length }}</span></p>
        <nav v-if="groups.length" aria-label="Каталог возражений">
          <section v-for="group in groups" :key="group.id" class="re-objection-group">
            <h2>{{ group.title }}</h2>
            <button v-for="item in group.items" :key="item.id" type="button" class="re-objection-link" :class="{ 'is-active': item.id === active.id }" :aria-current="item.id === active.id ? 'page' : undefined" @click="selectObjection(item.id)">
              <span>{{ item.title }}</span><small>{{ item.description }}</small>
            </button>
          </section>
        </nav>
        <p v-else class="re-objection-no-results">По этому запросу ничего не найдено.</p>
      </aside>

      <article class="re-objection-answer work-panel">
        <p class="eyebrow">Возражение клиента</p>
        <h2>{{ active.title }}</h2>
        <p class="re-objection-purpose">{{ active.description }}</p>
        <section class="re-objection-goal"><p class="eyebrow">Задача менеджера</p><p>{{ activeStep.goal }}</p></section>
        <div class="re-objection-channels" role="tablist" aria-label="Канал ответа">
          <button v-for="item in availableChannels" :key="item" type="button" :class="{ 'is-active': channel === item }" :aria-selected="channel === item" role="tab" @click="channel = item">{{ channelLabel(item) }}</button>
        </div>
        <section class="re-objection-script"><p class="eyebrow">Готовый ответ</p><p>{{ responseText }}</p></section>
      </article>

      <aside class="re-objection-actions work-panel">
        <B24Button label="Скопировать ответ" class="brand-action w-full" @click="copyAnswer" />
        <section><p class="eyebrow">Выбранный канал</p><p>{{ channelLabel(channel) }}</p></section>
        <section class="re-objection-tip"><p class="eyebrow">Как использовать</p><p>Сохраните естественный тон, уточните ответ клиента и отредактируйте текст под конкретную ситуацию.</p></section>
        <section><p class="eyebrow">В каталоге</p><p>{{ OBJECTION_SCENARIOS.length }} возражений и все подготовленные варианты ответов по каналам.</p></section>
      </aside>
    </section>
  </main>
</template>
