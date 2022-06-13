// import sortBy from "lodash/sortBy";

export const selectNews = ({ news }) => news.news;
export const selectSearchQueryStringNews = ({ news }) => news.filterText;
export const selectLoadingNews = ({ news }) => news.isLoadingNews;

export const selectSortedNews = ({ news: { news, filterText } }) =>
  news.filter((item) =>
    item.title.toLowerCase().toLowerCase().includes(filterText.toLowerCase())
  );
