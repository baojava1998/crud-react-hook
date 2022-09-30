import './App.css';
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import Index from "./components/products/Index";

function App() {
  return (
      <div id={'wrapper'}>
        <Header/>
        <Sidebar/>
          <div className="content-page">
              <div className="content">
                  <div className="container-fluid">
                      <Index/>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
