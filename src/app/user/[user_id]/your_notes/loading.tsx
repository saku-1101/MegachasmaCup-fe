import { LoadingCard } from '@/components/atoms/LoadingCard/LoadingCard';
import { WrapperContainer, CoreContainer, Div } from '@/components/common/containers';

const LoadingCards: Array<JSX.Element> = [];

for (let index = 0; index < 4; index++) {
  LoadingCards.push(<LoadingCard />);
}

export default function Loading() {
  return (
    <WrapperContainer>
      <CoreContainer>
        <Div>{LoadingCards}</Div>
      </CoreContainer>
    </WrapperContainer>
  );
}
