'use client';
import { Tag } from '@/components/atoms/Tag/Tag';
import { Div, StyledTagField, StyledLabel } from './TagField.style';
import { useState } from 'react';

export type TagFieldProps = {
  tagsFromRSC: Array<string>;
};
export const TagField = () => {
  const [text, setText] = useState('');
  const [array, setArray] = useState<string[]>([]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      // Spacebar key code is 32
      // Enter key code is 13 whichever.
      event.preventDefault();

      if (text.trim() !== '') {
        setArray([...array, text]);
        setText('');
      }
    } else if (event.keyCode === 8) {
      // Backspace key code is 8
      if (text === '' && array.length > 0) {
        setArray(array.slice(0, array.length - 1));
      }
    }
  };

  return (
    <div className='w-full flex flex-col overflow-x-scroll'>
      <StyledLabel htmlFor='tagField'>Tag</StyledLabel>
      <Div>
        <div className='ml-[1rem]'>
          {array.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
        <StyledTagField
          name='tagField'
          id='tagField'
          type='text'
          placeholder='Add Tag'
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </Div>
    </div>
  );
};
