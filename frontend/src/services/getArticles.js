import axios from 'axios';
import errorHandler from '../helpers/errorHandler';

// prettier-ignore
async function getArticles({ headers, limit = 3, location, page = 0, tagName, username }) {
  try {
    const url = {
      favorites: `${process.env.API_URL}/articles?favorited=${username}&&limit=${limit}&&offset=${page}`,
      feed: `${process.env.API_URL}/articles/feed?limit=${limit}&&offset=${page}`,
      global: `${process.env.API_URL}/articles?limit=${limit}&&offset=${page}`,
      profile: `${process.env.API_URL}/articles?author=${username}&&limit=${limit}&&offset=${page}`,
      tag: `${process.env.API_URL}/articles?tag=${tagName}&&limit=${limit}&&offset=${page}`,
    };

    const { data } = await axios({ url: url[location], headers });

    return data;
  } catch (error) {
    errorHandler(error);
  }
}

export default getArticles;
