import React from 'react';
import { v1 as uuidv1 } from 'uuid';
import styles from '../../style';
import links from '../../link';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <nav className={`${styles.nav}`}>
      {links.map((item) => (
        <Link to={'/introduction'} key={uuidv1()} state={{ link: item.link }}>
          <li className={`${styles.link}`}>{item.text}</li>
        </Link>
      ))}
    </nav>
  );
};

export default Links;
