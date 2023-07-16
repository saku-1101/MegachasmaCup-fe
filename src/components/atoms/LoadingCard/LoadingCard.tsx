import { StyledCard } from './LoadingCard.style';
import { SkeltonClassCard } from './SkeltonClassCard';
// export type LoadingCardProps = {
//   SkeltonClassCard: JsxElement;
// };

export const LoadingCard = () => {
  return (
    <StyledCard>
      <SkeltonClassCard></SkeltonClassCard>
    </StyledCard>
  );
};
