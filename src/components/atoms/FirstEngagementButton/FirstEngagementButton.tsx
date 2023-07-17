'use client';
import { Div, StyledButton } from './FirstEngagementButton.style';
import { Player } from '@/components/common';
import PoppingData from '@/assets/lottie/popping.json';
import { useRef, useState } from 'react';
export type FirstEngagementButtonProps = {
  label: string;
  formId?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  handleAction?: () => void;
};

export const FirstEngagementButton = ({ label, formId, type = 'submit', handleAction }: FirstEngagementButtonProps) => {
  const playerRef = useRef<Player>(null);
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    if (!playerRef.current) {
      return;
    }
    setIsActive(true);
    playerRef.current.play();
    if (type === 'button') {
      console.log(handleAction!());
      handleAction!();
    }
  };

  return (
    <Div>
      <StyledButton
        id='submitButton'
        type={type}
        form={formId}
        onClick={() => handleClick()}
        style={{ position: 'relative' }}
      >
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
            width: '200%',
          }}
        />
      </StyledButton>
    </Div>
  );
};
