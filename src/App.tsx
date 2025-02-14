import './index.css'
import Navbar from './components/navbar'
import useMedia from 'use-media'
import NavBarDesktop from './components/navBarDesktop'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import AboutTheCollar from './pages/aboutTheCollar'
function App() {
	let isMobile: Boolean = false

	if (useMedia({ minWidth: '1024px' })) {
		isMobile = false
	} else {
		isMobile = true
	}

	return (
		<Router>
			<div>{isMobile ? <Navbar /> : <NavBarDesktop />}</div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<AboutTheCollar />} />
			</Routes>
		</Router>
	)
}

export default App
