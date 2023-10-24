import { useContext } from "react";
import { AppContext } from "..";
import "./MainPage.css";

export function MainPage() {
  const { state, dispatch } = useContext(AppContext);
  const idSortHandler = () => {
    state.idSortType === "low-to-high"
      ? dispatch({ type: "SORT_BY_ID_DECEND" })
      : dispatch({ type: "SORT_BY_ID_ASCEND" });
  };

  const nameSortHandler = () => {
    state.nameSortType === "low-to-high"
      ? dispatch({ type: "SORT_BY_NAME_DECEND" })
      : dispatch({ type: "SORT_BY_NAME_ASCEND" });
  };

  const weightSortHandler = () => {
    state.weightSortType === "low-to-high"
      ? dispatch({ type: "SORT_BY_WEIGHT_DECEND" })
      : dispatch({ type: "SORT_BY_WEIGHT_ASCEND" });
  };

  const priceSortHandler = () => {
    state.priceSortType === "low-to-high"
      ? dispatch({ type: "SORT_BY_PRICE_DECEND" })
      : dispatch({ type: "SORT_BY_PRICE_ASCEND" });
  };

  const caloriesSortHandler = () => {
    state.caloriesSortType === "low-to-high"
      ? dispatch({ type: "SORT_BY_CALORIES_DECEND" })
      : dispatch({ type: "SORT_BY_CALORIES_ASCEND" });
  };
  const ingredientSortHandler = () => {
    state.ingredientSortType === "low-to-high"
      ? dispatch({ type: "SORT_BY_INGREDIENTS_DECEND" })
      : dispatch({ type: "SORT_BY_INGREDIENTS_ASCEND" });
  };

  return (
    <div className="main-page">
      <input
        type="text"
        onChange={(event) =>
          dispatch({ type: "FILTER_BY_SEARCH", payload: event.target.value })
        }
      />
      <div className="id-section">
        <h3 onClick={() => idSortHandler()}>ID</h3>
        <ul>
          {state.filteredList.map(({ id }) => {
            return (
              <li>
                <p>{id}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="product-name-section">
        <h3 onClick={() => nameSortHandler()}>Product Name</h3>

        <ul>
          {state.filteredList.map(({ product_name }) => {
            return (
              <li>
                <p>{product_name}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="product-weight-section">
        <h3 onClick={() => weightSortHandler()}>Product Weight</h3>

        <ul>
          {state.filteredList.map(({ product_weight }) => {
            return (
              <li>
                <p>{product_weight}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="price-section">
        <h3 onClick={() => priceSortHandler()}>Price (INR)</h3>

        <ul>
          {state.filteredList.map(({ price }) => {
            return (
              <li>
                <p>{price}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="calories-section">
        <h3 onClick={() => caloriesSortHandler()}>Calories</h3>

        <ul>
          {state.filteredList.map(({ calories }) => {
            return (
              <li>
                <p>{calories}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="ingredients-section">
        <h3 onClick={() => ingredientSortHandler()}>Ingredients</h3>

        <ul className="ingredients-list">
          {state.filteredList.map(({ ingredients }) => {
            return (
              <li>
                {ingredients.map((item) => {
                  return <p>{item}</p>;
                })}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
