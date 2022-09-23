import axios from 'axios';
import errorHandler from '../helpers/errorHandler';

async function setArticle({
  body,
  description,
  headers,
  slug,
  tagList,
  title,
}) {
  try {
    const { data } = await axios({
      data: { article: { title, description, body, tagList } },
      headers,
      method: slug ? 'PUT' : 'POST',
      url: slug
        ? `${process.env.API_URL}/articles/${slug}`
        : `${process.env.API_URL}/articles`,
    });

    return data.article.slug;
  } catch (error) {
    errorHandler(error);
  }
}

export default setArticle;
