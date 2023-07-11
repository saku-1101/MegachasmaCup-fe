import { GetProfilesDocument } from '@/codegen/gql/graphql';
import { gqlClient } from '@/lib/client';

export type TestProps = {};

export const Test = async ({}: TestProps) => {
  const handleGetProfiles = async () => {
    const { profiles: Profiles } = await gqlClient.request(GetProfilesDocument, {});
    return Profiles;
  };
  const profiles = await handleGetProfiles();
  return (
    <div>
      {profiles.map((el: { id: number; name: string }) => (
        <p key={el.id}>{el.name}</p>
      ))}
    </div>
  );
};
