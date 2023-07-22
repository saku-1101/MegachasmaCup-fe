export let credential = '';
if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  credential = JSON.parse(Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS, 'base64').toString());
} else {
  console.log('******************************');
  console.log('not found');
  console.log('******************************');
}