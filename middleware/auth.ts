export default defineNuxtRouteMiddleware((to, from) => {
  if (['login', 'signup'].includes(to.path)) return
  const currentUser = useCurrentUser()
  if (!currentUser.value.isLogin) {
    return navigateTo('/login')
  } 
})