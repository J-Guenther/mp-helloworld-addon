import actions from "./actionsHelloWorld";
import mutations from "./mutationsHelloWorld";
import getters from "./gettersHelloWorld";
import state from "./stateHelloWorld";


export default {
    namespaced: true,
    state: {...state},
    mutations,
    actions,
    getters
};
