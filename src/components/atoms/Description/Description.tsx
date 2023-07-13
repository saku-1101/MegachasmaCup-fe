import { StyledDescription } from './Description.style';
export type DescriptionProps = {
  description: string;
};

export const Description = ({ description }: DescriptionProps) => {
  return <StyledDescription>{description}</StyledDescription>;
};
