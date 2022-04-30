import {
  REGISTER_GATEWAY_START,
  REGISTER_GATEWAY_END,
  REGISTER_GATEWAY_FAIL,
  GET_ALL_GATEWAY_START,
  GET_ALL_GATEWAY_END,
  GET_ALL_GATEWAY_FAIL,
} from "../actionTypes";

import GatewayService from "../../service/api.service.js";

//ADD Gateway
export const addGatewayStart = () => {
  return {
    type: REGISTER_GATEWAY_START,
  };
};

export const addGatewayEnd = (addGateway) => {
  return {
    type: REGISTER_GATEWAY_END,
    payload: { addGateway },
  };
};

export const addGatewayFail = () => {
  return {
    type: REGISTER_GATEWAY_FAIL,
  };
};

export const addGateway = (data) => {
  return (dispatch) => {
    dispatch(addGatewayStart());

    return GatewayService.registerGateway(data).then((response) => {
      console.log("Result from Register Gateway", response);
      dispatch(addGatewayEnd(response));
    });
  };
};


//GET ALL GATEWAYS
export const getGatewayStart = () => {
    return {
        type: GET_ALL_GATEWAY_START
    }
}

export const getGatewayEnd = (allGateway) => {
    return {
        type: GET_ALL_GATEWAY_END,
        payload: {allGateway}
    }
}

export const getGatewayFail = () => {
    return {
        type: GET_ALL_GATEWAY_FAIL
    }
}

export const getGateway = () => {
    return dispatch => {
        dispatch(addGatewayStart())

        return(
            GatewayService.getAllGateway((response) => {
              console.log("Gateways: ", response)
              dispatch(getGatewayEnd(response))
          })
        )
    }
}