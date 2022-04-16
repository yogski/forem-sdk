/**
 * Type Definition
 */

type defaultPage = 1;
type defaultPerPage = 30;

type ArticleSearchParameters = {
  page?: number | defaultPage; // get current page
  per_page?: number | defaultPerPage; // get number of records per page
  tags?: string;
  tags_exclude?: string;
  username?: string;
  state?: ArticleState;
  top?: ArticleState; // search for last N days
  collection_id?: number;
};

enum ArticleState {
  FRESH = "fresh",
  RISING = "rising",
  ALL = "all"
};

type ArticleObject = {
  title: string;
  body_markdown: string;
  published: boolean;
  series?: string;
  main_image?: string;
  description?: string;
  tags?: Array<string>;
  organization_id?: number;
}

// 👇️ named exports
export { 
  ArticleSearchParameters, 
  ArticleObject 
};