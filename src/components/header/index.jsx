import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import Img from 'gatsby-image';
import { Mail, Linkedin, GitHub, ExternalLink, Twitter } from 'react-feather';
import Animation from '../animation';

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full max-w-150',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-600',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  link:
    'inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black',
};

const Header = ({ metadata = {}, image }) => {
  const twitter = get(metadata, 'author', false);
  const github = get(metadata, 'github', false);
  const gitlab = get(metadata, 'gitlab', false);
  const linkedin = get(metadata, 'linkedin', false);
  const email = get(metadata, 'email', false);

  return (
    <Animation type='fadeDown' delay={400}>
      <div className={classes.wrapper}>
        <div className={classes.imageWrapper}>
          <Link to="/">
            <Img className={classes.image} fluid={image} />
          </Link>
        </div>
        <div className={classes.contentWrapper}>
          <h1 className={classes.name}>
            <Link to="/">{metadata.name}</Link>
          </h1>
          <p className={classes.description}>{metadata.description}</p>
          <ul className={classes.list}>
            {twitter && (
              <li className={classes.item}>
                <a
                  className={classes.link}
                  href={`https://twitter.com/${twitter}`}
                >
                  Twitter
                </a>
              </li>
            )}
            {github && (
              <li className={classes.item}>
                  <a className={classes.link} href={github} target="_blank" rel="noreferrer noopener">
                    <Animation type='fadeLeft' delay={600}>
                      <GitHub/>
                    </Animation>
                  </a>
                </li>
            )}
            {gitlab && (
              <li className={classes.item}>
                <a className={classes.link} href={gitlab} target="_blank" rel="noreferrer noopener">
                  <Animation type='fadeLeft' delay={700}>
                    <Gitlab/>
                  </Animation>
                </a>
              </li>

            )}
            {linkedin && (
              <li className={classes.item}>
                <a className={classes.link} href={linkedin} target="_blank" rel="noreferrer noopener">
                  <Animation type='fadeLeft' delay={800}>
                    <Linkedin/>
                  </Animation>
                </a>
              </li>
            )}
            {email && (
              <li className={classes.item}>
                <a className={classes.link} href={`mailto:${email}`}>
                  <Animation type='fadeLeft' delay={900}>
                    <Mail/>
                  </Animation>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </Animation>
  );
};

export default Header;
