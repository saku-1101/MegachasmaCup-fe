import { SelectField } from '@/components/atoms/SelectField/SelectField';
import { FirstEngagementButton } from '@/components/atoms/FirstEngagementButton/FirstEngagementButton';
import { FormEventHandler } from 'react';
import { useRouter } from 'next/navigation';

export type SubjectSelectComponentProps = {
  buttonLabel: string;
  user_id: string | undefined;
};

export const SubjectSelectComponent = ({ buttonLabel, user_id }: SubjectSelectComponentProps) => {
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const { value: className } = (event.target as any).class;
    console.log(`class: ${className} `);
    // TODO: generate class_id with uuid
    // register a class with user_id and class_id

    // redirect and reflesh with the user_id and class_id to note page
    // !: 登録している間に次ページに遷移できる？？
    const res = { user_id: '0', class_id: '0' };
    router.push(`/user/${res.user_id}/class/${res.class_id}/note`);
    router.refresh();
  };
  return (
    <form id='subjectForm' onSubmit={handleSubmit}>
      <SelectField name='class' label='講義名' placeholder='Select' />
      <FirstEngagementButton formId='subjectForm' label={buttonLabel} />
    </form>
  );
};
