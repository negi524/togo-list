import moment from "moment";
import firebase from "@/plugins/firebase";

export const state = () => ({
  list: [],
});

// vuexの状態変更を行う
export const mutations = {
  set(state, payload) {
    state.list = payload;
  },
  add(state, payload) {
    state.list.push(payload);
  },
  /**
   * 配列の番号を指定して削除する
   * @param {object} state
   * @param {number} payload 削除対象のインデックス番号
   */
  delete(state, payload) {
    state.list.splice(payload, 1);
  },
};

// ミューテーションをコミットする
export const actions = {
  /**
   * togoリストをAPIから取得し、Vuexに格納する
   * @param {Object} ctx コンテキストオブジェクト
   */
  async fetchTogo(ctx) {
    const db = firebase.database();
    try {
      await db
        .ref("place_v3")
        .orderByKey()
        .on("value", (snapshot) => {
          // firebaseのデータに変更があったとき呼ばれる
          let data = snapshot.val();
          let addData = []; // 配列に変換後、Vuexにセットする
          // 一番最上位のキーをnameとしてデータ形式を変更する
          for (let key in data) {
            addData.push({
              name: key,
              station: data[key].station,
              created: data[key].created,
              prefectures: data[key].prefectures,
              done: data[key].done,
            });
          }
          console.debug("get data from firebase");
          ctx.commit("set", addData);
        });
    } catch (err) {
      console.error("Firebase API request error: " + err);
    }
  },
  /**
   * Firebaseにobjの追加を行い、成功した場合Vuexにも追加を行う
   * @param {Object} ctx
   * @param {Object} obj: フォームから渡されるオブジェクト
   */
  async pushTogo(ctx, obj) {
    // 追加対象のデータ
    const target = {
      station: obj.station,
      prefectures: obj.prefectures,
      created: moment().format("YYYY-MM-DD"), // 今日の日付を生成する
      done: false,
    };
    const key = obj.name; // 名前をキーとしてfirebaseに登録する

    try {
      // firebaseに追加を行い、結果をVuexに詰める
      await firebase
        .database()
        .ref("place_v3/" + key)
        .set(target);
      console.debug("add data to firebase");
      return true;
    } catch (err) {
      console.error("Firebase API request error: " + err);
      return false;
    }
  },
  /**
   * インデックス番号を元に削除を行う
   * @param {object} ctx
   * @param {number} index 削除対象のインデックス番号
   */
  async deleteTogoByIndex(ctx, index) {
    // indexの整合性チェック
    if (index >= ctx.state.list.length) {
      console.error("out of index");
    } else {
      try {
        // firebase削除のキーとなる名前を取得する
        const key = ctx.state.list[index].name;

        await firebase
          .database()
          .ref("place_v3/" + key)
          .remove();
        console.debug("delete success.");
      } catch (err) {
        console.error("API request error." + err);
      }
    }
  },
  /**
   * 削除対象のオブジェクトを指定して削除を行う
   * @param {object} ctx
   * @param {object} obj 削除対象のオブジェクト
   */
  async deleteTogoByObj(ctx, obj) {
    // 名前をキーとしてVuexのリストから検索
    const key = obj.name;
    let targetExists = false; // 対象のオブジェクトが存在するかどうか
    let index; // 削除対象の配列のインデックス

    for (let i in ctx.state.list) {
      if (key === ctx.state.list[i].name) {
        targetExists = true;
        index = i;
      }
    }

    if (!targetExists) {
      console.error("object is not exists.");
      return false;
    } else {
      try {
        await firebase
          .database()
          .ref("place_v3/" + key)
          .remove();
        console.debug("delete success.");
        return true;
      } catch (err) {
        console.error("API request error." + err);
        return false;
      }
    }
  },
};
