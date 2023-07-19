import { SearchField } from '@/components/atoms/SearchField/SearchField';
import { FirstEngagementButton } from '@/components/atoms/FirstEngagementButton/FirstEngagementButton';
import { FormEventHandler } from 'react';
import { useRouter } from 'next/navigation';

export type SubjectSelectComponentProps = {
  isSchoolRegistration: boolean | undefined;
  buttonLabel: string;
  user_id: string | undefined;
};

export const SubjectSelectComponent = ({ isSchoolRegistration, buttonLabel, user_id }: SubjectSelectComponentProps) => {
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!isSchoolRegistration) {
      const { value: subject } = (event.target as any).subject;
      console.log(`class: ${subject} `);
      // create class
      // register a class with user_id and class_id

      // redirect and reflesh with the user_id and class_id to note page
      // !: 登録している間に次ページに遷移できる？？
      const res = { user_id: '0', class_id: '0' };
      router.push(`/user/${res.user_id}/class/${res.class_id}/note`);
    } else {
      const { value: school } = (event.target as any).school;
      console.log(`school: ${school} `);
      // create school
      // register a class with user_id

      // redirect and reflesh with the user_id and class_id to note page
      // !: 登録している間に次ページに遷移できる？？
      const res = { user_id: '0', school_id: '0' };
      router.push(`/user/${res.user_id}/class`);
    }

    router.refresh();
  };
  if (!isSchoolRegistration) {
    return (
      <form id='subjectForm' onSubmit={handleSubmit}>
        {/* <SelectField name='class' label='講義名' placeholder='Select' /> */}
        <SearchField name='subject' isSchoolSelectField={false} />
        <FirstEngagementButton formId='subjectForm' label={buttonLabel} />
      </form>
    );
  } else {
    return (
      <form id='schoolForm' onSubmit={handleSubmit}>
        {/* <SelectField name='school' label='大学名' placeholder='Select' /> */}
        <SearchField name='school' isSchoolSelectField={true} />

        <FirstEngagementButton formId='schoolForm' label={buttonLabel} />
      </form>
    );
  }
};
