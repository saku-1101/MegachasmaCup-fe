import { StyledLabel, StyledInput } from './InputField.style';
export type InputFieldProps = {
  label: string;
  placeholder?: string;
  readonly?: boolean;
  value?: string;
};

export const InputField = ({ label, placeholder, readonly = false, value }: InputFieldProps) => {
  return (
    <>
      <div className='w-full max-w-[350px] flex flex-col'>
        <StyledLabel htmlFor={label}>{label}</StyledLabel>
        <StyledInput name={label} id={label} placeholder={placeholder} readOnly={readonly} value={value} />
      </div>
    </>
  );
};
