import  React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialog.module.scss';

const Dialog = (props) => {
  let path = '/dialogs/'+ props.id;
  return (
    <li className={styles.dialog + ' ' + styles.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </li>
  );
};

export default Dialog;