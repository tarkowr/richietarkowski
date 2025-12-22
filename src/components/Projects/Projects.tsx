import React, { ReactNode } from 'react';

import './Projects.css';

type ProjectAction = { label: string; link: string; icon: ReactNode };
type ProjectCardParams = { title: string; description: string; tech: string[], actions: ProjectAction[] }

const githubIcon = <i className="fa fa-code"></i>;
const visitIcon = <i className="fa fa-chevron-circle-right"></i>;
const youtubeIcon = <i className="fa fa-youtube-play"></i>;
const appleIcon = <i className='fa fa-apple'></i>;
const androidIcon = <i className='fa fa-android'></i>;

const ProjectCard = ({ title, description, tech, actions }: ProjectCardParams) => {
  return (
    <div className="project-card">
      <div className="project-title">{title}</div>
      <div className="tech-list-container mt-3">
        {tech.map((t) => (<div key={t} className="tech-card px-2 py-1">{t}</div>))}
      </div>
      <div className="my-3">{description}</div>
      <div className="actions-container mt-2">
        {actions.map(({ link, label, icon }) =>
        (<a key={label} target="_blank" rel="noopener noreferrer" href={link}>
          <button className="project-button text-dark border-0">{label}{icon}</button>
        </a>)
        )}
      </div>
    </div>
  );
}

export const Projects = () => {
  return (
    <div className="scaled-py-5 row mx-0">
      <div className="col-12 col-lg-8 offset-lg-2">
        <ProjectCard
          key={1}
          title='Versify'
          description='Built a Scripture memory app to make Bible verse memorization simple and fun. The app has 250,000+ downloads and tens of thousands of monthly users.'
          tech={['Flutter', 'Dart']}
          actions={
            [
              { label: 'APP STORE', icon: appleIcon, link: 'https://apps.apple.com/us/app/versify-app/id1597230197' },
              { label: 'GOOGLE PLAY', icon: androidIcon, link: 'https://play.google.com/store/apps/details?id=com.tarkowr.versify' },
            ]
          }
        />
        <ProjectCard
          key={2}
          title='Hagerty app'
          description='Implemented core features in the Hagerty App, including requesting roadside assistance, storing id-cards in apple wallet, and purchasing membership.'
          tech={['Flutter', 'Dart', 'NodeJS', 'AWS']}
          actions={
            [
              { label: 'APP STORE', icon: appleIcon, link: 'https://apps.apple.com/us/app/hagerty/id386245989' },
              { label: 'GOOGLE PLAY', icon: androidIcon, link: 'https://play.google.com/store/apps/details?id=com.hagerty.carsthatmatter.android' },
            ]
          }
        />
        <ProjectCard
          key={3}
          title='CongratsGrads'
          description='Created an online library to honor high school seniors during covid. Over 800 seniors uploaded a profile from 2020-2021.'
          tech={['Angular', 'HTML5', 'CSS', 'NodeJS', 'Firebase']}
          actions={
            [
              { label: 'VISIT', icon: visitIcon, link: 'https://congratsgrads.web.app' }
            ]
          }
        />
        <ProjectCard
          key={4}
          title='Stock Insight'
          description='Developed a simple, responsive WPF application for tracking stock prices that includes cloud storage and real-time stock data.'
          tech={['WPF', 'C#', 'MongoDB']}
          actions={
            [
              { label: 'GITHUB', icon: githubIcon, link: 'https://github.com/tarkowr/Stock-Insight' },
              { label: 'DEMO', icon: youtubeIcon, link: 'https://www.youtube.com/watch?v=sv_gQ37-n-w&feature=youtu.be' }
            ]
          }
        />
        <ProjectCard
          key={5}
          title='Chatversity'
          description='Designed and built an Angular 7 messaging app with a team. The product features user authentication, messaging, adding connections, online status, and joining rooms.'
          tech={['Angular', 'HTML5', 'CSS', 'NodeJS', 'Okta']}
          actions={
            [
              { label: 'GITHUB', icon: githubIcon, link: 'https://github.com/tarkowr/Chatversity_App' },
              { label: 'DEMO', icon: youtubeIcon, link: 'https://www.youtube.com/watch?v=M9QC3khGWIA' }
            ]
          }
        />
      </div>
    </div>
  );
}

