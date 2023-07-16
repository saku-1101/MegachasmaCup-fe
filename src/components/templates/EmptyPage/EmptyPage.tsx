'use client';
import { EmptyPageContent } from '@/components/organisms/EmptyPageContent/EmptyPageContent';
import { useEffect, useState } from 'react';
import { PopUpWindow } from '@/components/organisms/PopUpWindow/PopUpWindow';

export const EmptyPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      console.log('here');
      setIsVisible(true);
    }, 3 * 1000);
  }, []);
  return (
    <>
      <EmptyPageContent />
      {isVisible ? (
        <PopUpWindow
          title='講義グループにジョイン！'
          subtitle={`講義グループに入り，講義ノートを作成してみよう！\nノートを作成するとみんなのノートが見れたり，コメントできたりするよ！`}
          isWelcomePage={false}
          isFirstNoteErrorPage={false}
          buttonLabel='この講義にジョイン！'
        />
      ) : (
        ''
      )}
    </>
  );
};
