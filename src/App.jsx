
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from './components/navigation/Footer'
import { Header } from './components/navigation/Header'
import { HomePage } from './pages/HomePage'

function App() {
 

  return (
    <>
 <Router>
  <Header/>
<Routes>
<Route path='/' element={<HomePage />} />
</Routes>
<Footer/>
 </Router>
    </>
  )
}

export default App
