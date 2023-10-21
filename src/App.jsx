import './App.css'  
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import RepositoryDetails from './pages/RepositoryDetails/RepositoryDetails'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import AppOutlet from './pages/AppOutlet/AppOulet'
import Navbar from './components/Navbar/Navbar'
import ErrorBoundary from './pages/ErrorBoundary/ErrorBoundary'

function App() {
  
  return (
    <div className='App'> 
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repositorydetails" element={<AppOutlet />}>
                <Route path=":id" element={<RepositoryDetails />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/errorboundary" element={<ErrorBoundary />} />
        </Routes>
    </div>
  )
}

export default App
