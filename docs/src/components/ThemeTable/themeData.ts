import { DefaultTheme } from 'styled-components';

import cosmicTheme from '../../../../src/theme/cosmic';
import corporateTheme from '../../../../src/theme/corporate';
import defaultTheme from '../../../../src/theme/default';
import darkTheme from '../../../../src/theme/dark';
import mapping from '../../../../src/theme/mapping';

import { ThemeObject, ThemeKey, ThemeKeys } from 'oah-ui';

const themeValues = {
  default: defaultTheme,
  cosmic: cosmicTheme,
  corporate: corporateTheme,
  dark: darkTheme,
};

function getKeyValue(settings: ThemeObject, key: ThemeKey): ThemeKeys {
  if (settings[key] in settings) {
    return getKeyValue(settings, settings[key] as ThemeKey);
  }
  return settings[key];
}

function getThemeParent(settings: ThemeObject, theme: DefaultTheme['name'], withMap: string) {
  return (Object.keys(settings) as ThemeKey[])
    .filter((key) => (withMap !== '' && key.startsWith(withMap)) || withMap === '')
    .map((key) => {
      return {
        key,
        value: getKeyValue(settings, key),
        default: !themeValues[theme][key],
        parent: settings[key] in settings ? settings[key] : false,
      };
    });
}

export function getTheme(theme: DefaultTheme['name'], withMap = ''): ReturnThemeData[] {
  const map = withMap !== '' ? mapping : {};

  switch (theme) {
    case 'cosmic':
    case 'corporate':
    case 'dark':
      return getThemeParent({ ...defaultTheme, ...map, ...themeValues[theme]! }, theme, withMap);
    default:
      return getThemeParent({ ...defaultTheme, ...map }, theme, withMap);
  }
}

export interface ReturnThemeData {
  key: string;
  value: string;
  default: boolean;
  parent: string | boolean;
}
