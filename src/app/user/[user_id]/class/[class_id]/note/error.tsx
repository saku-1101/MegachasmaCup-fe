'use client'; // error components must be client components

export default function Error() {
  console.log('*******************************');
  console.log('This error page is rendered.');
  console.log('*******************************');
  return <div>Something went wrong...</div>;
}
