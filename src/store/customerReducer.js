const initialState = {
  customers: []
}

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_CUSTOMER":
      return {
        ...state,
        customers: [...state.customers, action.payload]
      }
    // case "GET_CUSTOMERS":
    //   return {
    //     ...state,
    //     customers: state.customers
    //   }
    default:
      return state
  }
}
