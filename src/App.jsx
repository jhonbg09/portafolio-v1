import './App.css'
import './style/home.css'
import Home from './components/Home'
import Header from './components/Header'

function App() {
  

  return (
    <div className='container mx-auto m-0 p-0 '>
      <section className='header m-5 bg-cyan-100 w-full h-20 items-center rounded-2xl	'>
        <Header/>
      </section>

      <section className='home'>
        <Home/>
      </section>
      
      <footer className='bg-cyan-400'>
        <p>desde el footer</p>
      </footer>
    </div>
  )
}

export default App
