import tw from 'tailwind-styled-components';

export const StyledCard = tw.div`
    w-full
    md:h-[200px]    
    h-[250px]    
    margin-auto
    md:p-[3.25rem]
    p-[0.3rem]
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
