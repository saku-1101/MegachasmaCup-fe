import { Div, StyledButton } from './Button.style';
export type ButtonProps = {
  label: string;
  isSecondaryBg: boolean;
  handleAction?: () => void;
};

export const Button = ({ label, isSecondaryBg, handleAction }: ButtonProps) => {
  return (
    <Div>
      <StyledButton $isSecondary={isSecondaryBg} onClick={handleAction}>
        {label}
      </StyledButton>
    </Div>
  );
};
