const initialState = {
  wishList: [],
};

const wishListData = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WISHLIST_FULFILLED":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default wishListData;
