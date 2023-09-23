export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string | number) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteArticleSingle = (id: string | number) => `/articles/${id}`
export const getRouteArticleEdit = (id: string | number) => `/articles/${id}/edit`
export const getRouteArticleNew = () => '/articles/new'
export const getRouteAdminPanel = () => '/admin/'
export const getRouteForbidden = () => '/forbidden-page/'
export const getRouteNotFound = () => '*'
