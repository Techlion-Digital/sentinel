import Header from '../components/layout/header/Header'
import MainContent from '../components/layout/main-content/MainContent'
import Footer from '../components/layout/footer/Footer'


function App() {

  return (
    <>
    <div id="app">
      { /* Header Area */ }
      <Header />

      { /* Content Area */ }
      <div className="content">
        <MainContent />
      </div>

      { /* Footer Area */ }
      <Footer />
    </div>
    </>
  )
}

export default App
