import { Div } from './SubjectSelectComponent.style';
import { SelectField } from '@/components/atoms/SelectField/SelectField';
import { FirstEngagementButton } from '@/components/atoms/FirstEngagementButton/FirstEngagementButton';
import { FormEventHandler } from 'react';
import { useRouter } from 'next/navigation';

export type SubjectSelectComponentProps = {
  buttonLabel: string;
};

export const SubjectSelectComponent = ({ buttonLabel }: SubjectSelectComponentProps) => {
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const { value: className } = (event.target as any).class;
    console.log(`class: ${className} `);
    // register a calss
    // fetch the class_id
    // redirect and reflesh with the user_id and class_id to note page
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
