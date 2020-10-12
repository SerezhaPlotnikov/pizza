import pizza1 from "../../assets/images/pizza1.png";
import { MainTypes } from "./types.js";

const initialState = {
  data: [
    {
      name: "Meat Pizza",
      price: 100,
      picture: pizza1,
      types: [0, 1],
      sizes: [20, 40],
      category: 0,
      rating: 4,
    },
    {
      name: "Meat Pizza",
      price: 100,
      picture: pizza1,
      types: [0, 1],
      sizes: [20, 30],
      category: 0,
      rating: 4,
    },
    {
      name: "Meat Pizza",
      price: 100,
      picture: pizza1,
      types: [0, 1],
      sizes: [40],
      category: 0,
      rating: 4,
    },
    {
      name: "Meat Pizza",
      price: 100,
      picture: pizza1,
      types: [0, 1],
      sizes: [20, 30, 40],
      category: 0,
      rating: 4,
    },
    {
      name: "Meat Pizza",
      price: 100,
      picture: pizza1,
      types: [0, 1],
      sizes: [20, 30, 40],
      category: 0,
      rating: 4,
    },
  ],
  loading: false,
  error: undefined,
  selected: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MainTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case MainTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.data };
    }
    case MainTypes.FETCH_ERROR: {
      return { ...state, loading: false, error: action.error };
    }
    case MainTypes.FETCH_SELECTED: {
      return {
        ...state,
        loading: false,
        selected: [...state.selected, action.selected],
      };
    }
    case MainTypes.CLEAR_CART: {
      return {
        ...state,
        loading: false,
        selected: [],
      };
    }
    default:
      return state;
  }
};

export { reducer as MainReducer };
