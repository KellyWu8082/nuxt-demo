export default defineEventHandler((event) => {
  const body = readBody(event)
  return Promise.resolve(body)
})