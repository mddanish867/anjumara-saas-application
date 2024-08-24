
import { Button } from './components/ui/button'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Layout from './layout/Layout';

function App() {
  

  return (
  
    <Router>

      <Routes>
        <Route path="/" element={<Layout >
         Home
        </Layout>}/>
        
      </Routes>
    </Router>
  
  )
}

export default App
