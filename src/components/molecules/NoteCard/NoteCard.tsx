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
  GetNoteQuery,
} from '@/codegen/gql/graphql';
import { gqlClient } from '@/lib/gqlClient';
import { getToken } from '@/lib/cookie';
import { Tag } from '@/components/atoms/Tag/Tag';
type Note = {
  id: string;
  title: string;
  description: string;
  userId: string;
  tags: {
    id: string;
    name: string;
  }[];
  likeUser: {
    id: string;
  }[];
};
export type NoteCardProps = {
  note: Note;
  user_id: string;
  class_id?: string;
};

export const NoteCard = async ({ note, user_id, class_id }: NoteCardProps) => {
  const token = getToken();
  gqlClient.setHeader('authorization', `Bearer ${token}`);
  const author = await gqlClient.request(GetAccountSettingsDocument, {
    input: {
      userID: note.userId,
    },
  });
  const handleIncrementLike = async () => {
    'use server';
    const res = await gqlClient.request(IncrementLikeDocument, {
      noteID: note.id,
    });
  };
  const handleDecrementLike = async () => {
    'use server';
    const res = await gqlClient.request(DecrementLikeDocument, {
      noteID: note.id,
    });
  };
  const didYouLiked = (n: Note, currentUserId: string): boolean => {
    return n.likeUser.some((u) => u.id === currentUserId);
  };
  return (
    <StyledCard>
      <div className='md:basis-1/5 flex md:justify-start justify-center'>
        <a href={`/user/${user_id}/class/${class_id}/note/${note.id}`}>
          <MdTitle title={author.getUser[0].name + 'のノート'} />
        </a>
      </div>
      <div className='md:basis-1/3 max-h-[200px] overflow-y-scroll break-all'>
        <Description description={note.description} />
      </div>
      <div className='md:basis-1/4 flex items-center md:justify-start justify-center md:m-2 m-5'>
        <div className='p-2'>{TagSvg()}</div>
        <div className='max-w-[80%] max-h-[100px] flex flex-wrap overflow-y-scroll'>
          {note.tags.map((tag, index) => (
            <Tag key={index} text={tag.name} />
          ))}
        </div>
      </div>
      <LikeButton
        didYouLiked={didYouLiked(note, user_id)}
        note_id={note.id}
        numOfLike={note.likeUser.length}
        incrementLikeToNote={handleIncrementLike}
        decrementLikeToNote={handleDecrementLike}
      />
    </StyledCard>
  );
};
