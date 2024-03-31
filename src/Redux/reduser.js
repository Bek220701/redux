const initialState = {
  money: JSON.parse(localStorage.getItem("money")) || 20000,
  expenses: JSON.parse(localStorage.getItem("expenses")) || 0,
  product: JSON.parse(localStorage.getItem("pro")) || [],
};

export const Reduser = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      let expen = state.expenses + +action.payload.price;
      let allMon = state.money - +action.payload.price;
      let res = [...state.product, action.payload];
      localStorage.setItem("pro", JSON.stringify(res));
      localStorage.setItem("expenses", JSON.stringify(expen));
      localStorage.setItem("money", JSON.stringify(allMon));
      return { ...state, product: res, expenses: expen, money: allMon };
    case "DELETE_PRODUCT":
        let expen1 = state.expenses - +action.payload.price;
        let allMon1 = state.money + +action.payload.price;
        let deleBtn =state.product.filter((el) => el.id !== action.payload.id)
        localStorage.setItem("expenses", JSON.stringify(expen1));
        localStorage.setItem("money", JSON.stringify(allMon1));
      localStorage.setItem("pro", JSON.stringify(deleBtn));
      return {
        ...state,
        product: deleBtn ,expenses:expen1, money:allMon1
      };
    default:
      return state;
  }
};
