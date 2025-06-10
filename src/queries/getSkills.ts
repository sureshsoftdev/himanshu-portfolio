// queries/getTimeline.ts
import datoCMSClient from './datoCMSClient';
import { Skill } from '../types';
import { getDatoCmsToken } from './getDatoCmsToken';
const GET_SKILLS = `
{
  allSkills(orderBy: category_ASC) {
    name
    category
    description
    icon
  }
}
`;

export async function getSkills(): Promise<Skill[]> {
  const DATO_CMS_API_TOKEN = getDatoCmsToken();
  console.log(DATO_CMS_API_TOKEN);
  const data = await datoCMSClient.request<{ allSkills: Skill[] }>(GET_SKILLS);
  return data.allSkills;
}
