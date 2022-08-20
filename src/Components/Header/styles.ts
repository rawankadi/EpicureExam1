import React from "react";
import styled from "styled-components";


export const NavBar = styled.div`
    margin:0%;
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;

 `;

 export const BurgerIcon = styled.div`
   width: 60%;
   disblay:flex;
   justify-content: left;
 `;
 export const Btn = styled.button`
 background:none;
 border:none;
 `;

 export const Logo = styled.img`
    width: 100%;
    height: 100%;
    disblay:flex;
    justify-content: center;
`;
Logo.defaultProps={
    src:'images/Logo.svg',
};

export const SearchIcon = styled.img`
    width: 100%;
    align-item:right;
    margin-left:10%;

`;
SearchIcon.defaultProps={
   src:'images/searchIcon.svg',
};

export const SignIcon = styled.img`
    width: 100%;
    align-item:right;
    margin-left:10%;

`;
SignIcon.defaultProps={
    src:'images/signIcon.svg',
};

export const BagIcon = styled.img`
    width: 100%;
    align-item:right;
    margin-left:10%;
   
`;
BagIcon.defaultProps={
    src:'images/bagIcon.svg',
};

 export const RightIcons = styled.div`
    width: 40%;
    display: flex;
   flex-direction: row;
    margin-left:20%;
   justify-content: space-between;
    `;

export const Sidebar=styled.div`
margin-top:10%;
width: 100%;
height: 55%;
position:absolute;
dispaly:inline-block;
flex-direction: column;
background-color:white;
`;

export const SearchBar=styled.div`
margin-top:10%;
width: 100%;
height: 55%;
position:absolute;
dispaly:inline-block;
flex-direction: column;
background-color:white;
`;
export const SElement=styled.p`
font-family: Helvetica Neue;
font-style: Thin;
font-size: 18px;
aine-height: 100%;
text-align: center;
`

export const Menu=styled.div`
`;

export const Element=styled.p`
font-family: Helvetica Neue;
font-style: Thin;
font-size: 22px;
line-height: 100%;
align: Left;
`


export const Title=styled.div`
Font family: Helvetica Neue;
Font style: Thin;
Font size: 18px;
Line height: 100%;
`
export const InputBox=styled.div`
margin-left:10%;
border-style: groove;
width:80%;
height:25%;
`;
