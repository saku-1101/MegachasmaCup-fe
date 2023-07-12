import { Div, StyledLabel, StyledTextarea } from './TextareaField.style';

export const TextareaField = () => {
  return (
    <Div>
      <StyledLabel htmlFor='textarea'>ノートの説明</StyledLabel>
      <StyledTextarea
        id='textarea'
        name='textarea'
        placeholder='読む人がわかりやすいように，このノートについて簡単に説明しましょう！'
      />
    </Div>
  );
};
