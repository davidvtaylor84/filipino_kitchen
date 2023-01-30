import React,{useEffect, useState} from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const Starters = (props) => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    return fetch("http://localhost:8080/starters")
          .then((response) => response.json())
          .then((data) => setMeals(data));
  }

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  },[])

  if(isLoading){
    return <section className={classes.mealsLoading}>
      <p>Loading menu...</p>
    </section>
  }


  const menu = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      addItem={props.addItem}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <h2 className={classes.label}>Starters</h2>
        <ul>{menu}</ul>
      </Card>
    </section>
  );
};

export default Starters;
