import React from 'react'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'
import Card from '../UI/Card'

// meals database
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
]

// Component return danh sách meals từ database, được bọc trong Card wrapper nền trắng, bo góc
const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map(meal => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      id={meal.id}
      // or {...meal} = name={meal.name} description={meal.description} price={meal.price}
    />
  ))

  return (
    <Card className={classes.meals}>
      <ul>{mealList}</ul>
    </Card>
  )
}

export default AvailableMeals
