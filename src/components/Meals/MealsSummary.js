import React from "react";
import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Fomalhautian cuisine to pick-up or delivery</h2>
      <p>
        Whether it&#39;s a meal at home or a banquet for 100 people, the people from the honorable island nation of Fomalhaut welcome your custom.
      </p>
      <p>
        All profits from orders over £20 will be donated to maintaining the Living Tomb of General Chambers and to providing shamanic blessings for war orphans in need of psychic repair.
      </p>
    </section>
  );
};

export default MealsSummary;
