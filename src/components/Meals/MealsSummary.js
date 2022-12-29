import React from "react";
import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Filipino cuisine available for pick-up or delivery</h2>
      <p>
        Whether it&#39;s a meal at home or a banquet for 100 people, our chefs
        are here to provide the very best in Filipino cuisine.
      </p>
      <p>
        Here you will find the best of Oriental and Western cuisine in dishes
        which have become distinctly Filipino.
      </p>
    </section>
  );
};

export default MealsSummary;
