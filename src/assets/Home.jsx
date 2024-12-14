import React from 'react';
import '../App.css';

const Home = () => {
  const image = [
    { name: 'Repo 1', link: 'https://github.com/mimya2008/FitFab.git', image: '/images/fitfab.png'},
    { name: 'Repo 2', link: 'https://github.com/mimya2008/Gary-Blue-s-Diner.git', image: './images/gary_blue.png' },
    { name: 'Repo 3', link: 'https://github.com/mimya2008/QAP-1_Sem2_FED_SD12.git', image: './images/carweb.png' },
    { name: 'Repo 4', link: 'https://github.com/mimya2008/dog-image-gallery.git', image: './images/dog-gallery.png' },
  ];

  return (
    <main className="home">
      {image.map((repo, index) => (
        <a key={index} href={repo.link} className="repo-link" target="_blank" rel="noopener noreferrer">
          <img src={repo.image} alt={repo.name} className="repo-image" />
        </a>
      ))}
    </main>
  );
};

export default Home;
