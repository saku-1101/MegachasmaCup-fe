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
        <InputField label='名前' value={user.name} readonly={true} />
        <InputField label='メールアドレス' value={user.email} />
        <InputField label='大学' value={user.school} readonly={true} />
        <InputField label='専攻' value={user.faculty} />
      </StyledGrid>
      <Button label='更新する' isSecondaryBg={false} />
    </StyledCard>
  );
};
