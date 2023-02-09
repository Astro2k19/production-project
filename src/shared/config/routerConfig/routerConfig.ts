export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about'
}

export const appPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
}
