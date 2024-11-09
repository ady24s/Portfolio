import React, { useEffect } from 'react';
import '../css/WritingsIndex.css';
import AdyashaBooks from '../Adyasha_books.jpg'; // Import your main image
import Icon from '../icon.jpg'; // Import the icon image

const WritingsIndex = () => {
  // Scroll to the top when the component is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Array of titles and corresponding Instagram URLs
  const writings = [
    { title: "The world through my eyes", url: "https://www.instagram.com/p/CrgKIk2sosf/?img_index=1" },
    { title: "‘Bitter’ that’s how I feel", url: "https://www.instagram.com/yourusername" },
    { title: "Solitude or Loneliness", url: "https://www.instagram.com/p/Crl0RUrsaVS/?img_index=1" },
    { title: "Just like a warm cup of tea", url: "https://www.instagram.com/p/Crx6k8UMW0O/?img_index=1" },
    { title: "Maybe’s", url: "https://www.instagram.com/p/CrvhpuNMKUc/?img_index=1" },
    { title: "Jhumka", url: "https://www.instagram.com/p/Ctwnluoh7Ky/" },
    { title: "Fading friendship", url: "https://www.instagram.com/p/CummzwaBKRc/" },
    { title: "It Feels Like", url: "https://www.instagram.com/p/CuH6PjgMtDT/?img_index=1" },
  ];

  return (
    <div className="writings-index">
      <img src={AdyashaBooks} alt="Adyasha's Books" className="books-image" />
      <h1 className="titles-heading">Adyasha's POV</h1>
      <ul className="titles-list">
        {writings.map((writing, index) => (
          <li key={index} className="title-item">
            <img src={Icon} alt="icon" className="icon" />
            <a href={writing.url} className="title-link" target="_blank" rel="noopener noreferrer">
              {writing.title}
            </a>
          </li>
        ))}
      </ul>
      <p className="note">Click on the title to view it on Instagram!</p>
    </div>
  );
};

export default WritingsIndex;
