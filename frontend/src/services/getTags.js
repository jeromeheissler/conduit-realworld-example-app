import axios from 'axios';
import errorHandler from '../helpers/errorHandler';

async function getTags() {
  try {
    const { data } = await axios({ url: `${process.env.API_URL}/tags` });

    return data.tags;
  } catch (error) {
    errorHandler(error);
  }
}

export default getTags;
