import { Div } from './LoadingCard.style';
import { SkeltonClassCard } from './SkeltonClassCard';
import { JsxElement } from 'typescript';
// export type LoadingCardProps = {
//   SkeltonClassCard: JsxElement;
// };

export const LoadingCard = () => {
  return (
    <Div className='flex rounded-xl animate-pulse flex-row items-center h-full justify-center space-x-5'>
      <div className='w-full bg-gray-300 h-full '>
        <SkeltonClassCard></SkeltonClassCard>
      </div>
    </Div>
  );
};
