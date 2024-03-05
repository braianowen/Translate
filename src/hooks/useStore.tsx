import { useReducer } from "react"
import { Acciones, DeLenguaje, Estado, Lenguaje } from "../types"

const estadoInicial: Estado = {
    deLenguaje: "auto",
    aLenguaje: "en",
    textoOriginal: "",
    resultado: "",
    cargando: false
}

//crear el reducer
function reducer(state: Estado, action: Acciones) {
    const { type } = action
    if (type === "INTERCAMBIAR_LENGUAJE") {
        return {
            ...state,
            deLenguaje: state.aLenguaje,
            aLenguaje: state.deLenguaje
        }
    }

    if (type === "SET_DE_LENGUAJE") {
        return {
            ...state,
            deLenguaje: action.payload
        }
    }

    if (type === "SET_A_LENGUAJE") {
        return {
            ...state,
            aLenguaje: action.payload
        }
    }

    if (type === 'SET_TEXTO_ORIGINAL') {
        return {
            ...state,
            loading: true,
            resultado: "",
            textoOroginal: action.payload
        }
    }

    if (type === "SET_RESULTADO") {
        return {
            ...state,
            loading: false,
            resultado: action.payload
        }
    }

    return state
}

export function useStore() {
    const [{ deLenguaje, aLenguaje, resultado, textoOriginal, cargando }, dispatch] = useReducer(reducer, estadoInicial);

    const intercambiarLenguaje = () => dispatch({ type: "INTERCAMBIAR_LENGUAJE" });
    const setTextoOriginal = (payload: string) => dispatch({ type: "SET_TEXTO_ORIGINAL", payload });
    const setResultado = (payload: string) => dispatch({ type: "SET_RESULTADO", payload });
    const setALenguaje = (payload: Lenguaje) => dispatch({ type: "SET_A_LENGUAJE", payload });
    const setDeLenguaje = (payload: DeLenguaje) => dispatch({ type: "SET_DE_LENGUAJE", payload });



    return {
        deLenguaje,
        aLenguaje,
        resultado,
        textoOriginal,
        cargando,
        intercambiarLenguaje,
        setTextoOriginal,
        setResultado,
        setALenguaje,
        setDeLenguaje
    }

}