'use client';
import { StyledCard } from './NoteCard.style';
import { MdTitle } from '../../atoms/MdTitle/MdTitle';
import { Description } from '../../atoms/Description/Description';
import { TagSvg } from '../../../../public/index';
import { Tag } from '@/components/atoms/Tag/Tag';
import { LikeButton } from '../../atoms/LikeButton/LikeButton';
export type NoteCardProps = {
  nameOfStudent: string;
  description: string;
  tags: Array<string>;
  numOfLike: number;
};

export const NoteCard = ({ nameOfStudent, description, tags, numOfLike }: NoteCardProps) => {
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
      <LikeButton numOfLike={numOfLike} />
    </StyledCard>
  );
};
