import { ReactNode } from 'react';

import './Projects.css';

type ProjectAction = { label: string; link: string; icon: ReactNode };
type ProjectCardParams = { title: string; description: string; tech: string[], actions: ProjectAction[] }

const githubIcon = <i className="fa fa-code"></i>;
const visitIcon = <i className="fa fa-chevron-circle-right"></i>;
const appleIcon = <i className='fa fa-apple'></i>;
const androidIcon = <i className='fa fa-android'></i>;

const ProjectCard = ({ title, description, tech, actions }: ProjectCardParams) => {
  return (
    <div className="project-card">
      <div className="project-title">{title}</div>
      <div className="tech-list-container">
        {tech.map((t) => (<div key={t} className="tech-card">{t}</div>))}
      </div>
      <div className="project-description">{description}</div>
      <div className="actions-container">
        {actions.map(({ link, label, icon }) =>
        (<a key={label} target="_blank" rel="noopener noreferrer" href={link}>
          <button className="project-button">{label}{icon}</button>
        </a>)
        )}
      </div>
    </div>
  );
}

export const Projects = () => {
  return (
    <div className="projects">
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
    </div>
  );
}

