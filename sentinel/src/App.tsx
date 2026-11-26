import './App.css'
import Header from './components/layout/header/Header'
import MainContent from './components/layout/main-content/MainContent'
import Footer from './components/layout/footer/Footer'
import Sidebar from './components/layout/sidebar/Sidebar'
import './styles/global.css';


function App() {

  return (
    <>
      { /* Header Area */ }
      <Header />

      { /* Content Area */ }
      <div className="content">
        <Sidebar />
        <MainContent />
      </div>

      { /* Footer Area */ }
      <Footer />

    </>
  )
}

export default App
