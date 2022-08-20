import React from "react";
import styled from 'styled-components';

interface Props {
    windowSize: number
}

export const FooterContainer = styled.div`
    display: flex;
    align-self:flex-end;
    font-style: thin;
    font-size: 20px;
    line-height: 100%;

`

export const FooterElements = styled.div<Props>`
width: 100%;
align-items: start;
display: flex;
justify-content: space-between;
position: absolute;
flex-direction: ${(props) => props.windowSize > 600 ? 'row' : 'column'};
`;



export const FooterElement = styled.button`
    font-color:black;
    font-family: 'Helvetica Neue';
    font-style: bold;
    font-weight: 200;
    background:none;
    border:none;
    margin:3%;
    padding:0;
    cursor: pointer;
`;