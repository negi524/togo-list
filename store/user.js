import firebase from "~/plugins/firebase";

export const state = () => ({
  login: false, // ログイン状態
});

// Vuexの状態変更を行う
export const mutations = {
  set(state, payload) {
    state.login = payload;
  },
};

// ミューテーションをコミットする
export const actions = {
  /**
   * ログイン処理を行う
   * @param {Object} ctx
   */
  login(ctx) {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        ctx.commit("set", true); // ログイン状態に変更
      });
  },
  /**
   * ログアウト処理を行う
   * @param {Object} ctx
   */
  logout(ctx) {
    firebase.auth().signOut();
    ctx.commit("set", false); // ログアウト状態に変更
  },
  /**
   * ログイン状態を取得する
   * @param {Object} ctx
   */
  fetchLoginState(ctx) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        ctx.commit("set", true); // User is signed in.
      } else {
        ctx.commit("set", false); // No user is signed in.
      }
    });
  },
};
