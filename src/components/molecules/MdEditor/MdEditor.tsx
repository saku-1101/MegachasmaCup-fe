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
import { ModalHandlingButton } from '../../atoms/ModalHandlingButton/ModalHandlingButton';
import { FormEventHandler } from 'react';
export type MdEditorProps = {
  user_id: string;
  class_id: string;
  school_id: string;
};
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
  loading: () => <div>エディタを読み込み中．．．</div>,
});

export const MdEditor = ({ user_id, class_id, school_id }: MdEditorProps) => {
  const [markdown, setMarkdown] = useState<string | undefined>();
  const [mode, setMode] = useState<PreviewType | undefined>('edit');
  const [isPublic, setIsPublic] = useState<boolean>(true);
  const [tags, setTags] = useState<string[]>([]);
  const router = useRouter();
  const handleSave: FormEventHandler<HTMLFormElement> = async (event) => {
    const { value: description } = (event.target as any).description;
    const escapedMarkdown = escape(markdown!);
    const escapedDescription = escape(description);
    const joinedTags = tags.join('*');
    // create note as is_private true using ids
    // contentの代わりにdescription, descriptionの代わりにtitleを使用する

    const resCreateNote = await fetch(
      `${
        process.env.NEXT_PUBLIC_LOCAL_API_URL
      }/api/save?class_id=${class_id}&school_id=${school_id}&description=${escapedMarkdown}&title=${escapedDescription}&isPublic=${isPublic.toString()}`,
    );
    console.log('**********************************');
    console.log('Client tags: ', joinedTags);
    console.log('**********************************');
    const resCreateTag = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/add-tag?tags=${joinedTags}`);
    // push to note list page
    router.push(`/user/${user_id}/class/${class_id}/note`);
    router.refresh();
  };
  // button clicked! params:  45b247d2-82d0-41fc-9d2d-a08c2692d75b 49d3311b-4a17-4604-a682-e980d6719dd5 {"data":"# sa ku ra"} {"data":"sa ku\nra"} true
  return (
    <Div>
      <form className='w-full h-full' onSubmit={handleSave} id='submitForm'>
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
        <TagField setTags={setTags} tags={tags} />
        <div className='w-full flex justify-end items-center gap-4 p-2'>
          <Button
            label='一時保存'
            type='submit'
            isSecondaryBg={false}
            formId='submitForm'
            handleAction={() => setIsPublic(false)}
          />
          <Button label='公開' type='submit' isSecondaryBg={true} formId='submitForm' />
          {/* <ModalHandlingButton
            label='公開'
            isSecondaryBg={false}
            user_id={user_id}
            class_id={class_id}
            formId='submitForm'
            type='submit'
          /> */}
        </div>
      </form>
    </Div>
  );
};
