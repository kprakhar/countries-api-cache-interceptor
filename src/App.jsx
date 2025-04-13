import { ToastContainer, toast } from 'react-toastify';

import CountryList from "./components/CountryList";

import './App.css';

import { HTTP } from "./utils/apiConfig";

const COUNTRIES = ['India', 'United States', 'Germany', 'United Kingdom', 'France', 'Japan', 'Canada', 'Brazil', 'Australia'];

function App() {

  const handleClearCache = async () => {
    await HTTP.storage.clear();
    toast('Cache cleared!!');
  }

  return (
    <>
      <ToastContainer hideProgressBar />
      <div className="container">
        <div className="header">
          <h1 className="headingText">Country & Capital</h1>
          <button className="btn clearAllBtn" onClick={handleClearCache}>
            Clear All Cache
          </button>
        </div>
      </div>
      <CountryList countries={COUNTRIES} />
    </>
  )
}

export default App
