export const isLogin = (state) => {
  let id = state.user.userId
  return id !== undefined && id !== null
}

