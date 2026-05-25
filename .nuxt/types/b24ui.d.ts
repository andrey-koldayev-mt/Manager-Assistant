import * as b24ui from '#build/b24ui'
import type { TVConfig } from '@bitrix24/b24ui-nuxt'
import type { defaultConfig } from 'tailwind-variants'

type AppConfigUI = {
  prefix?: string
  tv?: typeof defaultConfig
} & TVConfig<typeof b24ui>

declare module '@nuxt/schema' {
  interface AppConfigInput {
    /**
     * Bitrix24 UI theme configuration
     * @see https://bitrix24.github.io/b24ui/docs/getting-started/theme/components/
     */
    b24ui?: AppConfigUI
  }
}

export {}
