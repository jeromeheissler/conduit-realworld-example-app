import axios from 'axios';
import errorHandler from '../helpers/errorHandler';

async function getProfile({ headers, username }) {
  try {
    const { data } = await axios({
      headers,
      url: `${process.env.API_URL}/profiles/${username}`,
    });

    return data.profile;
  } catch (error) {
    errorHandler(error);
  }
}

export default getProfile;
