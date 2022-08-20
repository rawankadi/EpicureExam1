import React from "react";
import styled from 'styled-components'


export const Body = styled.div`
margin-bottom:10%;
padding-bottom:5%;
`;


export const Name = styled.p`
justify-content:start;
display:flex;
font-style: Thin;
font-size: 14px;
line-height: 28px;
vertical-align: Top;
letter-spacing: 1.25px;
`;

export const ChefName=styled.p`
background:rgba(255, 255, 255, 0.8);
font-family: Helvetica Neue;
font-style: Regular;
`

export const CardImg = styled.img`
    width: 100%;
    height: 50%;
`;
CardImg.defaultProps={
    src:'images/Yossi.svg',
};
 export const DishImg =styled.img`
 width: 100%;
 height:60% !important;
 `;

