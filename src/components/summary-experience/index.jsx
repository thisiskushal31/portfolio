import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  position: 'font-semibold text-gray-900 pb-1',
  company: 'text-md text-gray-600 font-light', 
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-base text-gray-600 font-light',
};

const SummaryExperience = ({ company, position, time, location, link = false,}) => {
  const linkContent = <Link to={link}>{company}</Link>;

  return (
    <div className={classes.wrapper}>
      <span
        className={classes.position}
      >
        {position}{" "}{" "}
      </span>
      |{" "}{" "}
      <span
        className={`${classes.company} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : company}
      </span>
      <p className={classes.description}>{time}{" "}{" "}//{" "}{" "}{location}</p>
    </div>
  );
};

export default SummaryExperience;
