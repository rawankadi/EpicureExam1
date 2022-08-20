import React, { Component } from 'react'
import {Cards, CardImg,Name, ResDiv} from './style';
import Slider from "react-slick";
import { AllRestaurants } from '../../../../interfaces/Resturants';



export default function CardRestaurants() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1
  }
  
  return (

    <Cards>
      POPULAR RESTURANT IN EPICURE <br/>
      <Slider {...settings}>
        {AllRestaurants.map((restaurant)=>(
            <ResDiv>
              <CardImg src={restaurant.URLImage} alt=''/>
              <Name>{restaurant.name}</Name>
              <Name>{restaurant.ChefName}</Name>
            </ResDiv>
        ))}
      </Slider>
    </Cards>
  )
}
