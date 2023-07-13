import { Div } from './WelcomePageInputs.style';
import { InputField } from '../../atoms/InputField/InputField';
import { SelectField } from '../../atoms/SelectField/SelectField';
export type WelcomePageInputsProps = {};

export const WelcomePageInputs = ({}: WelcomePageInputsProps) => {
  return (
    <Div>
      <InputField label='ユーザ名' placeholder='Username' />
      <InputField label='メールアドレス' placeholder='Email' />
      <SelectField label='大学' placeholder='Select' />
    </Div>
  );
};
