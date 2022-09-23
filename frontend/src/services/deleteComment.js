import axios from 'axios';
import errorHandler from '../helpers/errorHandler';

async function deleteComment({ commentId, headers, slug }) {
  try {
    const { data } = await axios({
      headers,
      method: 'DELETE',
      url: `${process.env.API_URL}/articles/${slug}/comments/${commentId}`,
    });

    return data;
  } catch (error) {
    errorHandler(error);
  }
}

export default deleteComment;
