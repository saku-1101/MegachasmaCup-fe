import { Div } from './WelcomeAnimation.style';
import { Player } from '@/components/common';
import gettingStartedData from '@/assets/lottie/getting-started.json';

export const WelcomeAnimation = () => {
  return (
    <Div>
      <Player autoplay loop src={gettingStartedData} style={{ width: '80%' }} />
    </Div>
  );
};
