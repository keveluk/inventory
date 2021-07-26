import styled from 'styled-components';

export const Main = styled.div`
  background-image: linear-gradient(to right, #0987A0, #805AD5);
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction:column;
  justify-content: start;
  align-items: center;
  grid-column: 3/-1;
  `
export const Header = styled.div`
// background: black;
// border:2px solid black;
width:100%;
// min-height:20vh;
height:auto;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  `
export const Section = styled.div`
background-image: linear-gradient(to right, #0987A0, #805AD5);
padding-bottom:50px;
padding-top:50px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction:column;
  `

  export const Item = styled.div`
  height:50px;
  display:flex;
  margin-top:10px;
  justify-content:center;
  // align-items:center;
  width:100%;

  
  `
  export const ItemChild = styled.div`
  height:50px;
  display:flex;
  width:200px;
  margin-left:5px;
  background:rgba(255, 255, 255, 0.75);
  color:#000;
  border-radius:5px;
  padding:10px 20px;
   display:flex;
    justify-content:center;
  align-items:center;

  &:last-child{
    background:rgb(211, 54, 80,0.75);
    width:50px;
    cursor:pointer;

  }
  `