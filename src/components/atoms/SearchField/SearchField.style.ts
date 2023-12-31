import tw from 'tailwind-styled-components';

export const StyledInput = tw.input`
block    
w-full
text-subtleText
    p-[1rem]
    mt-[0.5rem]
    bg-light
    border
    rounded-[50px]
    shadow
    border-subtleText
    hover:border-textBasic
    focus:border-textBasic
    invalid:border-error
`;
