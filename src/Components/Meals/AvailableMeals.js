import React from "react";
import Classes from './AvailableMeals.module.css';
import MealItems from "./MealItems";
import Card from '../UI/Card'


 const DUMMY_Meals = [
   {
     id: "m1",
     name: "Sushi",
     description: "finest fish and veggies",
     price: 22.91,
   },
   {
     id: "m2",
     name: "Schnitzel",
     description: "A german Speciality",
     price: 16.56,
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
       key={meal.id}
       name={meal.name}
       description={meal.description}
       price={meal.price}
       id={meal.id}
     />
   

   )); 
     
   return (
     <section className={Classes.meals}>
       <Card>
         <ul>
           {mealsList}
         </ul>
       </Card>
     </section>
   );
}

export default AvailabelMeals;
