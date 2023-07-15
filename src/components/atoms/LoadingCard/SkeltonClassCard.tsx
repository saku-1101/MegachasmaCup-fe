import { StyledCard } from './LoadingCard.style';
export const SkeltonClassCard = () => {
  return (
    <>
      <StyledCard>
        <div className='flex flex-col  justify-center items-center w-full  space-y-3'>
          <div className='w-96 bg-gray-300  h-2 rounded-md '></div>
          <div className='w-96 bg-gray-300 h-2 rounded-md '></div>
          <div className='w-96 bg-gray-300 h-2 rounded-md '></div>
        </div>
      </StyledCard>
    </>
  );
};
