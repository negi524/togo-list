export const state = () => ({
  list: []
});

export const mutations = {
  add(state, name) {
    state.list.push({
      name: name,
      done: false,
      area: "",
      prefectures: "",
      time: "evening",
      url: "",
      created: "",
      season: "summer"
    });
  },
  remove(state, { togo }) {
    state.list.splice(state.list.indexOf(todo), 1);
  },
  toggle(state, togo) {
    togo.done = !togo.done;
  }
};
