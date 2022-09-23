import axios from 'axios';
import errorHandler from '../helpers/errorHandler';

async function deleteArticle({ slug, headers }) {
  try {
    const { data } = await axios({
      headers,
      method: 'DELETE',
      url: `${process.env.API_URL}/articles/${slug}/`,
    });

    return data;
  } catch (error) {
    errorHandler(error);
  }
}

export default deleteArticle;
