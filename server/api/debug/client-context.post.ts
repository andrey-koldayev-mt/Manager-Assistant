export default defineEventHandler(async (event) => {
  const body = await readBody(event).catch(() => ({}));
  console.log('Bitrix client context debug:', JSON.stringify(body || {}).slice(0, 4000));

  return { success: true };
});
