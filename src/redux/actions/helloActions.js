import { ActionsTypes } from "redux/action-types/ActionsTypes";

export const sayHello = (message) => async (dispatch) =>  {
    try {
        dispatch({
            type:ActionsTypes.HELLO_WORLD,
            payload:message
        })
       
        
    } catch (error) {

       
        
    }
    
}