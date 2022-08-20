import React from 'react'
import Slider from 'react-slick';
import { chefOfTheWeek } from '../../../../interfaces/Chefs';
import Restaurants from '../../../Restaurants/RestaurantsPage';
import { ResDiv,Cards } from '../CardRestaurants/style';
import { CardImg, Name, DishImg, Body, ChefName} from './style';

export default function ChefsOfTheWeek() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1
  }
  return (
    <Cards>
      CHEF OF THE WEEK <br/>
             <Body>
                <CardImg src={chefOfTheWeek.PicturURL} alt=''/>
                  <ChefName>{chefOfTheWeek.name}</ChefName>
                  <Name>{chefOfTheWeek.description}</Name>
              </Body>
      <Slider {...settings}>
      {chefOfTheWeek.restaurants.map((rest)=>(
        <ResDiv>
          <DishImg src={rest.resImage} alt=''/>
          <Name>{rest.name}</Name>
        </ResDiv>
      ))}
      </Slider>
    </Cards>
  )
}
