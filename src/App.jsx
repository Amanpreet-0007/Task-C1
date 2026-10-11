import { Routes, Route } from 'react-router-dom'
import HomePage from './route/HomePage'
import AboutPage from './route/AboutPage'
import ConnectPage from './route/ConnectPage'
import LoginPage from './route/LoginPage'
import PostPage from './components/PostPage' // Updated path based on your components folder
import NavFooter from './route/NavFooter'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavFooter />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="connect" element={<ConnectPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="post" element={<PostPage />} />
      </Route>
    </Routes>
  )
}

export default App