import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import ArchiveProjectsPage from './pages/ArchiveProjectsPage';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ArticlePage from './pages/ArticlePage';
import ProjectPage from './pages/ProjectPage';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App mx-auto">
          <Header />
          <div className="page-body container mt-3 ">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/archive' element={<ArchiveProjectsPage />} />
              <Route path='/archive/:title' element={<ProjectPage params={{ title: 'Diving into programming' }} />} />
              <Route path='/blog' element={<BlogPage />} />
              <Route path='/article/:name' element={<ArticlePage params={{
                name: 'lifestyle'
              }} name={'lifestyle'} article={''} title={''} content={''} />} />
              <Route path='/' element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
