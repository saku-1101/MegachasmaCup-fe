import { Div } from './EmptyPageContent.style';
import { LgTitle } from '../../atoms/LgTitle/LgTitle';
import { Description } from '../../atoms/Description/Description';
import { WelcomeAnimation } from '../../atoms/WelcomeAnimation/WelcomeAnimation';

export const EmptyPageContent = () => {
  return (
    <Div>
      <LgTitle title='こんにちは！' />
      <Description description='ここはまだとても静かです' />
      <WelcomeAnimation />
    </Div>
  );
};
