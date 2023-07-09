import { useEffect, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import LikeButtonData from '@/assets/lottie/like-button.json';

export type LikeButtonProps = {
  on: boolean;
};
export const LikeButton = ({ on }: LikeButtonProps) => {
  const playerRef = useRef<Player>(null);
  useEffect(() => {
    if (!playerRef.current) {
      return;
    }
    if (on) {
      playerRef.current.play();
    } else {
      playerRef.current.stop();
    }
  }, [on]);

  return (
    <Player ref={playerRef} src={LikeButtonData} keepLastFrame style={{ height: '300px', width: '300px' }}></Player>
  );
};
