import { data } from "./theme";

export type ThemeDataType = typeof data;
export type ThemeType = ThemeDataType['dark'] & ThemeDataType['light'];