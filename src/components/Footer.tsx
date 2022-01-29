import React from 'react';
import { useIcons } from '../assets/icons';


export const Footer = () => {
  const github = useIcons('github');
  const linkedin = useIcons('linkedin');

  return (
    <footer 
    className='d-flex flex-wrap justify-content-between align-items-center p-3 my-4 border-top'>
      <div>
        <span className="text-muted">© 2022 Maksim Dryutov</span>
      </div>
      <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
        <li className='ms-3'>
          <a className='text-muted' href='https://github.com/maximkaaaa27/my-page'>
            {github}
          </a>
        </li>
        <li className='ms-3'>
          <a className='text-muted' href='https://www.linkedin.com/in/maksim-dryutov/'>
            {linkedin}
          </a>
        </li>
      </ul>
    </footer>
  );
};