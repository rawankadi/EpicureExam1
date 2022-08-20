import React from 'react'
import { ResDiv } from '../../../HomePage/HomePageMobile/CardRestaurants/style'
import { Btn, PagesName, Resdiv, SlideColumn } from './styles'



export default function AllRestaurants() {
  return (
    <Resdiv>
      <PagesName>לא לבדוק</PagesName>
      <SlideColumn>
        <Btn><PagesName>All</PagesName></Btn>
        <Btn><PagesName>New</PagesName></Btn>
        <Btn><PagesName>Most Popular</PagesName></Btn>
        <Btn><PagesName>Open Now</PagesName></Btn>
      </SlideColumn>
   
    </Resdiv>
  )
}
