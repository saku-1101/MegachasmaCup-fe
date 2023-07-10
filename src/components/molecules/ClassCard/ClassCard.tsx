'use client';
import { useState } from 'react';
import { StyledCard } from './ClassCard.style';
import { MdTitle } from '../../atoms/MdTitle/MdTitle';
import { Description } from '../../atoms/Description/Description';
import { AddNoteSvg } from '../../../../public/index';
export type ClassCardProps = {
  title: string;
  numOfStudent: number;
  numOfNote: number;
};

export const ClassCard = ({ title, numOfStudent, numOfNote }: ClassCardProps) => {
  const [isHovered, setIsHovered] = useState('#131338');
  const handleAction = () => {
    console.log('Clicked');
  };
  return (
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
  );
};
