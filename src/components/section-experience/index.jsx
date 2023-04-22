import React from 'react';

import Section from '../section';
import SummaryExperience from '../summary-experience';
import Animation from '../animation';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Animation delay={1400}>
      <Section title="Experience">
        {experience.map((item) => (
          <SummaryExperience
            company={item.company}
            position={item.position}
            time={item.time}
            location={item.location}
            link={item.link}
          />
        ))}
      </Section>
    </Animation>

  );
};

export default SectionExperience;
