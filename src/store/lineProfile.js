const lineProfile = {
  namespaced: true,
  state: {
    userId: "",
    displayName: "",
    statusMessage: "",
    pictureUrl: "",
  },
  mutations: {
    SET_USER_ID(state, payload) {
      state.userId = payload;
    },
    SET_DISPLAY_NAME(state, payload) {
      state.displayName = payload;
    },
    SET_STATUS_MESSAGE(state, payload) {
      state.statusMessage = payload;
    },
    SET_PICTURE_URL(state, payload) {
      state.pictureUrl = payload;
    },
  },
  actions: {
    setUserId: ({ commit }, payload) => {
      commit("SET_USER_ID", payload);
    },
    setDisplayName: ({ commit }, payload) => {
      commit("SET_DISPLAY_NAME", payload);
    },
    setStatusMessage: ({ commit }, payload) => {
      commit("SET_STATUS_MESSAGE", payload);
    },
    setPictureUrl: ({ commit }, payload) => {
      commit("SET_PICTURE_URL", payload);
    },
  },
};

export default lineProfile;
