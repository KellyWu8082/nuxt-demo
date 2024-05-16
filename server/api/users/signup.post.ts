export default defineEventHandler(async(event) => {
  const body = readBody(event)
  await setTimeout(() => { }, 2000);
  console.log('hello', body);
  return Promise.resolve(body)
})