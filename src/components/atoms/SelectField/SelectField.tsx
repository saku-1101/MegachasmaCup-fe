import { StyledLabel, StyledSelect } from './SelectField.style';
export type SelectFieldProps = {
  label: string;
  placeholder: string;
};

export const SelectField = ({ label, placeholder }: SelectFieldProps) => {
  return (
    <>
      <div className='w-full max-w-[350px] flex flex-col'>
        <StyledLabel htmlFor={label}>{label}</StyledLabel>
        <StyledSelect name={label} id={label} placeholder={placeholder} style={{ appearance: 'menulist' }}>
          <option disabled selected>
            Select
          </option>
          <option value='US'>United States</option>
          <option value='CA'>Canada</option>
          <option value='FR'>France</option>
          <option value='DE'>Germany</option>
        </StyledSelect>
      </div>
    </>
  );
};
