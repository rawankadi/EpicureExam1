import React from 'react'
import AboutUs from './HomePageMobile/AboutUs/AboutUs'
import ChefsOfTheWeek from './HomePageMobile/CardChefs.tsx/CardChef';
import SignatureDishOf from './HomePageMobile/Dishs/DishsCards/DishsCards';
import SearchBar from './HomePageMobile/SearchBar/SearchBar'
import SignatureOfDishes from './HomePageMobile/Dishs/SignatureDishs/SignatureOfDishes';
import CardRestaurants from './HomePageMobile/CardRestaurants/CardRestaurant';
import CardChef from './HomePageMobile/CardChefs.tsx/CardChef';
import AllRestaurants from './HomePageMobile/AllRestaurant/AllRestaurants';

export default function HomePage() {

  return (
    <div>
        <SearchBar /><br/>
        <CardRestaurants/>
        <AllRestaurants/><br/>
        <SignatureDishOf/>
        <AllRestaurants/><br/>
        <SignatureOfDishes/>
        <CardChef/><br/>
        <AllRestaurants/><br/>
        <AboutUs/>
    </div>
  )
}
