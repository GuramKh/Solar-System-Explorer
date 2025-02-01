export const PLANETS = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune'
] as const;


export const VIEW_TYPES = {
  OVERVIEW: 'overview',
  STRUCTURE: 'structure',
  GEOLOGY: 'geology'
} as const;


export const LANGUAGES = {
  EN: 'en',
  KA: 'ka'
} as const;

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
} as const;

export const STORAGE_KEYS = {
  THEME: 'theme',
  LANGUAGE: 'language'
} as const;


export const PLANET_COLORS = {
  mercury: '#419EBB',
  venus: '#EDA249',
  earth: '#6D2ED5',
  mars: '#D14C32',
  jupiter: '#D83A34',
  saturn: '#CD5120',
  uranus: '#1EC1A2',
  neptune: '#2D68F0'
} as const;

export type PlanetName = typeof PLANETS[number];
export type Language = typeof LANGUAGES[keyof typeof LANGUAGES];
export type Theme = typeof THEMES[keyof typeof THEMES];
export type ViewType = typeof VIEW_TYPES[keyof typeof VIEW_TYPES];
