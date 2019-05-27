/*
* 进行更新到state上数据
*
* */

import { REW_COUNTS, DEL_COUNTS, ODD_COUNTS, TIME_COUNTS }  from "./mutation-tyoe"
export default {
  [REW_COUNTS](state, {counts}) {
    state.counts = counts
  },
  [DEL_COUNTS](state, {counts}) {
    state.counts = counts
  },
  [ODD_COUNTS](state, {counts}) {
    state.counts = counts
  },
  [TIME_COUNTS](state, {counts}) {
    state.counts = counts
  }
}
