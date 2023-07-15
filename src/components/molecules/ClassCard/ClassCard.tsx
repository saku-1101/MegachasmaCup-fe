'use client';
import { useState } from 'react';
import { StyledCard } from './ClassCard.style';
import { MdTitle } from '../../atoms/MdTitle/MdTitle';
import { Description } from '../../atoms/Description/Description';
import { AddNoteSvg } from '../../../../public/index';
import { useRouter } from 'next/navigation';

export type ClassCardProps = {
  class_id: string;
  title: string;
  numOfStudent: number;
  numOfNote: number;
  user_id: string;
};

export const ClassCard = ({ class_id, title, numOfStudent, numOfNote, user_id }: ClassCardProps) => {
  const [isHovered, setIsHovered] = useState('#131338');
  const router = useRouter();
  const handleAction = () => {
    // TODO: note editに飛ぶ
    const note_id = '0'; // TODO: note_idのuuid作成する
    router.push(`/user/${user_id}/class/${class_id}/note/${note_id}/edit`);
    router.refresh();
  };
  return (
    <>
      <StyledCard>
        <MdTitle title={title} />
        <Description description={numOfStudent.toString() + '人がこの講義に参加しています'} />
        <div className='text-dark'>
          <p>📝Note投稿数:</p>
          <p>{numOfNote}冊</p>
        </div>
        <button
          onClick={handleAction}
          onMouseEnter={() => setIsHovered('#46D5B3')}
          onMouseLeave={() => setIsHovered('#131338')}
          className='py-[1rem]'
        >
          {AddNoteSvg(isHovered)}
        </button>
      </StyledCard>
    </>
  );
};
