import { useEffect, useReducer } from "react";
import { AppContext } from "..";
import { snacks } from "../Data/Data";

export function AppContextProvider({ children }) {
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "UPDATE_FILTERED_LIST": {
        return { ...state, filteredList: action.payload };
      }

      case "FILTER_BY_SEARCH": {
        return { ...state, filterText: action.payload };
      }
      case "SORT_BY_ID_ASCEND": {
        return {
          ...state,
          filteredList: state.productList.sort((a, b) => a.id - b.id),
          idSortType: "low-to-high"
        };
      }

      case "SORT_BY_ID_DECEND": {
        return {
          ...state,
          filteredList: state.productList.sort((a, b) => b.id - a.id),
          idSortType: "high-to-low"
        };
      }

      case "SORT_BY_NAME_ASCEND": {
        return {
          ...state,
          filteredList: state.productList.sort((a, b) =>
            a.product_name.toLowerCase() > b.product_name.toLowerCase() ? -1 : 1
          ),
          nameSortType: "low-to-high"
        };
      }

      case "SORT_BY_NAME_DECEND": {
        return {
          ...state,
          filteredList: state.productList
            .sort((a, b) =>
              b.product_name.toLowerCase() > a.product_name.toLowerCase()
                ? 1
                : -1
            )
            .reverse(),
          nameSortType: "high-to-low"
        };
      }

      case "SORT_BY_INGREDIENTS_ASCEND": {
        return {
          ...state,
          filteredList: state.productList.sort((a, b) =>
            a.ingredients[0].toLowerCase() > b.ingredients[0].toLowerCase()
              ? -1
              : 1
          ),
          ingredientSortType: "low-to-high"
        };
      }

      case "SORT_BY_INGREDIENTS_DECEND": {
        return {
          ...state,
          filteredList: state.productList
            .sort((a, b) =>
              b.ingredients[0].toLowerCase() > a.ingredients[0].toLowerCase()
                ? 1
                : -1
            )
            .reverse(),
          ingredientSortType: "high-to-low"
        };
      }

      case "SORT_BY_WEIGHT_ASCEND": {
        return {
          ...state,
          filteredList: state.productList.sort(
            (a, b) => a.product_weight - b.product_weight
          ),
          weightSortType: "low-to-high"
        };
      }

      case "SORT_BY_WEIGHT_DECEND": {
        return {
          ...state,
          filteredList: state.productList.sort(
            (a, b) => b.product_weight - a.product_weight
          ),
          weightSortType: "high-to-low"
        };
      }

      case "SORT_BY_PRICE_ASCEND": {
        return {
          ...state,
          filteredList: state.productList.sort((a, b) => a.price - b.price),
          priceSortType: "low-to-high"
        };
      }

      case "SORT_BY_PRICE_DECEND": {
        return {
          ...state,
          filteredList: state.productList.sort((a, b) => b.price - a.price),
          priceSortType: "high-to-low"
        };
      }

      case "SORT_BY_CALORIES_ASCEND": {
        return {
          ...state,
          filteredList: state.productList.sort(
            (a, b) => a.calories - b.calories
          ),
          caloriesSortType: "low-to-high"
        };
      }

      case "SORT_BY_CALORIES_DECEND": {
        return {
          ...state,
          filteredList: state.productList.sort(
            (a, b) => b.calories - a.calories
          ),
          caloriesSortType: "high-to-low"
        };
      }

      default:
        return state;
    }
  };

  const initialValue = {
    productList: snacks,
    filteredList: snacks,
    filterText: "",
    idSortType: "low-to-high",
    nameSortType: "low-to-high",
    weightSortType: "low-to-high",
    priceSortType: "low-to-high",
    caloriesSortType: "low-to-high",
    ingredientSortType: "low-to-high"
  };

  const [state, dispatch] = useReducer(reducerFunction, initialValue);

  useEffect(() => {
    let data = [...state.productList];
    if (state.filterText.length > 0) {
      data = data.filter((product) => {
        return (
          product.product_name
            .toUpperCase()
            .includes(state.filterText.toUpperCase()) ||
          product.ingredients.some((item) =>
            item.toUpperCase().includes(state.filterText.toUpperCase())
          )
        );
      });
    }

    dispatch({ type: "UPDATE_FILTERED_LIST", payload: data });
  }, [state.filterText]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
