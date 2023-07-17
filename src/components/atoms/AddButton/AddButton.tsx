'use client';
import { useState } from 'react';
import { PlusSvg } from '../../../../public';
import { StyledButton } from './AddButton.style';
import { useRouter } from 'next/navigation';
import { PopUpWindow } from '@/components/organisms/PopUpWindow/PopUpWindow';
import { CommentAdder } from '@/components/molecules/CommentAdder/CommentAdder';

export type AddButtonProps = {
  isNoteAdd: boolean;
  isCommentAdd: boolean;
  user_id?: string;
  class_id?: string;
  note_id?: string;
};
export const AddButton = ({ isNoteAdd, isCommentAdd, user_id, class_id, note_id }: AddButtonProps) => {
  const [isHovered, setIsHovered] = useState('#FFFFFF');
  const [isClassAddPopupVisible, setIsClassAddPopupVisible] = useState(false);
  const [isCommentEditorVisible, setIsCommentEditorVisible] = useState(false);
  const router = useRouter();

  const handleAction = () => {
    // add note
    if (isNoteAdd) {
      const note_id = '0'; // TODO: note_idのuuid作成する
      router.push(`/user/${user_id}/class/${class_id}/note/${note_id}/edit`);
      return;
    } else if (isCommentAdd) {
      // add comment
      setIsCommentEditorVisible(true);
    } else {
      // add class
      setIsClassAddPopupVisible(true);
    }
  };
  return (
    <>
      <StyledButton
        onClick={handleAction}
        onMouseEnter={() => setIsHovered('#46D5B3')}
        onMouseLeave={() => setIsHovered('#FFFFFF')}
      >
        {PlusSvg(isHovered)}
        <p style={{ color: `${isHovered}` }}> Add</p>
      </StyledButton>
      {isClassAddPopupVisible ? (
        <PopUpWindow
          title='講義グループにジョイン！'
          subtitle={`講義グループに入り，講義ノートを作成してみよう！\nノートを作成するとみんなのノートが見れたり，コメントできたりするよ！`}
          isWelcomePage={false}
          isFirstNoteErrorPage={false}
          buttonLabel='この講義にジョイン！'
          user_id={user_id}
        />
      ) : (
        ''
      )}
      {isCommentEditorVisible ? (
        <CommentAdder user_id={user_id} class_id={class_id} note_id={note_id} numOfLike={0} />
      ) : (
        ''
      )}
    </>
  );
};
