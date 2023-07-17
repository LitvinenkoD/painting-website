

import './scss/App.scss'
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'

//components
import Navbar from './components/Navbar';
import AboutUsInsert from './components/AboutUsInsert';
import Footer from './components/Footer';

// pages
import Homepage from './pages/Homepage'

// hooks
import DeviceTypeProvider from './hooks/DeviceTypeContext'
import ProductCategoryPage from './pages/ProductCategoryPage';



function App() {
  return (
    <DeviceTypeProvider>
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/headphones" element={<ProductCategoryPage />} />
        </Routes>
        <AboutUsInsert />
        <Footer />
      </div>
    </BrowserRouter>
    </DeviceTypeProvider>
  )
}

export default App;
