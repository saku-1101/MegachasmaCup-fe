'use client';
import { PopUpWindow } from '@/components/organisms/PopUpWindow/PopUpWindow';

type ErrorProps = {
  params: {
    user_id: string;
    class_id: string;
  };
};

export default function Error({ params: { user_id, class_id } }: ErrorProps) {
  return (
    <PopUpWindow
      title='🚫あなたはまだこの講義のノートを見ることはできません！🚫'
      subtitle='まずは，最初の投稿をしてみましょう😚✨'
      isWelcomePage={true}
      isFirstNoteErrorPage={true}
      buttonLabel='最初のノートを追加'
      user_id={user_id}
      class_id={class_id}
    />
  );
}
