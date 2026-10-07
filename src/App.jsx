import Header from './components/Header'
import Profile from './components/Profile'
import Message from './components/Message'
import './App.css'

function App() {
  return (
    <main className='container'>
      <Header />

      <Profile
      name="Jonathan"
      program="Software Development" 
      city="Rionegro"
      />

      <Message message="Welcome to React!"/>

    </main>
   
  )
}

export default App
