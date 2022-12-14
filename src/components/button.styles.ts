import styled from "styled-components";
export type ButtonColor =
  | "primary"
  | "secundary"
  | "danger"
  | "sucess"
  | "warning";

interface ButtonContainerProps {
  bgColor: ButtonColor;
}
const buttonColors = {
  primary: "#100018",
  secundary: "#ff8a14",
  danger: "#a30f01",
  sucess: "#18ba64",
  warning: "#e6d406",
};
export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 171px;
  height: 56px;
  border: 4px;
  margin: 2rem;
  padding: 16px, 48px, 16px, 48px;

  ${(props) => {
    return `background-color: ${buttonColors[props.bgColor]}`;
  }}
`;
