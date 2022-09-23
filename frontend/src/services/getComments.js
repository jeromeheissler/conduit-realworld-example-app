import axios from 'axios';
import errorHandler from '../helpers/errorHandler';

async function getComments({ slug }) {
  try {
    const { data } = await axios({
      url: `${process.env.API_URL}/articles/${slug}/comments`,
    });

    return data.comments;
  } catch (error) {
    errorHandler(error);
  }
}

export default getComments;
