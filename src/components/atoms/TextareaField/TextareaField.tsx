import { Div, StyledLabel, StyledTextarea } from './TextareaField.style';

export const TextareaField = () => {
  return (
    <Div>
      <StyledLabel htmlFor='comment'>コメントを書く</StyledLabel>
      <StyledTextarea id='textarea' name='comment' placeholder='このノートにコメント・質問してみましょう！' />
    </Div>
  );
};
