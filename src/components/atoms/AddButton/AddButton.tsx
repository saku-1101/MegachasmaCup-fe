'use client';
import { useState } from 'react';
import { PlusSvg } from '../../../../public';
import { StyledButton } from './AddButton.style';
import { useRouter } from 'next/navigation';
import { PopUpWindow } from '@/components/organisms/PopUpWindow/PopUpWindow';

export type AddButtonProps = {
  isNoteAdd: boolean;
  user_id?: string;
  class_id?: string;
};
export const AddButton = ({ isNoteAdd, user_id, class_id }: AddButtonProps) => {
  const [isHovered, setIsHovered] = useState('#131338');
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const handleAction = () => {
    // add note
    if (isNoteAdd) {
      const note_id = '0'; // TODO: note_idのuuid作成する
      router.push(`/user/${user_id}/class/${class_id}/note/${note_id}/edit`);
      return;
    }
    // add class
    setIsVisible(true);
  };
  return (
    <>
      <StyledButton
        onClick={handleAction}
        onMouseEnter={() => setIsHovered('#FAFCFE')}
        onMouseLeave={() => setIsHovered('#131338')}
      >
        {PlusSvg(isHovered)}
        <p style={{ color: `${isHovered}` }}>Add</p>
      </StyledButton>
      {isVisible ? (
        <PopUpWindow
          title='講義グループにジョイン！'
          subtitle={`講義グループに入り，講義ノートを作成してみよう！\nノートを作成するとみんなのノートが見れたり，コメントできたりするよ！`}
          isWelcomePage={false}
          buttonLabel='この講義にジョイン！'
        />
      ) : (
        ''
      )}
    </>
  );
};
