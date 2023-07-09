import LandingLogoData from '@/assets/lottie/landing-logo.json';
import { Player } from '@lottiefiles/react-lottie-player';
export type LandingLogoProps = {};

export const LandingLogo = ({}: LandingLogoProps) => {
  return <Player autoplay loop src={LandingLogoData}></Player>;
};
