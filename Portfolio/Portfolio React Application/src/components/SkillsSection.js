import React, { forwardRef } from 'react';

const SkillsSection = forwardRef((props, ref) => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'C/C++', 'Python', 'Java', 'MySQL'];

  return (
    <div className="bento-item skills-section" ref={ref}>
      <div className="item-header">
        <i className="skills-icon">⚡</i>
        <h2>My Skills</h2>
      </div>

      <p>
        I'm a beginner in programming languages and web development. I have learned the basics of the
        following languages:
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-icon">{skill}</div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default SkillsSection;