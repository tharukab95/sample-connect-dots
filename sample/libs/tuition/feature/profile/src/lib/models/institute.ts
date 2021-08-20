import { User } from './user';

export enum SectorType {
  gov = 'GOVERNMENT',
  private = 'PRIVATE',
}

export enum InstituteType {
  tuition = 'TUITION',
  school = 'SCHOOL',
  campus = 'CAMPUS',
}

export enum Theme {
  light = 'LIGHT_THEME',
  dark = 'DARK_THEME',
}

export interface Institute {
  id?: string;
  name?: string;
  owner?: User;
  sector?: SectorType;
  type?: InstituteType;
  theme?: Theme;
  instituteLogo?: string;
  subscription?: string;
}
