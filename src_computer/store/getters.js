
export default {
  oddji(state) {
    const counts = state.counts
    return (counts%2===0)?"偶数" : "奇数"
  }
}
