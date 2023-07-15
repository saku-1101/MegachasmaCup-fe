'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import onImagePasted from './utils/onImagePasted';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import rehypeSanitize from 'rehype-sanitize';
import { Button } from '@/components/atoms/Button/Button';
import { PreviewType } from '@uiw/react-md-editor';
import { Div } from './MdEditor.style';
import { TagField } from '../TagField/TagField';
import { TextareaField } from '@/components/atoms/TextareaField/TextareaField';
import { useRouter } from 'next/navigation';

export type MdEditorProps = {
  user_id: string;
  class_id: string;
  note_id: string;
};
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
  loading: () => <div>エディタを読み込み中．．．</div>,
});

export const MdEditor = ({ user_id, class_id, note_id }: MdEditorProps) => {
  const [markdown, setMarkdown] = useState<string | undefined>();
  const [mode, setMode] = useState<PreviewType | undefined>('edit');
  const router = useRouter();
  const handleSave = () => {
    // create note as is_private true using ids
    // push to note list page
    router.push(`/user/${user_id}/class/${class_id}/note`);
    router.refresh();
  };
  const handleRelease = () => {
    // create note as is_private false using ids
    // push to note list page
    router.push(`/user/${user_id}/class/${class_id}/note`);
    router.refresh();
  };

  return (
    <Div>
      <div className='flex justify-start items-center gap-4 p-2'>
        <Button handleAction={() => setMode('edit')} label='Edit' isSecondaryBg={false} />
        <Button handleAction={() => setMode('preview')} label='Preview' isSecondaryBg={false} />
      </div>
      <div data-color-mode='light' className='w-full'>
        <MDEditor
          value={markdown}
          onChange={(value) => {
            setMarkdown(value);
          }}
          onPaste={async (event) => {
            await onImagePasted(event.clipboardData, setMarkdown);
          }}
          onDrop={async (event) => {
            await onImagePasted(event.dataTransfer, setMarkdown);
          }}
          height={440}
          textareaProps={{
            placeholder:
              '# このノートはマークダウン記法を用いて書くことができます．\n## みんなにわかりやすいノートを作成してみましょう！✨ \n### Tips: \n- マークダウン記法については次のリンクを参照してください(https://www.markdownguide.org/cheat-sheet/) \n- Drag&Dropで画像を挿入することができます',
          }}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]],
          }}
          hideToolbar
          preview={mode}
        />
      </div>
      <TextareaField />
      <TagField />
      <div className='w-full flex justify-end items-center gap-4 p-2'>
        <Button label='一時保存' isSecondaryBg={false} handleAction={handleSave} />
        <Button label='公開' isSecondaryBg={false} handleAction={handleRelease} />
      </div>
    </Div>
  );
};
