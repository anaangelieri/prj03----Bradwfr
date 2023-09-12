import { useEffect, useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [nome, setNome] = useState ("Ana Laura");
  // const[algo, setAlgo] = useState (() => criarLista());
  const [text, setText] = useState ("Boa noite!");
  // const [liked, setLiked] = useState (true)
  const [nomes, setNomes] =useState(['Ana Angelieri', 'Ana Laura', 'Ana Paula', 'Ana Müller'])
  const [input, setInput] = useState('');
  const [lista, setLista] = useState([]);

  function handleClick (){
    setCount ((count) => count + 1)
    // console.log (count);
    // setCount ((count) => count + 1)
    // console.log (count);
    // setCount ((count) => count + 1)
    // console.log (count);
  }

  function handleChange (e){
    console.log(e.target)
    setText(e.target.value)
  }

  // function handleChangeLiked (e){
  //   setLiked(e.target.checked);
  //   console.log(e.target);
  // }

  function adicionar (){
    setNomes([...nomes, input]);
    setInput("");
  }

  useEffect (() =>{localStorage.setItem('agenda', JSON.stringify(nomes));}, [nomes])

  useEffect(() => {const nomesStorage = localStorage.getItem('agenda');
  if (nomesStorage){
    setLista(JSON.parse(nomesStorage));
  }
}, [nomes])

const totalAgenda = useMemo(() => nomes.length, [nomes]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className = "card">
        <input 
        value = {text}
        onChange = {handleChange}
        />
        <p>
          Você digitou :{text}
        </p>
        <button
        onClick = {() => setText("")}>Limpar</button>

      </div>
      <div className ="card"></div>
      <ul>
        {nomes.map(nome => (<li key={nome} >{nome}</li>))}
      </ul>

       {/* <div className ="card">
        <label>
          <input
          type = "checkbox"
          checked ={liked}
          onChange = {handleChangeLiked}
          />Eu gostei disso
        </label>
        <p>Você {liked ? 'gostou' : 'não gostou'} disso </p>
      </div>  */}
      <div>
          <h4>Total Agenda: {totalAgenda} nomes.</h4>
        </div>
      <div className ="card">
        <input
        type = "text"
        value = {input}
        onChange = {e => setInput (e.target.value)}/>
        <button type ="button" onClick ={adicionar}>
          Adicionar
        </button>
      </div>
    </>
  )
}

export default App
