import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_FILIPINO_MAINS = [
  {
    id: "m1",
    name: "Beef Kare Kare",
    description: "beef and tripe with vegetables in a peanut sauce",
    price: 10.95,
  },
  {
    id: "m2",
    name: "Kalderetang Baka",
    description: "beef in a tomato stew with potatoes, carrots and olives",
    price: 10.95,
  },
  {
    id: "m3",
    name: "Bistek Tagalog",
    description: "braised beef in soy sauce, onions and garlic",
    price: 10.5,
  },
  {
    id: "m4",
    name: "Adobong Baboy",
    description: "belly of pork cooked in vinegar, garlic and soy sauce",
    price: 8.65,
  },
];

const AvailableMeals = () => {
  const menu = DUMMY_FILIPINO_MAINS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{menu}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
