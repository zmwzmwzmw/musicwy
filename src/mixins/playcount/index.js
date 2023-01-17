export default {
  filters: {
    playNum (n) {
      if (n > 10000) {
        return (n / 10000).toFixed(1) + '万'
      } else return n
    }

  }
}
