/*
* 这是localStorage的存取工具
 */
const LIST_KEY = "list_key"


export default {
  getStorage() {
    return JSON.parse(window.localStorage.getItem(LIST_KEY) || "[]")
  },
  setStorage(list) {
    window.localStorage.setItem(LIST_KEY, JSON.stringify(list));
  }
}
