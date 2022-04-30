/* eslint-disable default-case */
import {
  REGISTER_GATEWAY_START,
  REGISTER_GATEWAY_END,
  REGISTER_GATEWAY_FAIL,
  GET_ALL_GATEWAY_START,
  GET_ALL_GATEWAY_END,
  GET_ALL_GATEWAY_FAIL,
} from "../actionTypes";

const initialState = {
  addGateway: {},
  error: null,
  loading: false,
  allGateway: [],
};

const addGatewayReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_GATEWAY_START:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_GATEWAY_END:
      return {
        ...state,
        addGateway: action.payload.addGateway,
      };

    case REGISTER_GATEWAY_FAIL:
      return {
        ...state,
      };

    default: {
      return state;
    }
  }
};

const getGatewayReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GATEWAY_START:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_GATEWAY_END:
      return {
        ...state,
        allGateway: action.payload.allGateway,
      };

    case GET_ALL_GATEWAY_FAIL:
      return {
        ...state,
      };

    default: {
      return state;
    }
  }
};

export { addGatewayReducer, getGatewayReducer };
