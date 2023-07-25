import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, HashRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import HomeScreen from './screens/home/HomeScreen';
import AboutMeScreen from './screens/aboutMe/AboutMeScreen';
import SkillsScreen from './screens/skills/SkillsScreen';
import ProjectsScreen from './screens/projects/ProjectsScreen';
import CurriculumVitaeScreen from './screens/curriculumVitae/CurriculumVitaeScreen';
import CertificatesScreen from './screens/certificates/CertificatesScreen';
import JavaBibleScreen from './screens/javaBible/JavaBibleScreen';

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
            <Route path="javaBible" element={<JavaBibleScreen />} />
          </Route>
        </Routes>
      </HashRouter>
  </React.StrictMode>
);

