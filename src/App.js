import React from 'react';
import { Route, Routes, Navigate, HashRouter } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import './App.sass';
import Navigation from './components/Navbar/Navbar';


const ProjectsL = React.lazy(() => import('./components/Projects/Projects'));
const ContactsL = React.lazy(() => import('./components/Contacts/Contacts'));
const AboutL = React.lazy(() => import('./components/About/About'));

const App = (props) => {
  return (
    <HashRouter>
      <div className='wrapper'>
        <Navigation />
        <div className='content'>
          <React.Suspense fallback={<div>Load...</div>}>
            <Routes>
              <Route path="/" element={<Navigate to={`/about`} />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contacts' element={<ContactsL />} />
              <Route path='/about' element={<AboutL />} />
              <Route path='*' element={<div>404 NOT FOUND</div>} />
            </Routes>
          </React.Suspense>
        </div>
      </div>
    </HashRouter>
  )
}

export default App;
