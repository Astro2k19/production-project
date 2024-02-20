export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_SINGLE = 'article_single',
    ARTICLE_EDIT = 'article_edit',
    ARTICLE_NEW = 'article_new',
    ADMIN = 'admin',
    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'not_found',
    SETTINGS = 'settings',
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string | number) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteArticleSingle = (id: string | number) => `/articles/${id}`
export const getRouteArticleEdit = (id: string | number) =>
    `/articles/${id}/edit`
export const getRouteArticleNew = () => '/articles/new'
export const getRouteAdminPanel = () => '/admin/'
export const getRouteForbidden = () => '/forbidden-page/'
export const getRouteNotFound = () => '*'

export const getRouteSettings = () => '/settings'

export const AppRouteByPathPattern = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteAbout()]: AppRoutes.ABOUT,
    [getRouteProfile(':id')]: AppRoutes.PROFILE,
    [getRouteArticles()]: AppRoutes.ARTICLES,
    [getRouteArticleSingle(':id')]: AppRoutes.ARTICLE_SINGLE,
    [getRouteArticleEdit(':id')]: AppRoutes.ARTICLE_EDIT,
    [getRouteArticleNew()]: AppRoutes.ARTICLE_NEW,
    [getRouteAdminPanel()]: AppRoutes.ADMIN,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
    [getRouteNotFound()]: AppRoutes.NOT_FOUND,
    [getRouteSettings()]: AppRoutes.SETTINGS,
}
