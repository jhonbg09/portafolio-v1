import './App.css'
import './style/home.css'
import { data } from './data'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'

function App() {
  console.log(data)

  return (
    <div className='container mx-auto m-0 p-0 retalive'>
      <section className='header fixed m-5 bg-cyan-100 w-11/12 h-20 items-center rounded-2xl z-auto	'>
        <Header/>
      </section>

      <section className='h-screen home'>
        <Home/>
      </section>

      <section className='h-screen'>
        <About 
        about={data.about} 
        description={data.description_about} 
        />
      </section>
      
      <footer className='bg-cyan-400'>
        <p>desde el footer</p>
      </footer>
    </div>
  )
}

export default App
