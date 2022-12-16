import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import HomeScreen from './screens/HomeScreen';
import AboutMeScreen from './screens/AboutMeScreen';
import SkillsScreen from './screens/SkillsScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import CurriculumVitaeScreen from './screens/CurriculumVitaeScreen';
import CertificatesScreen from './screens/CertificatesScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
        <Routes>
          <Route element={<App />} >
            <Route path="/" element={<HomeScreen />} exact/>
            <Route path="aboutMe" element={<AboutMeScreen />} />
            <Route path="skills" element={<SkillsScreen />} />
            <Route path="projects" element={<ProjectsScreen />} />
            <Route path="curriculumVitae" element={<CurriculumVitaeScreen />} />
            <Route path="certificates" element={<CertificatesScreen />} />
            {/*<Route path="interests" element={<InterestsScreen />} /> */}
          </Route>
        </Routes>
      </HashRouter>
  </React.StrictMode>
);

