import React, { forwardRef } from 'react';

const ContactSection = forwardRef((props, ref) => {
  const contactItems = [
    {
      icon: '📞',
      title: 'Phone',
      link: 'tel:8591336819',
      text: '85913-36819'
    },
    {
      icon: '✉️',
      title: 'Email',
      link: 'mailto:nawaladitya06@gmail.com',
      text: 'nawaladitya06@gmail.com'
    },
    {
      icon: '📸',
      title: 'Instagram',
      link: 'https://www.instagram.com/aditya_nawal_07',
      text: 'aditya_nawal_07'
    },
    {
      icon: '👨‍💼',
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/aditya-nawal-503223300',
      text: 'Aditya_Nawal'
    },
    {
      icon: '💻',
      title: 'GitHub',
      link: 'https://github.com/Aditya-54321/Aditya',
      text: 'Aditya-54321'
    }
  ];

  return (
    <div className="bento-item contact-section" ref={ref}>
      <div className="item-header">
        <i className="contact-icon">📱</i>
        <h2>Contact Details</h2>
      </div>

      <div className="contact-grid">
        {contactItems.map((item, index) => (
          <div className="contact-item" key={index}>
            <div className="contact-icon">{item.icon}</div>
            <div className="contact-detail">
              <h3>{item.title}</h3>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.text}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ContactSection;