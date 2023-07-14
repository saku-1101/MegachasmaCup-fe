import { Div } from './SubjectSelectComponent.style';
import { SelectField } from '@/components/atoms/SelectField/SelectField';
import { FirstEngagementButton } from '@/components/atoms/FirstEngagementButton/FirstEngagementButton';
import { FormEventHandler } from 'react';

export type SubjectSelectComponentProps = {
  buttonLabel: string;
};

export const SubjectSelectComponent = ({ buttonLabel }: SubjectSelectComponentProps) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const { value: subject } = (event.target as any).subject;
    console.log(`subject: ${subject} `);
  };
  return (
    <form id='subjectForm' onSubmit={handleSubmit}>
      <SelectField name='subject' label='講義名' placeholder='Select' />
      <FirstEngagementButton formId='subjectForm' label={buttonLabel} />
    </form>
  );
};
