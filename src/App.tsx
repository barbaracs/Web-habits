import './styles/global.css'
import Habit from './components/Habit/Habit'

function App() {
  return (
    <>
      <Habit completed={3}/>
      <Habit completed={4}/>
      <Habit completed={5}/>
    </>
  )
}

export default App
