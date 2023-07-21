import { StyledCard } from './NoteCard.style';
import { MdTitle } from '../../atoms/MdTitle/MdTitle';
import { Description } from '../../atoms/Description/Description';
import { TagSvg } from '../../../../public/index';
import { LikeButton } from '../../atoms/LikeButton/LikeButton';
import {
  GetAccountSettingsDocument,
  IncrementLikeDocument,
  DecrementLikeDocument,
  Tag as TagType,
} from '@/codegen/gql/graphql';
import { gqlClient } from '@/lib/gqlClient';
import { getToken } from '@/lib/cookie';
import { Tag } from '@/components/atoms/Tag/Tag';
export type NoteCardProps = {
  note_id: string;
  user_id: string;
  class_id?: string;
  idOfAuthor: string;
  description: string;
  tags: Array<TagType>;
  numOfLike: number;
};

export const NoteCard = async ({
  note_id,
  user_id,
  class_id,
  idOfAuthor,
  description,
  tags,
  numOfLike,
}: NoteCardProps) => {
  const token = getToken();
  gqlClient.setHeader('authorization', `Bearer ${token}`);
  const author = await gqlClient.request(GetAccountSettingsDocument, {
    input: {
      userID: idOfAuthor,
    },
  });
  const handleIncrementLike = async () => {
    'use server';
    const res = await gqlClient.request(IncrementLikeDocument, {
      noteID: note_id,
    });
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log(res.like.likeUser.length);
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
  };
  const handleDecrementLike = async () => {
    'use server';
    const res = await gqlClient.request(DecrementLikeDocument, {
      noteID: note_id,
    });
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log(res.deleteLike.likeUser.length);
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
  };
  return (
    <StyledCard>
      <div className='md:basis-1/5 flex md:justify-start justify-center'>
        <a href={`/user/${user_id}/class/${class_id}/note/${note_id}`}>
          <MdTitle title={author.getUser[0].name + 'のノート'} />
        </a>
      </div>
      <div className='md:basis-1/3 max-h-[200px] overflow-y-scroll break-all'>
        <Description description={description} />
      </div>
      <div className='md:basis-1/4 flex items-center md:justify-start justify-center md:m-2 m-5'>
        <div className='p-2'>{TagSvg()}</div>
        <div className='max-w-[80%] max-h-[100px] flex flex-wrap overflow-y-scroll'>
          {tags.map((tag, index) => (
            <Tag key={index} text={tag.name} />
          ))}
        </div>
      </div>
      <LikeButton
        isLikeToComment={false}
        note_id={note_id}
        numOfLike={numOfLike}
        incrementLikeToNote={handleIncrementLike}
        decrementLikeToNote={handleDecrementLike}
      />
    </StyledCard>
  );
};
