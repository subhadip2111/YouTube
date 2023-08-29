
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompactDisc, faFutbol, faGamepad, faFilm, faMusic, faHistory, faVideo, faDownload, faThumbsUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const SidebarComponent = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuopen);

  // Early return if the menu is not open
  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="p-5 shadow-lg w-48 bg-black justify-self-auto">
      <ul className="space-y-3">
        <Link to="/">
          <li className="text-white hover:text-red-600 transition rounded-lg font-bold  text-lg">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </li>
        </Link>
        <li className="text-white hover:text-red-600 transition rounded-lg font-bold text-lg">
          <FontAwesomeIcon icon={faCompactDisc} className="mr-2" />
          Shorts
        </li>
        <li className="text-white hover:text-red-600 transition rounded-lg font-bold text-lg">
          <FontAwesomeIcon icon={faFutbol} className="mr-2" />
          Sports
        </li>
        <li className="text-white hover:text-red-600 transition rounded-lg font-bold text-lg">
          <FontAwesomeIcon icon={faGamepad} className="mr-2" />
          Gaming
        </li>
        <li className="text-white hover:text-red-600 transition rounded-lg font-bold text-lg">
          <FontAwesomeIcon icon={faFilm} className="mr-2" />
          Movies
        </li>
      </ul>

      <h1 className="font-bold p-5 text-white hover:text-red-600 text-lg">Subscriptions</h1>
      <ul className="space-y-3">
        <li className="text-white hover:text-red-600 transition rounded-lg font-bold text-lg">
          <FontAwesomeIcon icon={faMusic} className="mr-2" />
          Youtube Music
        </li>
        <li className="text-white hover:text-red-600 transition rounded-lg font-bold text-lg">
          <FontAwesomeIcon icon={faThumbsUp} className="mr-2" />
          Liked videos
        </li>
        <li className="text-white hover:text-red-600 transition rounded-lg font-bold text-lg ">
          <FontAwesomeIcon icon={faHistory} className="mr-2" />
          History
        </li>
        <li className="text-white hover:text-red-600 transition rounded-lg font-bold text-lg">
          <FontAwesomeIcon icon={faVideo} className="mr-2" />
          Your videos
        </li>
      </ul>

      <h1 className="font-bold p-5 text-white hover:text-red-600 text-lg">Watch Later</h1>
      <ul className="space-y-3">
        <li className="text-white hover:text-red-600 transition rounded-lg font-bold text-lg">
          <FontAwesomeIcon icon={faDownload} className="mr-2" />
          Downloads
        </li>
        <li className="text-white hover:text-red-600 transition rounded-lg font-bold text-lg">
          <FontAwesomeIcon icon={faAngleDown} className="mr-2" />
          Show More
        </li>
      </ul>
    </div>
  );
}

export default SidebarComponent;
