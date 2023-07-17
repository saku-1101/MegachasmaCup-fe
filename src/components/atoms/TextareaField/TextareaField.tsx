import { Div, StyledLabel, StyledTextarea } from './TextareaField.style';

export const TextareaField = () => {
  return (
    <Div className='text-black'>
      <StyledLabel htmlFor='textarea'>コメントを書く</StyledLabel>
      <StyledTextarea id='textarea' name='textarea' placeholder='このノートにコメント・質問してみましょう！' />
    </Div>
  );
};
