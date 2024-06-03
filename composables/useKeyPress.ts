const useKeyPress = (key: string, cb: () => any) => {

  const trigger = (events: KeyboardEvent) => {
    if (events.key === key) {
      cb()
    }
  }

  onMounted(() => {
    document.addEventListener('keypress', trigger)
  })

  onUnmounted(() => {
    document.removeEventListener('keypress', trigger)
  })
}

export default useKeyPress