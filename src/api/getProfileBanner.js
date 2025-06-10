import client from '../graphql/client';

const getProfileBanner = async () => {
  const query = `
    {
      profilebanner {
        backgroundImage {
          url
        }
        headline
        resumeLink {
          url
        }
        linkedinLink
        profileSummary
      }
    }
  `;

  try {
    const data = await client.request(query);
    return data.profilebanner;
  } catch (error) {
    console.error('Error fetching profile banner:', error);
    throw error;
  }
};

export default getProfileBanner;
