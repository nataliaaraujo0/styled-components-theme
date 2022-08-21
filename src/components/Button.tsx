import { ButtonProps } from "./button.interface";
import { ButtonContainer } from "./button.styles";

export const Button = ({ bgColor = "primary" }: ButtonProps) => {
  return <ButtonContainer bgColor={bgColor}>enviar</ButtonContainer>;
};
