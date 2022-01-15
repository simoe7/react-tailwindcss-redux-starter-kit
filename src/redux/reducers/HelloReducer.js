import { ActionsTypes } from "redux/action-types/ActionsTypes";

export const helloReducer = (state = {loading:true},action)=>{

    switch(action.type){
        case ActionsTypes.HELLO_WORLD :
            return ({
                loading:false,
                message:"Hello World"
            })
       
        default:
            return state
    }


}