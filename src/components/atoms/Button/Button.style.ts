import tw from 'tailwind-styled-components';

export const Div = tw.div`
    w-full
    flex
    items-center
    justify-center
    p-[1rem]
`;
interface ButtonProps {
  $isSecondary: boolean;
}
export const StyledButton = tw.button<ButtonProps>`
    px-4 
    py-2
    rounded
    justify-center
    items-center
    dark:bg-[#A7A7A7]
    ${(p) => (p.$isSecondary ? 'bg-secondary' : 'bg-primary')}
    ${(p) => (p.$isSecondary ? 'text-light' : 'text-dark')}
    ${(p) => (p.$isSecondary ? 'hover:bg-secondarySecond' : 'hover:bg-primarySecond')}
`;
