import { SearchField } from '@/components/atoms/SearchField/SearchField';
import { FirstEngagementButton } from '@/components/atoms/FirstEngagementButton/FirstEngagementButton';
import { FormEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { CreateClassMutation, CreateSchoolMutation } from '@/codegen/gql/graphql';

export type SubjectSelectComponentProps = {
  isSchoolRegistration: 'true' | 'false';
  buttonLabel: string;
  user_id: string | undefined;
  school_id: string | undefined;
};

export const SubjectSelectComponent = ({
  isSchoolRegistration,
  buttonLabel,
  user_id,
  school_id,
}: SubjectSelectComponentProps) => {
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (isSchoolRegistration === 'false') {
      // 講義登録
      const { value: subject } = (event.target as any).subject;
      console.log(`class: ${subject} `);
      // register a class with school_id
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/add-class?schoolID=${school_id}&name=${subject}`,
      );
      const data: { res: CreateClassMutation } = await res.json();
      // redirect and reflesh with the user_id and class_id to note page
      console.log('*****************************');
      console.log('data from create class mutation', data);
      console.log('*****************************');
      router.push(`/user/${user_id}/class/${data.res.createClass.id}/note`);
      router.refresh();
    } else {
      // 学校登録
      const { value: school } = (event.target as any).school;
      console.log(`school: ${school} `);
      // register a school with user_id
      const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/add-school?name=${school}`);
      const data: CreateSchoolMutation = await res.json();

      // redirect and reflesh with the user_id and class_id to class page
      router.push(`/user/${user_id}/class`);
      router.refresh();
    }

    router.refresh();
  };
  if (isSchoolRegistration === 'false') {
    return (
      <form id='subjectForm' onSubmit={handleSubmit}>
        {/* <SelectField name='class' label='講義名' placeholder='Select' /> */}
        <SearchField name='subject' isSchoolSelectField={isSchoolRegistration} />
        <FirstEngagementButton formId='subjectForm' label={buttonLabel} />
      </form>
    );
  } else {
    return (
      <form id='schoolForm' onSubmit={handleSubmit}>
        {/* <SelectField name='school' label='大学名' placeholder='Select' /> */}
        <SearchField name='school' isSchoolSelectField={isSchoolRegistration} />
        <FirstEngagementButton formId='schoolForm' label={buttonLabel} />
      </form>
    );
  }
};
