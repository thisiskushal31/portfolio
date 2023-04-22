import React from 'react';
import Animation from '../animation';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionPublications = ({ publications }) => {
  if (!publications.length) return null;

  return (
    <Animation delay={1600}>
      <Section title="Publications">
        {publications.map((publication) => (
          <SummaryItem
            key={publication.name}
            name={publication.name}
            description={publication.description}
            link={publication.link}
          />
        ))}
      </Section>
    </Animation>
  );
};

export default SectionPublications;