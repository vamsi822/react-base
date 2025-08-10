import { useState } from 'react';
import image from './assets/image.jpg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="Blogs">
        <div className="heading">
          <h1>Profile Card</h1>
        </div>

        <div className="cards">
          <div className="card">
            <img src={image} alt="Profile" />
            <p className="tagline">Ch. Vamsi Krishna Reddy</p>
            <h4 className="title">Web Developer</h4>
            <p className="content">
              Passionate and dedicated web developer with a strong interest in
              creating clean, responsive, and user-friendly websites.
            </p>

            <h4 className="title">Skills</h4>
            <a href="#">CSS</a>
            <a href="#">HTML</a>
            <a href="#">MySQL</a>
            <a href="#">PHP</a>
            <a href="#">JavaScript</a>
            <a href="#">C++</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
