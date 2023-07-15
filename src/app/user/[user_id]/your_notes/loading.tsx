import { LoadingCard } from '@/components/atoms/LoadingCard/LoadingCard';
import { WrapperContainer, CoreContainer } from '@/components/common/containers';

const LoadingCards: Array<JSX.Element> = [];

for (let index = 0; index < 4; index++) {
  LoadingCards.push(<LoadingCard />);
}

export default function Loading() {
  return (
    <WrapperContainer>
      <CoreContainer>{LoadingCards}</CoreContainer>
    </WrapperContainer>
  );
}
