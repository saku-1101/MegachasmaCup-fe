import { NoteListPage } from '@/components/templates/NoteListPage/NoteListPage';
import { WrapperContainer, CoreContainer } from '@/components/common/containers';
import { gqlClient } from '@/lib/gqlClient';
import { GetAccountSettingsDocument, GetNotesDocument, GetSchoolsDocument } from '@/codegen/gql/graphql';
import { getToken } from '@/lib/cookie';
import { redirect } from 'next/navigation';
export type NoteListPageProps = {
  params: {
    user_id: string;
    class_id: string;
  };
};

export default async function Note({ params: { user_id, class_id } }: NoteListPageProps) {
  try {
    const token = getToken();
    gqlClient.setHeader('authorization', `Bearer ${token}`);
    const user = await gqlClient.request(GetAccountSettingsDocument, {
      input: {
        isMe: true,
      },
    });
    const school_id = user.getUser[0].userSchool[0].id;
    const res = await gqlClient.request(GetNotesDocument, {
      input: {
        schoolID: school_id,
        classID: class_id,
      },
    });

    return (
      <WrapperContainer>
        <CoreContainer>
          <NoteListPage notesObj={res} user_id={user_id} class_id={class_id} />
        </CoreContainer>
      </WrapperContainer>
    );
  } catch (error) {
    console.log(error);
    redirect(`/user/${user_id}/class/${class_id}/note/forbidden`);
  }
}
