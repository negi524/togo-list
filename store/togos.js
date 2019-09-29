export const state = () => ({
  list: []
});

export const mutations = {
  add(state, text) {
    state.list.push({
      text: text,
      done: false
    });
  },
  remove(state, { togo }) {
    state.list.splice(state.list.indexOf(todo), 1);
  },
  toggle(state, togo) {
    togo.done = !togo.done;
  }
};
