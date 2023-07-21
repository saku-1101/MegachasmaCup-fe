import tw from 'tailwind-styled-components';

export const StyledCard = tw.div`
    w-full
    max-h-[300px]       
    margin-auto
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
export const Div = tw.div`
    flex
    items-center
    justify-between
    w-full
    h-full
`;
