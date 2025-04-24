// import { useState, useEffect } from "react";
import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHTTP.jsx";
import Err from "./Err.jsx";

const requestConfig = {};

export default function Meals() {
  // const [loadedMeals, setLoadedMeals] = useState([]);

  // useEffect(() => {
  //   async function fetchMeals() {
  //     const response = await fetch("http://localhost:3000/meals");

  //     if (!response.ok) {
  //       // ....
  //     }

  //     const meals = await response.json();
  //     setLoadedMeals(meals);
  //   }

  //   fetchMeals();
  // }, []);

  const {
    data: loadedMeals,
    error,
    isLoading,
  } = useHttp(
    "https://food-order-app-backend-wbpm.onrender.com/meals",
    requestConfig,
    []
  );

  if (isLoading) {
    return <p className="center">Fetching data...</p>;
  }

  if (error) {
    return <Err title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}
