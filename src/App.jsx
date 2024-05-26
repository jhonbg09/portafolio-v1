import './App.css'
import Home from './components/Home'
import Header from './components/Header'

function App() {
  

  return (
    <div className='m-0 p-0'>
      <section>
        <Header/>
      </section>
      <section>
        <Home/>
      </section>
      <h1 className='text-3xl font-bold underline'>Hola desde app</h1>
      <footer>
        <p>desde el footer</p>
      </footer>
    </div>
  )
}

export default App
