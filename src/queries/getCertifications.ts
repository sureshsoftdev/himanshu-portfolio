// queries/getCertifications.ts
import datoCMSClient from './datoCMSClient';
import { Certification } from '../types';

const GET_CERTIFICATIONS = `
 query MyQuery {
  allAllcertifications {
    issuer
    title
    issueddate
    iconname
    link
  }
}
`;

export async function getCertifications(): Promise<Certification[]> {
  const data = await datoCMSClient.request<{ allAllcertifications: Certification[] }>(GET_CERTIFICATIONS);
  return data.allAllcertifications;
}
