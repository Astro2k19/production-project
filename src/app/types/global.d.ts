declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare const __IS_DEV__: boolean
declare const __API_URL__: string
declare const __PROJECT__: 'frontend' | 'storybook' | 'jest'

// fix
declare module 'storybook-addon-themes/react';
declare module 'storybook-addon-react-router-v6';

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T

type OptionalRecord<K extends keyof any, T> = {
  [P in K]: T;
}
