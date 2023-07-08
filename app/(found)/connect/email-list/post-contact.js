'use server';

const apiKey = process.env.API_KEY;
const secretKey = process.env.SECRET_KEY;

export default async function postContact({ name, email }) {
  const url = 'https://api.mailjet.com/v3/REST/contact';
  const body = JSON.stringify({ name, email, isExcludedFromCampaigns: true });
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${Buffer.from(apiKey + ":" + secretKey).toString('base64')}`
  };

  const response = await fetch(url, { method: 'POST', headers, body });
  const json = await response.json();

  console.log(`json`, json);
  return json;
}
