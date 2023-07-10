'use client';
import { Div, StyledButton } from './FirstEngagementButton.style';
import { Player } from '@lottiefiles/react-lottie-player';
import PoppingData from '@/assets/lottie/popping.json';
import { useRef, useState } from 'react';
export type FirstEngagementButtonProps = {
  label: string;
};

export const FirstEngagementButton = ({ label }: FirstEngagementButtonProps) => {
  const playerRef = useRef<Player>(null);
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    if (!playerRef.current) {
      return;
    }
    setIsActive(true);
    playerRef.current.play();
  };

  return (
    <Div>
      <StyledButton onClick={() => handleClick()} style={{ position: 'relative' }}>
        {label}
        <Player
          onEvent={(event) => {
            if (event === 'complete') {
              setIsActive(false);
            }
          }}
          ref={playerRef}
          src={PoppingData}
          style={{
            display: isActive ? 'inline' : 'none',
            position: 'absolute',
            bottom: '0',
            right: '-50%',
            width: '100%',
          }}
        />
      </StyledButton>
    </Div>
  );
};
