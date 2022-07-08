import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './components/Form';
import Navbar from './components/Navbar';
import ToDo from './components/ToDo';
import './index.css';

const App = () => {
  return (
    <html>
      <header>
        <Navbar />
      </header>
      <main>
        <div>
          <ToDo />
          <Form />
        </div>
      </main>
    </html>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
