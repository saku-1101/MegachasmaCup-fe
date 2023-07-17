import { StyledLabel, StyledSelect } from './SelectField.style';
export type SelectFieldProps = {
  name: string;
  label: string;
  placeholder: string;
};

export const SelectField = ({ name, label, placeholder }: SelectFieldProps) => {
  const someAction = () => {
    console.log('yay!');
  };
  return (
    <>
      <div className='w-full flex flex-col'>
        <StyledLabel htmlFor={label}>
          {label}
          <StyledSelect name={name} id={label} placeholder={placeholder} style={{ appearance: 'menulist' }}>
            <option disabled selected>
              Select
            </option>
            <option value='US'>United States</option>
            <option value='CA'>Canada</option>
            <option value='FR'>France</option>
            <option value='DE'>Germany</option>
          </StyledSelect>
        </StyledLabel>
      </div>
    </>
  );
};
