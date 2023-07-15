import { AccountSvg } from '../../../../public';
import { StyledCard, StyledGrid } from './AccountCard.style';
import { InputField } from '../../atoms/InputField/InputField';
import { Button } from '../../atoms/Button/Button';
export type AccountCardProps = {
  user: {
    id: string;
    name: string;
    email: string;
    school: string;
    faculty: string;
    year: number;
  };
};

export const AccountCard = ({ user }: AccountCardProps) => {
  return (
    <StyledCard>
      <div>{AccountSvg()}</div>
      <StyledGrid>
        <InputField
          name='name'
          inputType='text'
          label='ユーザ名'
          placeholder='ユーザ名'
          value={user.name}
          readonly={true}
        />
        <InputField
          name='email'
          inputType='email'
          label='メールアドレス'
          placeholder='メールアドレス'
          value={user.email}
          readonly={false}
        />
        <InputField
          name='school'
          inputType='text'
          label='大学'
          placeholder='大学'
          value={user.school}
          readonly={true}
        />
        <InputField
          name='faculty'
          inputType='text'
          label='学部'
          placeholder='学部'
          value={user.faculty}
          readonly={false}
        />
      </StyledGrid>
      <Button label='更新する' isSecondaryBg={false} />
    </StyledCard>
  );
};
