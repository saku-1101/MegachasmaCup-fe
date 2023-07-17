import { StyledLabel, StyledInput } from './InputField.style';
export type InputFieldProps = {
  name: string;
  inputType: string;
  label: string;
  placeholder?: string;
  readonly?: boolean;
  value?: string;
  pattern?: string;
};

export const InputField = ({
  name,
  inputType,
  label,
  placeholder,
  readonly = false,
  value,
  pattern,
}: InputFieldProps) => {
  return (
    <>
      <div className='w-full flex flex-col'>
        <StyledLabel className='dark:text-light' htmlFor={name}>
          {label}
          <StyledInput
            type={inputType}
            name={name}
            id={name}
            placeholder={placeholder}
            readOnly={readonly}
            value={value}
            pattern={pattern}
            className='peer '
          />
          <span className='text-error invisible peer-invalid:visible'>
            {name === 'userName'
              ? '⚠️ユーザ名は三文字以上で入力してください'
              : name === 'email'
              ? '⚠️メールアドレスが不正です'
              : name === 'password'
              ? '⚠️8文字以上で1文字以上の数字、小文字アルファベット、大文字アルファベットをそれぞれ含んでください'
              : ''}
          </span>
        </StyledLabel>
      </div>
    </>
  );
};
