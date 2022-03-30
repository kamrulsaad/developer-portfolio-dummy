import './App.scss'
import Home from './Components/Home/Home'
// import About from './components/About'
// import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
