import styled from 'styled-components';


export const FormGroup = styled.div`
    position: relative;
  padding: 15px 0 0;
  width: 200px;
  margin:10px;
`
export const Left = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100%;
  margin:10px;
`
export const Right = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  margin:10px;
`
export const Btn = styled.button`
  border: 2px solid #fff;
  height: 30px;
  width: 50px;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;
`
export const H1 = styled.h1`
  margin-top:10px;
  font-weight:200;
  color:#fff;
  `
  
export const Input = styled.input`
font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #fff;
  outline: 0;
  font-size: 1.3rem;
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }
  `
export const Label = styled.label`
position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #fff;

  `