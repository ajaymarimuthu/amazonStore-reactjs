import { ActionTypes } from "../constants/action-types";

const iniitalstate = {

    product: [

        {
            id:1,
            title:"Ajay",
            category:"programmer"
        }

    ]

}


export const productReducer = (state=iniitalstate, { type, payload }) => {


    switch (type) {
        case ActionTypes.SET_PRODUCTS:

            return state;

        default:
            return state;
    }
}

// export default productReducer