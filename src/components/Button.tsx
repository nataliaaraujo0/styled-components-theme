import { ButtonProps } from "./button.interface";
import { ButtonContainer } from "./button.styles";

export const Button = ({ variant = "primary" }: ButtonProps) => {
  return <ButtonContainer variant={variant}>enviar</ButtonContainer>;
};
