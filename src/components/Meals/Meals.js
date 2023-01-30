import React from 'react'
import MealsSummary from './MealsSummary'
import Starters from './Starters'
import Mains from './Mains'
import Desserts from './Desserts'

const Meals = (props) => {
  return (
    <>
    <MealsSummary/>
    <Starters addItem={props.addItem}/>
    <Mains addItem={props.addItem}/>
    <Desserts addItem={props.addItem}/>
    </>
  )
}

export default Meals