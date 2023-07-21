'use client';
import { Tag } from '@/components/atoms/Tag/Tag';
import { Div, StyledTagField, StyledLabel } from './TagField.style';
import { useState } from 'react';

export type TagFieldProps = {
  setTags: (array: string[]) => void;
  tags: string[];
};
export const TagField = ({ setTags, tags }: TagFieldProps) => {
  const [text, setText] = useState('');

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      // Spacebar key code is 32
      // Enter key code is 13 whichever.
      event.preventDefault();

      if (text.trim() !== '') {
        setTags([...tags, text]);
        setText('');
      }
    } else if (event.keyCode === 8) {
      // Backspace key code is 8
      if (text === '' && tags.length > 0) {
        setTags(tags.slice(0, tags.length - 1));
      }
    }
  };

  return (
    <div className='w-full flex flex-col overflow-x-scroll'>
      <StyledLabel htmlFor='tagField'>Tag</StyledLabel>
      <Div>
        <div className='ml-[1rem]'>
          {tags.map((tag, index) => (
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
