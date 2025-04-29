import React, { forwardRef } from 'react';

const EducationSection = forwardRef((props, ref) => {
  const educationItems = [
    {
      title: 'Degree Education',
      accent: 'accent-green',
      details: [
        'BSc IT (Bachelor of Science in Information Technology)',
        'K.P.B. Hinduja College of Commerce',
        'Current: Third Year'
      ],
      link: {
        url: 'https://hindujacollege.in/',
        text: 'College Details'
      }
    },
    {
      title: 'HSC Education',
      accent: 'accent-blue',
      details: [
        'Higher Secondary Certificate (12th Class)',
        'Shankar Narayan College, Navghar Road, Bhayandar(E)'
      ],
      link: {
        url: 'https://www.sncollege.com/',
        text: 'College Details'
      }
    },
    {
      title: 'SSC Education',
      accent: 'accent-teal',
      details: [
        'Secondary School Certificate (10th Class)',
        'St. Francis High School, Jesal Park, Bhayander(E)'
      ],
      link: {
        url: 'https://www.uniapply.com/school/st-francis-high-school-bhayandar-east-thane/',
        text: 'School Details'
      }
    }
  ];

  return (
    <div className="bento-item education-section" ref={ref}>
      <div className="item-header">
        <i className="education-icon">🎓</i>
        <h2>Education</h2>
      </div>

      {educationItems.map((item, index) => (
        <div key={index} className={`education-item ${item.accent}`}>
          <h3>{item.title}</h3>
          <div className="edu-details">
            {item.details.map((detail, i) => (
              <p key={i}>{detail}</p>
            ))}
            <a href={item.link.url} target="_blank" rel="noopener noreferrer">
              {item.link.text}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
});

export default EducationSection;
