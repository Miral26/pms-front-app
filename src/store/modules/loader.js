const state = {
    loading: false,
};

const getters = {
};

const actions = {
    setLoading({ commit }, id) {
        commit("SET_LOADING", id);
    }
};

const mutations = {
    SET_LOADING(state, data) {
        state.loading = !!data;
        const preLoading = document.getElementById("page-loader");
        console.log(`preLoading`, preLoading)
        if (!preLoading) {
            return
        }
        console.log(`data`, data)
        if (data) {
            preLoading.classList.remove('hide');
        } else {
            preLoading.classList.add('hide');
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
