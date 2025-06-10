// queries/getTimeline.ts
import datoCMSClient from './datoCMSClient';
import { TimelineItem } from '../types';
const GET_TIMELINE = `
query MyQuery {
  allAlltimelines(orderBy: _createdAt_ASC) {
    name
    timelinetype
    title
    techstack
    summarypoints
    daterange
  }
}
`;


export async function getTimeline(): Promise<TimelineItem[]> {
  const data = await datoCMSClient.request<{ allAlltimelines: TimelineItem[] }>(GET_TIMELINE);
  return data.allAlltimelines;
}
