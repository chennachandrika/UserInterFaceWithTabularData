import styled from "styled-components";

export const UserInterfaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10%;
  height: 100%;
`;

export const UserInterfaceHeading = styled.h1`
  font-size: 20px;
  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

export const ColumnCreationForm = styled.form`
  padding: 10%;
  border: 1px solid black;
  border-radius: 10px;
`;

export const InputContianer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const InputLabel = styled.label``;
export const InputField = styled.input`
  padding: 10px;
  outline: none;
  width: 175px;
`;
export const SelectorItem = styled.select`
  padding: 10px;
  outline: none;
  width: 200px;
`;
export const Option = styled.option``;

export const Submit = styled.button`
  padding: 10px;
  background-color: black;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
`;
