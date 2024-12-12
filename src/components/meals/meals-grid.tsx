import React from "react";

import MealItem from "./meal-item";
import { IMeals } from "@/types/types";

import classes from "./meals-grid.module.css";

interface IMealsGrid {
  meals: IMeals[];
}

export default function MealsGrid({ meals }: Readonly<IMealsGrid>) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.title}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
