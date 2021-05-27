const state = {
    patientsList: [
        {
            id: 1,
            doctorId: 1,
            onCall: true,
            first_name: "Patient 1",
            last_name: "Demo",
            startTime: new Date(new Date().setHours(2)),
            endTime: new Date(new Date().setHours(5)),
            dob: new Date(1978, 2, 9)
        },
        {
            id: 2,
            doctorId: 2,
            first_name: "Patient 2",
            last_name: "Demo",
            startTime: new Date(new Date().setHours(8)),
            endTime: new Date(new Date().setHours(10)),
            dob: new Date(1984, 2, 9)
        },
        {
            id: 3,
            doctorId: 3,
            first_name: "Patient 3",
            last_name: "Demo",
            startTime: new Date(new Date().setHours(11)),
            endTime: new Date(new Date().setHours(12)),
            dob: new Date(1991, 2, 9)
        },
        {
            id: 4,
            doctorId: 4,
            onCall: true,
            first_name: "Patient 4",
            last_name: "Demo",
            startTime: new Date(new Date().setHours(15)),
            endTime: new Date(new Date().setHours(18)),
            dob: new Date(1989, 2, 9)
        },
        {
            id: 5,
            doctorId: 5,
            first_name: "Patient 5",
            last_name: "Demo",
            startTime: new Date(new Date().setHours(21)),
            endTime: new Date(new Date().setHours(23)),
            dob: new Date(1995, 2, 9)
        },
    ],
    patientData: {},
    activeTab: "appt"
};

const getters = {
    getPatientData: state => state.patientData,
    getPatientsList: state => state.patientsList,
    getActiveTabInPatientForm: state => state.activeTab,
};

const actions = {
    setPatientData({ commit }, data) {
        commit("SET_PATIENT_DATA", data);
    },
    setActiveTabInPatientForm({ commit }, data) {
        commit("SET_ACTIVE_TAB", data);
    }
};

const mutations = {
    SET_PATIENT_DATA(state, data) {
        state.patientData = { ...state.patientData, ...data }
    },
    SET_ACTIVE_TAB(state, data) {
        state.activeTab = data
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
