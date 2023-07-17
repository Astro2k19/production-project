export enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_EDIT = 'article_edit',
  ARTICLE_NEW = 'article_new',
  ARTICLE_SINGLE = 'article',
  ADMIN_PANEL = 'admin',
  FORBIDDEN_PAGE = 'forbidden_page',
  NOT_FOUND = 'not_found'
}

export const appPaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [AppRoutes.ARTICLE_NEW]: '/articles/new',
  [AppRoutes.ARTICLE_SINGLE]: '/articles/', // + id for specifying page
  [AppRoutes.ADMIN_PANEL]: '/admin/',
  [AppRoutes.FORBIDDEN_PAGE]: '/forbidden-page/',
  [AppRoutes.NOT_FOUND]: '*'
}
