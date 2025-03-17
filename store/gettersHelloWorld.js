import {generateSimpleGetters} from "../../../src/shared/js/utils/generators";
import stateHelloWorld from "./stateHelloWorld";

const getters = {
    ...generateSimpleGetters(stateHelloWorld)

    // NOTE overwrite getters here if you need a special behaviour in a getter
};

export default getters;
