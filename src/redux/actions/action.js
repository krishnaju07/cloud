import axios from "axios";
import { USER_LIST } from "../actionType"


export const userListAction = () => async (dispatch) => {
    try {
      
      axios
            .get(`https://jsonplaceholder.typicode.com/users`)
            .then(function (response) {
                dispatch({
                    type: USER_LIST,
                    payload: response.data
                })

            });
    } catch (err) {
      throw new Error(err)
    }
  };
  