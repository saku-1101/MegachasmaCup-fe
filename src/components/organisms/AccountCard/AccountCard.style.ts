import tw from 'tailwind-styled-components';

export const StyledCard = tw.div`
    w-full    
    margin-auto
    md:p-[3.25rem]
    p-[1rem]
    border-2
    border-textBasic
    rounded-xl
    flex
    justify-between
    items-center
    bg-light
    flex-col
    dark:bg-[#3E3D38]

`;

export const StyledGrid = tw.div`
    p-[1rem] grid md:grid-cols-2 md:grid-rows-2 md:gap-5  grid-cols-1 grid-rows-4 gap-5 
`;
