interface UserInterface {
  isLogin: boolean
  username?: string
}
const currentUser = () => {
  return useState<UserInterface>('currentUser', () => ({ isLogin: false }))
}

export default currentUser