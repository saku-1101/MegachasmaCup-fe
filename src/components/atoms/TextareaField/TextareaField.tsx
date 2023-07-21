import { Div, StyledLabel, StyledTextarea } from './TextareaField.style';

export const TextareaField = () => {
  return (
    <Div>
      <StyledLabel htmlFor='description'>コメントを書く</StyledLabel>
      <StyledTextarea id='textarea' name='description' placeholder='このノートにコメント・質問してみましょう！' />
    </Div>
  );
};
