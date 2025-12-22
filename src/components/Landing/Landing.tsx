import React from 'react';
import { ReactTyped } from 'react-typed';

import './Landing.css';

export const Landing = () => {
  const [linkLabel, setLinkLabel] = React.useState("");

  const resetLinkLabel = () => {
    setLinkLabel("");
  }

  return (
    <div className="landing w-100 text-center text-white">
      <div className="name">Richie Tarkowski</div>
      <div className="title px-2">
      <ReactTyped strings={['{ Flutter Engineer }', '{ Follower of Christ }', '{ Co-Founder of Versify }']}
        typeSpeed={24}
        backSpeed={8}
        startDelay={0}
        autoInsertCss={true}
        fadeOut={false}
        backDelay={2500}
        loop={true} />
      </div>
      <div className="mt-5 py-5">
        <LinkCard cardClass="link-linkedin" link="https://www.linkedin.com/in/richie-tarkowski-273238155"
          icon={<i className="fa fa-linkedin"> </i>} onMouseOver={() => setLinkLabel('LINKEDIN')} onMouseOut={resetLinkLabel} />
        <LinkCard cardClass="link-github" link="https://github.com/tarkowr"
          icon={<i className="fa fa-github"> </i>} onMouseOver={() => setLinkLabel('GITHUB')} onMouseOut={resetLinkLabel} />
        <LinkCard cardClass="link-mail" link="mailto:tarkowr@gmail.com"
          icon={<i className="fa fa-envelope-o"> </i>} onMouseOver={() => setLinkLabel('EMAIL')} onMouseOut={resetLinkLabel} />
        <div className="w-100 text-center text-white pt-3 link-hover-label">{linkLabel}</div>
      </div>
    </div>
  );
}

const LinkCard = (
  props: {
    cardClass: string, 
    link: string, 
    icon: React.ReactElement, 
    onMouseOver: () => void, 
    onMouseOut: () => void
  }) => {
    return (
      <a className={`splash-link ${props.cardClass}`} href={props.link} target="_blank" rel="noopener noreferrer"
        onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
        {props.icon}
      </a>
    );
}
