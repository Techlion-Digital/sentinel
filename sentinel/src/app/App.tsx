import Header from '../components/layout/header/Header'
import MainContent from '../components/layout/main-content/MainContent'
import Footer from '../components/layout/footer/Footer'
import Sidebar from '../components/layout/sidebar/Sidebar'


function App() {

  return (
    <>
    <div id="app">
      { /* Header Area */ }
      <Header />

      { /* Content Area */ }
      <div className="content">
        <Sidebar />
        <MainContent />
      </div>

      { /* Footer Area */ }
      <Footer />
    </div>
    </>
  )
}

export default App
