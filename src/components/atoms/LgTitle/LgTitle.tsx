import { StyledLgTitle } from './LgTitle.style'
export type LgTitleProps = {
    title: string
};

export const LgTitle=({title}: LgTitleProps
)=>{
    return <StyledLgTitle>{title}</StyledLgTitle>
}