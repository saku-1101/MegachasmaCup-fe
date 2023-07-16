import { Div, StyledButton } from './Button.style';
export type ButtonProps = {
  label: string;
  isSecondaryBg: boolean;
  formId?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  handleAction?: () => void;
};

export const Button = ({ label, isSecondaryBg, formId, type = 'button', handleAction }: ButtonProps) => {
  return (
    <Div>
      <StyledButton type={type} form={formId} $isSecondary={isSecondaryBg} onClick={handleAction}>
        {label}
      </StyledButton>
    </Div>
  );
};
