export const state = () => ({
  list: []
});

// vuexの状態変更を行う
export const mutations = {
  set(state, payload) {
    state.list = payload;
  },
  add(state, payload) {
    state.list.push(payload);
  },
  remove(state, { togo }) {
    state.list.splice(state.list.indexOf(todo), 1);
  }
};

// ミューテーションをコミットする
export const actions = {
  /**
   * togoリストをAPIから取得し、Vuexに格納する
   * @param {Object} ctx コンテキストオブジェクト
   */
  async fetchTogo(ctx) {
    const url = "/api/togo";
    const response = await this.$axios.get(url);
    if (response.status == 200) {
      const { data } = response;
      ctx.commit("set", data);
    } else {
      console.error("get request error!");
    }
  },
  async addTogo(ctx) {
    const url = "/api/togo/add";
    const param = {
      name: "hoge"
    };
    const response = await this.$axios.post(url, param);
    if (response.status == 200) {
      const { data } = response;
      ctx.commit("set", data);
    } else {
      console.error("post request error!");
    }
  }
};
