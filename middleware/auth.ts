export default defineNuxtRouteMiddleware((to, from) => {
  const currentUser = useCurrentUser()
  if (!currentUser.value.isLogin) {
    return navigateTo('/login')
  } 
})