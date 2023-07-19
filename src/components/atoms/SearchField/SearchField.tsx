import { StyledInput } from './SearchField.style';
import { useState, useEffect, useCallback } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import schools from '@/mockData/schools.json';
import classes from '@/mockData/classes.json';
import { getCookie } from 'cookies-next';
import { gqlClient } from '@/lib/gqlClient';
import { GetSchoolsDocument } from '@/codegen/gql/graphql';

export type SearchFieldProps = {
  name: string;
  isSchoolSelectField: boolean;
};

export const SearchField = ({ name, isSchoolSelectField }: SearchFieldProps) => {
  const [showResults, setShowResults] = useState<Array<{ id: string; name: string }> | null>(null);
  const [inputValue, setInputValue] = useState('');
  const debouncedInputText = useDebounce(inputValue, 500);
  // 検索欄への入力値ハンドリング
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
    search(debouncedInputText);
  };
  const handleLiClick = (name: string) => {
    setInputValue(name);
  };

  useEffect(() => {
    // キーワードの変更を検知して、ブログ検索画面へ遷移させる
    if (inputValue && debouncedInputText) {
      search(debouncedInputText);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, debouncedInputText]);

  // 検索欄への入力値で絞り込む
  const search = useCallback(
    (value: string) => {
      if (value === '') {
        setShowResults([]);
        return;
      }
      const token = getCookie('token');
      gqlClient.setHeader('authorization', `Bearer ${token}`);
      gqlClient.request(GetSchoolsDocument, {
        searchWord: value,
      });

      if (isSchoolSelectField) {
        const searchedPosts = schools.data.filter(
          (school) =>
            Object.values(school).filter(
              (item) => item !== undefined && item !== null && item.toUpperCase().includes(value.toUpperCase()),
            ).length > 0,
        );
        setShowResults(searchedPosts);
      } else {
        const searchedPosts = classes.data.filter(
          (cl) =>
            Object.values(cl).filter(
              (item) =>
                item !== undefined && item !== null && item.toString().toUpperCase().includes(value.toUpperCase()),
            ).length > 0,
        );
        setShowResults(searchedPosts);
      }
    },
    [isSchoolSelectField],
  );

  return (
    <div>
      <h4>{isSchoolSelectField ? '大学を検索' : '講義を検索'}</h4>
      <StyledInput name={name} type='text' value={inputValue} onChange={(e) => handleInputChange(e)} />
      <ul className='pt-[1rem]'>
        {showResults !== null
          ? showResults.map((el) => (
              <li
                key={el.id}
                onClick={() => handleLiClick(el.name)}
                className='hover:bg-primarySecond border rounded-sm'
              >
                {el.name}
              </li>
            ))
          : ''}
      </ul>
    </div>
  );
};
