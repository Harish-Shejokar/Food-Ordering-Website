import React from "react";
import Classes from './AvailableMeals.module.css';
import MealItems from "./MealItems";

 const DUMMY_Meals = [
   {
     id: "m1",
     name: "Sushi",
     description: "finest fish and veggies",
     price: 22.9,
   },
   {
     id: "m2",
     name: "Schnitzel",
     description: "A german Speciality",
     price: 16.5,
   },
   {
     id: "m3",
     name: "Barbeque Burger",
     description: "Ameriacan Raw Meaty",
     price: 12.99,
   },
   {
     id: "m4",
     name: "Chicken-Biryaani",
     description: "Indian-Special",
     price: 20.88,
   },
 ];

 
 const AvailabelMeals = () => {
   const mealsList = DUMMY_Meals.map((meal) => (
     <MealItems
       name={meal.name}
       description={meal.description}
       price={meal.price}
     />
   )); 
     
     return <section className={Classes.meals}>
        <ul>
            {mealsList}
       </ul>
   </section>
}

export default AvailabelMeals;
