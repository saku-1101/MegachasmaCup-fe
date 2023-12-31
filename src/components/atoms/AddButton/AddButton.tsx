'use client';
import { useState } from 'react';
import { PlusSvg } from '../../../../public';
import { StyledButton } from './AddButton.style';
import { useRouter } from 'next/navigation';
import { PopUpWindow } from '@/components/organisms/PopUpWindow/PopUpWindow';
import { CommentAdder } from '@/components/molecules/CommentAdder/CommentAdder';
import { GetAccountSettingsQuery } from '@/codegen/gql/graphql';

export type AddButtonProps = {
  isNoteAdd: boolean;
  isCommentAdd: boolean;
  user?: GetAccountSettingsQuery;
  user_id?: string;
  class_id?: string;
  school_id?: string;
  note_id?: string;
};
export const AddButton = ({ isNoteAdd, isCommentAdd, user, user_id, class_id, school_id, note_id }: AddButtonProps) => {
  const [isHovered, setIsHovered] = useState('#131338');
  const [isClassAddPopupVisible, setIsClassAddPopupVisible] = useState(false);
  const [isCommentEditorVisible, setIsCommentEditorVisible] = useState(false);
  const router = useRouter();

  const handleAction = () => {
    // add note
    if (isNoteAdd) {
      const note_id = '0'; // TODO: note_idのuuid作成する
      router.push(`/user/${user_id}/class/${class_id}/note/edit`);
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
        onMouseEnter={() => setIsHovered('#FAFCFE')}
        onMouseLeave={() => setIsHovered('#131338')}
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
          isSchoolRegistration='false'
          buttonLabel='この講義にジョイン！'
          user_id={user_id}
          school_id={school_id}
        />
      ) : (
        ''
      )}
      {isCommentEditorVisible ? <CommentAdder user={user!} class_id={class_id} note_id={note_id} numOfLike={0} /> : ''}
    </>
  );
};
