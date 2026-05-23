import { useState, ReactNode } from 'react';

import './Landing.css';

export const Landing = () => {
  const [linkLabel, setLinkLabel] = useState('');

  const resetLinkLabel = () => {
    setLinkLabel('');
  }

  return (
    <div className='landing'>
      <div className='wrapper'>
        <div className='name'>Richie Tarkowski</div>
        <div className='title'>
          <span>Software engineer</span>
          <span className='divider'>|</span>
          <span>Founder of Versify</span>
          <span className='divider'>|</span>
          <span>Follower of Christ</span>
        </div>
        <div className='links'>
          <LinkCard className='link-linkedin' link='https://www.linkedin.com/in/richie-tarkowski-273238155'
            icon={<i className='fa fa-linkedin'> </i>} onMouseOver={() => setLinkLabel('LINKEDIN')} onMouseOut={resetLinkLabel} />
          <LinkCard className='link-github' link='https://github.com/tarkowr'
            icon={<i className='fa fa-github'> </i>} onMouseOver={() => setLinkLabel('GITHUB')} onMouseOut={resetLinkLabel} />
          <LinkCard className='link-mail' link='mailto:tarkowr@gmail.com'
            icon={<i className='fa fa-envelope-o'> </i>} onMouseOver={() => setLinkLabel('EMAIL')} onMouseOut={resetLinkLabel} />
          <div className='link-hover-label'>{linkLabel}</div>
        </div>
      </div>
    </div>
  );
}

type LinkCardProps = {
  className: string;
  link: string;
  icon: ReactNode;
  onMouseOver: () => void;
  onMouseOut: () => void;
}

const LinkCard = ({ className, link, icon, onMouseOut, onMouseOver }: LinkCardProps) => {
  return (
    <a className={`splash-link ${className}`} href={link} target='_blank' rel='noopener noreferrer'
      onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      {icon}
    </a>
  );
}
