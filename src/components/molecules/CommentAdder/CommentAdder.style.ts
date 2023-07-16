import tw from 'tailwind-styled-components';

export const StyledCard = tw.div`
    w-full
    max-h-[400px]       
    md:p-[1rem]
    p-[0.5rem]
    border-2
    border-textBasic
    rounded-xl
    md:flex
    md:flex-col
    justify-center
    items-start
    bg-light
    md:overflow-hidden
    overflow-y-scroll
`;
