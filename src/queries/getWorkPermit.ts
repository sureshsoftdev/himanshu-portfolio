// queries/getWorkPermit.ts
import datoCMSClient from './datoCMSClient';
import { workpermit } from '../types';

const GET_WORK_PERMIT = `
  query MyQuery {
  workpermit {
    visastatus
    expirydate
    summary
    additionalinfo
  }
}
`;

export async function getWorkPermit(): Promise<workpermit> {
  const data = await datoCMSClient.request<{ workpermit: workpermit }>(GET_WORK_PERMIT);
  return data.workpermit;
}
