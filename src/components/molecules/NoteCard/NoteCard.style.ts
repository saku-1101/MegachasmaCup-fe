import tw from 'tailwind-styled-components';

export const StyledCard = tw.div`
    w-full
    md:max-h-[200px]    
    max-h-[400px]    
    margin-auto
    md:p-[3.25rem]
    p-[2rem]
    border-2
    border-textBasic
    rounded-xl
    md:flex
    md:flex-row
    justify-between
    items-center
    bg-light
    block
    md:overflow-hidden
    overflow-y-scroll
`;
