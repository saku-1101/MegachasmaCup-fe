'use client';
import { useRef, useState } from 'react';
import { Player } from '@/components/common';
import LikeButtonData from '@/assets/lottie/like-button.json';

export type LikeButtonProps = {
  isLikeToComment: boolean;
  note_id?: string;
  comment_id?: string;
  numOfLike: number;
};
export const LikeButton = ({ isLikeToComment, note_id, comment_id, numOfLike }: LikeButtonProps) => {
  const playerRef = useRef<Player>(null);
  const [prevClickSate, setPrevClickState] = useState(false);
  const [like, setLike] = useState(numOfLike);
  const handleAction = () => {
    // comment_id, note_idどっちもがない時また，playerRef.currentがない時
    if (!playerRef.current || (comment_id === undefined && note_id === undefined)) {
      console.log(comment_id, note_id);

      return;
    }
    if (prevClickSate) {
      playerRef.current.stop();
      setPrevClickState(false);
      const newlike = like - 1;
      setLike(newlike);
      // TODO: Post an updated number of like
      // update the number of the heart with note_id or comment_id
      if (isLikeToComment) {
        // with comment_id
      } else {
        // with note_id
      }
    } else {
      playerRef.current.play();
      setPrevClickState(true);
      const newlike = like + 1;
      setLike(newlike);
      // TODO: Post an updated number of like
      // update the number of the heart with note_id or comment_id
      if (isLikeToComment) {
        // with comment_id
      } else {
        // with note_id
      }
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <button
        onClick={handleAction}
        className='max-h-[100px] max-w-[100px] flex flex-col justify-center items-center relative overflow-hidden'
      >
        <Player ref={playerRef} src={LikeButtonData} keepLastFrame style={{ height: '300px', width: '300px' }}></Player>
        <span className='text-subtleText absolute right-50' style={{ bottom: '0%' }}>
          {like}
        </span>
      </button>
    </div>
  );
};
