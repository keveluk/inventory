import styled from 'styled-components';
import {Link } from 'react-router-dom';

export const Anchor = styled(Link)`
color:white;
font-size:1.5rem;
border:2px solid #fff;
margin:5px;
background:transparent;
width:60%;
height:3rem;
text-align:center;
padding:8px;
transition: 0.1s;
&:hover{
  background:#fff;
  color:#000;
}

`
export const Nav = styled.nav`
background-image: linear-gradient(to bottom, #0987A0, #805AD5);
  height: 100%;
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  overflow-x: hidden;
  display: flex;
  flex-direction:column;
  justify-content: start;
  align-items: center;
  padding-top: 100px;
  grid-column-start:1;
  grid-column-end:3;
  width:16%;
`