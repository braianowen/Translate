import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { useStore } from "./hooks/useStore";




function App() {
  const { deLenguaje, setDeLenguaje } = useStore()

  return (
    <>
      <h1>translate</h1>
      <button onClick={() => {
        setDeLenguaje("es")
      }}>Cambiar a Español</button>
      {deLenguaje}
    </>
  )
}

export default App
