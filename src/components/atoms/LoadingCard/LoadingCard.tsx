import { StyledCard } from '@/components/molecules/ClassCard/ClassCard.style';
import { Div } from './LoadingCard.style';
export type LoadingCardProps = {};

export const LoadingCard = ({}: LoadingCardProps) => {
  return (
    <Div className='loading'>
      <div className='absolute inset-0 bg-white overflow-hidden z-50'>
        <div className='absolute top-0 left-0 z-100 block w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-skeleton-animation duration-1200 linear infinite'></div>
        <div className='block w-full h-full bg-gray-300 rounded-full'></div>
        <div className='block mt-10 h-20 bg-gray-300'></div>
      </div>
    </Div>
  );
};
