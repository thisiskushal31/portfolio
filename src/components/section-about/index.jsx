import React from 'react';
import Animation from '../animation';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Animation delay={1200}>
      <Section title="About Me">
        <div className="mb-6">
          <p>{about}</p>
        </div>
      </Section>
    </Animation>
  );
};

export default SectionAbout;
