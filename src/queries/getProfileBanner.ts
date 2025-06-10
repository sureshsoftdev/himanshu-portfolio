// queries/getProfileBanner.ts
import datoCMSClient from './datoCMSClient';
import { ProfileBanner } from '../types';

const GET_PROFILE_BANNER = `query MyQuery {
  profilebanner {
    headline
    linkedinlink
    profilesummary
    resumelink {
      url
    }
    backgroundimage {
      url
    }
  }
}`;

export async function getProfileBanner(): Promise<ProfileBanner> {
  const data = await datoCMSClient.request<{ profilebanner: ProfileBanner }>(GET_PROFILE_BANNER);
  console.log("🚀 ~ getProfileBanner ~ data:", data)
  return data.profilebanner;
}
