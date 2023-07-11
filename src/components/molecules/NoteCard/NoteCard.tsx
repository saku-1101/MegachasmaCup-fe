'use client';
import { StyledCard } from './NoteCard.style';
import { MdTitle } from '../../atoms/MdTitle/MdTitle';
import { Description } from '../../atoms/Description/Description';
import { TagSvg } from '../../../../public/index';
import { Tag } from '@/components/atoms/Tag/Tag';
import { LikeButton } from '../../atoms/LikeButton/LikeButton';
import { useState } from 'react';
export type NoteCardProps = {
  nameOfStudent: string;
  description: string;
  tags: Array<string>;
  numOfLike: number;
};

export const NoteCard = ({ nameOfStudent, description, tags, numOfLike }: NoteCardProps) => {
  const [on, setOn] = useState(false);
  const [like, setLike] = useState(numOfLike);
  const handleAction = () => {
    if (on) {
      setOn(false);
      const newlike = like - 1;
      setLike(newlike);
      // TODO: Post an updated number of like
    } else {
      setOn(true);
      const newlike = like + 1;
      setLike(newlike);
      // TODO: Post an updated number of like
    }
    console.log('Clicked');
  };
  return (
    <StyledCard>
      <div className='md:basis-1/5 flex md:justify-start justify-center'>
        <MdTitle title={nameOfStudent + 'のノート'} />
      </div>
      <div className='md:basis-1/3 max-h-[200px] overflow-y-scroll break-all'>
        <Description description={description} />
      </div>
      <div className='md:basis-1/4 flex items-center md:justify-start justify-center md:m-2 m-5'>
        <div className='p-2'>{TagSvg()}</div>
        <div className='max-w-[80%] max-h-[100px] flex flex-wrap overflow-y-scroll'>
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <button
          onClick={handleAction}
          className='max-h-[100px] max-w-[100px] flex flex-col justify-center items-center relative overflow-hidden'
        >
          <LikeButton on={on} />
          <span className='text-subtleText absolute right-50' style={{ bottom: '0%' }}>
            {like}
          </span>
        </button>
      </div>
    </StyledCard>
  );
};
