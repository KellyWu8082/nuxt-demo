export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event)
  // const formData = await readRawBody(event, false) 
  console.log('post body', formData);
  return { url: "https://img1.sycdn.imooc.com/6614fe9a0001a60411111008-140-140.jpg"}
})
