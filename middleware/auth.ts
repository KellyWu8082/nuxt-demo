
// 权限校验
function isAuthenticated(id: string | string[]) {
  return id === '1'
}

export default defineNuxtRouteMiddleware((to, from) => {
  const { params, path } = to
  if (isAuthenticated(params.id) === false) {
    return navigateTo('/login')
  } 
  navigateTo(path)
})