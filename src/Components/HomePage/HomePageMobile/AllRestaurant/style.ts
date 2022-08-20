import React from "react";
import styled from "styled-components";

export const Alldiv=styled.button`
display: flex;
flex-direction: row;
Font family: Helvetica Neue;
Font style: Regular;
Font size: 16px;
background:none !important;
border:none;
`;
export const Arow = styled.img`
width:10%;
margin-left:3%;
margin-top:3%;
`;
Arow.defaultProps={
    src:'images/Arow.svg',
};