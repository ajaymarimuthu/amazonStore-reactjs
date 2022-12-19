import { ActionTypes } from "../constants/action-types";

const iniitalstate = {

    products: []
 

}


export const productReducer = (state=iniitalstate, { type, payload }) => {


    switch (type) {
        case ActionTypes.SET_PRODUCTS:

            return {...state,products:payload};

        default:
            return state;
    }
}

// export default productReducer