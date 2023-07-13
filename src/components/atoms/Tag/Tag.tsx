import { StyledTag } from './Tag.style';
export type TagProps = {
  text: string;
};

export const Tag = ({ text }: TagProps) => {
  return <StyledTag>{text}</StyledTag>;
};
