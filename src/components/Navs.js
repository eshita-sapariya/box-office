import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavList, LinkStyled } from './Navs.styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];
const Navs = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <NavList>
        {LINKS.map(item => (
          <li>
            <LinkStyled
              to={item.to}
              className={item.to === location.pathname ? 'active' : ''}
            >
              {item.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default memo(Navs);
