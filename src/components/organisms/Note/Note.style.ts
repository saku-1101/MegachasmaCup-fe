import tw from 'tailwind-styled-components';

export const StyledNote = tw.div`
    w-full 
    margin-auto
    md:p-[2rem]
    p-[0.5rem]
    border-2
    border-textBasic
    rounded-xl
    flex
    flex-col
    justify-center
    items-center
    bg-light
`;

export const NoteContentWrapper = tw.div`
    w-full
    md:py-[1rem]
    py-[0.5rem]
`;
export const NoteContent = tw.p`
    w-full
    md:py-[1rem]
    py-[0.5rem]
    text-textBasic
    text-[1rem]
`;
