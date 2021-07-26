import styled from 'styled-components';


export const FormGroup = styled.div`
    position: relative;
  padding: 15px 0 0;
  width: 200px;
  margin:10px;
`
export const Left = styled.div`
    display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  width: 90%;
  margin:10px;
`
export const Right = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  margin:10px;
`
export const Btn = styled.button`
  border: 2px solid #fff;
  height: 30px;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  margin: 25px;
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