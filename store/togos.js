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
  }
};

// ミューテーションをコミットする
export const actions = {
  /**
   * togoリストをAPIから取得し、Vuexに格納する
   * @param {Object} ctx コンテキストオブジェクト
   */
  async fetchTogo(ctx) {
    const url = process.env.FIREBASE_DB_URL + "/place_v1.json";
    const response = await this.$axios.get(url);
    if (response.status == 200) {
      const { data } = response;
      ctx.commit("set", data);
    } else {
      console.error("get request error!");
    }
  },
  /**
   * togoリストに追加を行い、Vuexに格納する
   * @param {Object} ctx
   */
  async addTogo(ctx) {
    const url = process.env.FIREBASE_DB_URL + "/place_v1.json";
    const param = {
      name: "hoge"
    };
    const response = await this.$axios.post(url, param);
    if (200 <= response.status && response.status < 300) {
      const { data } = response;
      ctx.commit("set", data);
    } else {
      console.error("post request error!");
    }
  },
  /**
   * Firebaseにobjの追加を行い、成功した場合Vuexにも追加を行う
   * @param {Object} ctx
   * @param {Object} obj: フォームから渡されるオブジェクト
   */
  async pushTogo(ctx, obj) {
    const url = process.env.FIREBASE_DB_URL + "/place_v2.json";
    let param = {
      0: {
        name: obj.name,
        station: obj.station,
        prefectures: obj.prefectures,
        created: "2019-11-17"
      }
    };
    const response = await this.$axios.put(url, param);
    if (200 <= response.state && response.state < 300) {
      ctx.commit("add", obj);
    }
  }
};
