import React from 'react';
import MealsSummary from './MealsSummary';
import AvailabelMeals from './AvailableMeals';
import Card from '../UI/Card';

const Meals = () => {
    return (
      <React.Fragment>
        <MealsSummary />
        <Card>
          <AvailabelMeals />
        </Card>
      </React.Fragment>
    );
}

export default Meals