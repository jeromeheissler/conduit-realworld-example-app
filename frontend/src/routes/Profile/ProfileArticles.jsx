import { useParams } from 'react-router-dom';
import ArticlesPagination from '../../components/ArticlesPagination';
import ArticlesPreview from '../../components/ArticlesPreview';
import useArticleList from '../../hooks/useArticles';

function ProfileArticles() {
  const { username } = useParams();

  const { articles, articlesCount, loading, setArticlesData } = useArticleList({
    location: 'profile',
    username,
  });

  return loading ? (
    <div className="article-preview">
      <em>Loading {username} articles...</em>
    </div>
  ) : articles.length > 0 ? (
    <>
      <ArticlesPreview
        articles={articles}
        loading={loading}
        updateArticles={setArticlesData}
      />

      <ArticlesPagination
        articlesCount={articlesCount}
        location="profile"
        updateArticles={setArticlesData}
        username={username}
      />
    </>
  ) : (
    <div className="article-preview">
      {username} doesn&apos;t have articles.
    </div>
  );
}

export default ProfileArticles;
