import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AppHeading = styled.h1`
  font-size: 25px;
  font-family: "Roboto ";
  color: #4c63b6;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  border-top: 0px solid #cbd5e1;
  border-bottom: 0px solid #cbd5e1;
  border-radius: 10px;
  margin-bottom: 20px;
  outline: none;
  box-shadow: 0 10px 30px #cbd5e1;
  padding: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const Input = styled.input`
  color: black;
  border: none;
  margin-bottom: 15px;
`;
export const InputTextarea = styled.textarea`
  font-family: "Bree Serif ";
  font-size: 16px;
  border: none;
  margin-bottom: 20px;
`;
export const NoteButton = styled.button`
  height: 30px;
  width: 70px;
  background-color: #4c63b6;
  color: white;
  border: none;
  border-radius: 10px;
  align-self: end;
`;

export const List = styled.ul`
  list-style-type: none;
`;
export const EmptyViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin: 0px;
`;
export const Image = styled.img`
  height: 100px;
  width: 100px;
`;
export const EmptyHeading = styled.h1`
  color: #aab8c8;
`;

export const EmptyParagraph = styled.p`
  color: #aab8c8;
`;
