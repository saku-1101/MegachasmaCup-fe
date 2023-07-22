import { StyledInput } from './SearchField.style';
import { useState, useEffect, useCallback } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import type { GetClassesQuery, GetSchoolsQuery } from '@/codegen/gql/graphql';

export type SearchFieldProps = {
  name: string;
  isSchoolSelectField: 'true' | 'false';
};

export const SearchField = ({ name, isSchoolSelectField }: SearchFieldProps) => {
  const [showSchoolsResults, setSchoolsShowResults] = useState<GetSchoolsQuery>({ getSchools: [] });
  const [showClassesResults, setClassesShowResults] = useState<GetClassesQuery>({ getClasses: [] });
  const [inputValue, setInputValue] = useState('');
  const debouncedInputText = useDebounce(inputValue, 800);

  // 検索欄への入力値ハンドリング
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
    search(debouncedInputText);
  };
  const handleLiClick = (name: string) => {
    setInputValue(name);
  };

  useEffect(() => {
    // キーワードの変更を検知して検索へ遷移させる
    if (inputValue && debouncedInputText) {
      search(debouncedInputText);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, debouncedInputText]);

  // 検索欄への入力値で絞り込む
  const search = useCallback(
    async (value: string) => {
      if (value === '') {
        setSchoolsShowResults({ getSchools: [] });
        setClassesShowResults({ getClasses: [] });
        return;
      }
      console.log('***********************************');
      console.log(value);
      console.log('***********************************');

      if (isSchoolSelectField === 'true') {
        // 学校選択
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/search?isSchool=${isSchoolSelectField}&query=${value}`,
        );
        const searchedSchools = await res.json();
        console.log('***********************************');
        console.log('検索結果: ', searchedSchools);
        console.log('***********************************');
        setSchoolsShowResults(
          !Object.keys(searchedSchools.res.getSchools).length ? { getSchools: [] } : searchedSchools.res,
        );
      } else {
        // 講義選択
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/search?isSchool=${isSchoolSelectField}&query=${value}`,
        );
        const searchedClasses = await res.json();
        console.log('***********************************');
        console.log('検索結果: ', searchedClasses);
        console.log('***********************************');
        setClassesShowResults(
          !Object.keys(searchedClasses.res.getClasses).length ? { getClasses: [] } : searchedClasses.res,
        );
      }
    },
    [isSchoolSelectField],
  );

  return (
    <div>
      <h4>{isSchoolSelectField === 'true' ? '大学を検索' : '講義を検索'}</h4>
      <StyledInput name={name} type='text' value={inputValue} onChange={(e) => handleInputChange(e)} />
      <ul className='pt-[1rem]'>
        {isSchoolSelectField === 'true' && showSchoolsResults.getSchools.length !== 0
          ? showSchoolsResults.getSchools.map((el) => (
              <li
                key={el.id}
                onClick={() => handleLiClick(el.name)}
                className='hover:bg-primarySecond border rounded-sm'
              >
                {el.name}
              </li>
            ))
          : isSchoolSelectField === 'false' && showClassesResults.getClasses.length !== 0
          ? showClassesResults.getClasses.map((el) => (
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
