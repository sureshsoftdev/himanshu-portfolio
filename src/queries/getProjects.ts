// queries/getProjects.ts
import datoCMSClient from './datoCMSClient';
import { Project } from '../types';

const GET_PROJECTS = `
  query MyQuery {
  allProjects {
    title
    description
    techused
    image {
      url
    }
  }
}
`;

export async function getProjects(): Promise<Project[]> {
  const data = await datoCMSClient.request<{ allProjects: Project[] }>(GET_PROJECTS);
  return data.allProjects;
}
