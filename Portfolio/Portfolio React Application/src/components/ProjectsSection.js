import React, { forwardRef } from 'react';

const ProjectsSection = forwardRef((props, ref) => {
  return (
    <div className="bento-item projects-section" ref={ref}>
      <div className="item-header">
        <i className="projects-icon">🚀</i>
        <h2>My Projects</h2>
      </div>

      <div className="coming-soon">
        <div className="coming-soon-icon">🔜</div>
        <p>
          Currently I don't have any project to showcase or explain, but I'm working on it! Soon I'll
          upload my projects and you can check them on Github for details. Stay tuned! 🤗
        </p>
      </div>
    </div>
  );
});

export default ProjectsSection;
