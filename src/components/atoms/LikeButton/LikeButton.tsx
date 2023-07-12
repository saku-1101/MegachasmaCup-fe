'use client';
import { useRef, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import LikeButtonData from '@/assets/lottie/like-button.json';

export type LikeButtonProps = {
  numOfLike: number;
};
export const LikeButton = ({ numOfLike }: LikeButtonProps) => {
  const playerRef = useRef<Player>(null);
  const [prevClickSate, setPrevClickState] = useState(false);
  const [like, setLike] = useState(numOfLike);
  const handleAction = () => {
    if (!playerRef.current) {
      return;
    }
    if (prevClickSate) {
      playerRef.current.stop();
      setPrevClickState(false);
      const newlike = like - 1;
      setLike(newlike);
      // TODO: Post an updated number of like
    } else {
      playerRef.current.play();
      setPrevClickState(true);
      const newlike = like + 1;
      setLike(newlike);
      // TODO: Post an updated number of like
    }
    console.log('Clicked');
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
