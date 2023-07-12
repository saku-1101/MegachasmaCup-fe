import { AccountSvg } from '../../../../public';
import { Div } from './UserWithLike.style';
import { LikeButton } from '../../atoms/LikeButton/LikeButton';
export type UserWithLikeProps = {
  user: {
    id: string;
    name: string;
    faculty: string;
    year: number;
  };
  numOfLike: number;
};

export const UserWithLike = ({ user, numOfLike }: UserWithLikeProps) => {
  return (
    <Div>
      <Div className='justify-start'>
        {AccountSvg()}
        <div className='pl-[1rem] flex flex-col'>
          <p>
            {user.faculty} {`${user.year}年`}
          </p>
          <p>{user.name}</p>
        </div>
      </Div>
      <LikeButton numOfLike={numOfLike} />
    </Div>
  );
};
