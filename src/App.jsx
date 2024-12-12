import './App.css'
import Counter from './components/Counter/Counter'

function App() {
 
  return (
        
      <div>
     <h1>Mi proyecto</h1>
     <Counter
     initialValue = {0}
     step = {2}
     />
      <Counter
     initialValue = {3}
     step = {4}
     />
      </div>
     
  )
}

export default App
