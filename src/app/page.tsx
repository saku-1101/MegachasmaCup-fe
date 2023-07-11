import Image from 'next/image';
import { NoteCard } from '../components/molecules/NoteCard/NoteCard';

export default function Home() {
  return (
    <main className='flex min-h-screen min-w-screen'>
      <NoteCard
        nameOfStudent='Sakura'
        description='description description description description description escription description description description description escription description description description description escription description description description description'
        tags={['math', 'math', 'math']}
        numOfLike={4}
      />
    </main>
  );
}
