import styled from "styled-components";
export type ButtonVariant =
  | "primary"
  | "secundary"
  | "danger"
  | "sucess"
  | "warning";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 171px;
  height: 56px;
  border: 4px;
  margin: 2rem;
  padding: 16px, 48px, 16px, 48px;
`;
