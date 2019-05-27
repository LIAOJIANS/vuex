

import { REW_COUNTS, DEL_COUNTS, ODD_COUNTS, TIME_COUNTS } from "./mutation-tyoe.js"
export default {
  add({commit, state}) {
    const counts = ++state.counts
    commit(REW_COUNTS, {counts})
  },
  del({commit, state}) {
    const counts = --state.counts
    commit(DEL_COUNTS, {counts})
  },
  odd({commit, state}) {
    if(state.counts%2 === 0) {
      const counts = ++state.counts;
      commit(ODD_COUNTS, {counts})
    }
  },
  setTime({commit, state}) {
      setTimeout(() => {
        const counts = ++state.counts
        commit(TIME_COUNTS, {counts})
      },1000)
  }
}
