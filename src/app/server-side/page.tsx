import { getClient } from '@/lib/apolloClient';
import { gql } from '@apollo/client';
import React from 'react';

export const dynamic = 'force-dynamic';

const query = gql`
  query {
    profiles {
      id
      name
    }
  }
`;

interface Response {
  profiles: { id: number; name: string }[];
}

export default async function ServerSide() {
  const data = await getClient().query({ query });

  return (
    <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: 20,
        }}
      >
        {data.data.profiles.map((user: { id: number; name: string }) => (
          <div key={user.id} style={{ border: '1px solid #ccc', textAlign: 'center' }}>
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
