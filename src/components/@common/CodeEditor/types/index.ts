import { EDITOR_LANGUAGE } from "../constants";

export type TEditorLanguage = (typeof EDITOR_LANGUAGE)[keyof typeof EDITOR_LANGUAGE];
