import { StyledMdTitle } from './MdTitle.style';
export type MdTitleProps = {
  title: string;
};

export const MdTitle = ({ title }: MdTitleProps) => {
  return <StyledMdTitle>{title}</StyledMdTitle>;
};
