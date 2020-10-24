import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header__placehoder}>
      <div className={styles.container}>
        <a className={styles.logo} href='/'>
          <img src='https://img.favpng.com/8/7/23/beer-icon-summer-party-icon-png-favpng-BRW7m2Z44xa0cfLRjH3Bd5DBE.jpg' alt=''/>
        </a>
        <div className={styles.aside}>
          <ul  className={styles.aside__container}>
            <li className={styles.aside__item}>
              <a href='/'>The Pub</a>
            </li>
            <li className={styles.aside__item}>
              <a href='/'>Top Rated</a>
            </li>
            <li className={styles.aside__item}>
              <a href='/'>Supporter</a>
              </li>
            <li className={styles.aside__item}>
              <a href='/'>Help</a>
            </li>
          </ul>
        </div>
        <div className={styles.dropdown}>
          <img src='https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png' alt=''/>
          <div className={styles.dropdown__content}>
            <NavLink exact to="/activity">Recent Activity</NavLink>
            <NavLink exact to="/profile">My Profile</NavLink>
            <NavLink exact to="/dialogs">Messages</NavLink>
          </div>
        </div>
        <div className={styles.search}>Search</div>
      </div>
    </header>
  )
}

export default Header;