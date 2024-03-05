import { AUTO_LENGUAJE, LENGUAJES_SOPORTADOS } from "./constantes";

export type Lenguaje = keyof typeof LENGUAJES_SOPORTADOS;
export type Auto =  typeof AUTO_LENGUAJE;
export type DeLenguaje = Lenguaje | Auto;

export interface Estado {
  deLenguaje: string;
  aLenguaje: string;
  textoOriginal: string;
  resultado: string;
  cargando: boolean;
}

export type Acciones =
  | { type: "SET_DE_LENGUAJE"; payload: string }
  | { type: "SET_A_LENGUAJE"; payload: string }
  | { type: "SET_TEXTO_ORIGINAL"; payload: string }
  | { type: "SET_RESULTADO"; payload: string }
  | { type: "SET_CARGANDO"; payload: string }
  | { type: "INTERCAMBIAR_LENGUAJE" };
