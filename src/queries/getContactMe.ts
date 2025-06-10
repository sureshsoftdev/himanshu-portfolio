// queries/getContactMe.ts
import datoCMSClient from './datoCMSClient';
import { ContactMe } from '../types';

const GET_CONTACT_ME = `
  query MyQuery {
  contactme {
    profilepicture {
      url
    }
    name
    phonenumber
    linkedinlink
    email
    companyuniversity
    summary
    title
  }
}
`;

export async function getContactMe(): Promise<ContactMe> {
  const data = await datoCMSClient.request<{ contactme: ContactMe }>(GET_CONTACT_ME);
  return data.contactme;
}
