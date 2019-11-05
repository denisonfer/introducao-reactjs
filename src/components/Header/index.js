import React from 'react';

import './styles.css';
import avatar from '../../assets/avatar.png';

export default function Header() {
  return (
    <div className="header">
      <span className='logo'>facebook</span>
      <div className="avatar-container">
        <span className='perfil'>
          Meu perfil
        </span>
        <img src={avatar} alt="Avatar Perfil" />
      </div>

    </div>
  );
}
