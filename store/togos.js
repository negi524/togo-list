import moment from "moment";

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
    const url = process.env.FIREBASE_DB_URL + "/place_v3.json";
    const response = await this.$axios.get(url);

    if (response.status == 200) {
      const { data } = response;
      // 一旦配列にまとめてから、Vuexにセットする
      let addData = [];

      // 一番最上位のキーをnameとしてデータ形式を変更する
      for (let key in data) {
        addData.push({
          name: key,
          station: data[key].station,
          created: data[key].created,
          prefectures: data[key].prefectures
        });
      }
      ctx.commit("set", addData);
    } else {
      console.error("get request error!");
    }
  },
  /**
   * Firebaseにobjの追加を行い、成功した場合Vuexにも追加を行う
   * @param {Object} ctx
   * @param {Object} obj: フォームから渡されるオブジェクト
   */
  async pushTogo(ctx, obj) {
    const key = obj.name; // 名前をキーとしてfirebaseに登録する
    const url = process.env.FIREBASE_DB_URL + "/place_v3/" + key + ".json";
    let param = {
      station: obj.station,
      prefectures: obj.prefectures,
      created: moment().format("YYYY-MM-DD") // 今日の日付を生成する
    };

    const response = await this.$axios.put(url, param);
    if (200 <= response.status && response.status < 300) {
      const { data } = response;

      const newTogo = {
        name: key,
        station: data.station,
        created: data.created,
        prefectures: data.prefectures
      };
      ctx.commit("add", newTogo);
    } else {
      console.error("API request error.");
    }
  }
};
