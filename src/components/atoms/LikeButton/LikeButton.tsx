'use client';
import { useRef, useState, useEffect } from 'react';
import { Player } from '@/components/common';
import LikeButtonData from '@/assets/lottie/like-button.json';
import { useTransition } from 'react';
export type LikeButtonProps = {
  didYouLiked: boolean;
  note_id?: string;
  comment_id?: string;
  numOfLike: number;
  incrementLikeToNote?: () => void;
  decrementLikeToNote?: () => void;
  // incrementLikeToComment?: () => void;
  // decrementLikeToComment?: () => void;
};
export const LikeButton = ({
  didYouLiked,
  note_id,
  numOfLike,
  incrementLikeToNote,
  decrementLikeToNote,
}: LikeButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const playerRef = useRef<Player>(null);
  const [prevClickSate, setPrevClickState] = useState(false);
  const [like, setLike] = useState(numOfLike);

  useEffect(() => {
    // レンダリング後実行
    if (didYouLiked) {
      if (!playerRef.current) {
        return;
      }
      playerRef.current.play();
      const newState = true;
      setPrevClickState(newState);
    }
  }, [setPrevClickState, didYouLiked, playerRef]);
  const handleAction = () => {
    if (!playerRef.current || note_id === undefined) {
      return;
    }
    if (prevClickSate) {
      playerRef.current.stop();
      setPrevClickState(false);
      const newlike = like - 1;
      setLike(newlike);
      decrementLikeToNote!();
    } else {
      playerRef.current.play();
      setPrevClickState(true);
      const newlike = like + 1;
      setLike(newlike);
      incrementLikeToNote!();
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <button
        onClick={() => startTransition(handleAction)}
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
