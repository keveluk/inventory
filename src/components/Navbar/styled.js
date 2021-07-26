import styled from 'styled-components';
import {Link } from 'react-router-dom';

export const Anchor = styled(Link)`
color:white;
font-size:1.5rem;
font-weight:600;
// border:2px solid red;
margin:5px;
background:transparent;
width:100%;
height:3rem;
text-align:center;
padding-top:10px;
&:hover{
  background:#0077b6;
}

`
export const Nav = styled.nav`
background-image: linear-gradient(to bottom, #0987A0, #805AD5);
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction:column;
  justify-content: start;
  align-items: center;
  padding-top: 100px;
  grid-column-start:1;
  grid-column-end:3;
`