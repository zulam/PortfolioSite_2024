import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCodeMerge, faKeyboard, faLaptopCode, faMugSaucer, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './App.css';

function App() {
  const [imgIdx, setImgIdx] = useState(0);
  const [roleIdx, setRoleIdx] = useState(0);
  const [roleSubstrIdx, setRoleSubstrIdx] = useState(0);
  const iconClassName = 'fa-10x';
  const images = [
    <FontAwesomeIcon className={iconClassName} icon={faKeyboard} />,
    <FontAwesomeIcon className={iconClassName} icon={faCodeMerge} />,
    <FontAwesomeIcon className={iconClassName} icon={faMugSaucer} />,
    <FontAwesomeIcon className={iconClassName} icon={faLaptopCode} />,
    <FontAwesomeIcon className={iconClassName} icon={faTerminal} />
  ];

  const roles = [
    'husband.',
    'dad.',
    'musician.',
    'gamer.',
    'reader.',
    'developer.'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIdx((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (roleSubstrIdx - 1 == roles[roleIdx].length) {
        setRoleIdx(prevVal => (prevVal + 1) % roles.length)
        setRoleSubstrIdx(0);
      }
      else {
        setRoleSubstrIdx((prevIdx) => (prevIdx + 1));
      }
    }, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [roles.length, roleSubstrIdx, roleIdx]);

  return (
    <div className="App" style={{ height: '100vh' }}>
      <Row>
        <Col className='d-flex justify-content-start'>
          <a className='link' href="https://www.linkedin.com/in/zack-ulam-605220132/" target="_blank" >
            <FontAwesomeIcon className='link-icon fa-3x mx-2 mt-2' icon={faLinkedin} href='' />
          </a>
          <a className='link' href="https://github.com/zulam" target="_blank" >
            <FontAwesomeIcon className='link-icon fa-3x mx-2 mt-2' icon={faGithub} href='https://github.com/zulam' />
          </a>
        </Col>
      </Row>
      <Row className='pt-5'>
        <Col md={6} style={{ fontSize: '8vw', textAlign: 'left', fontFamily: 'Courier New', lineHeight: '14vh' }}>
          Zack Ulam <br />
          <span style={{ color: 'red' }}>Full Stack</span><br />
          Developer
        </Col>
        <Col md={1}></Col>
        <Col md={5}>
          <div className='ml-1 d-flex justify-content-start'>
            {images[imgIdx]}
          </div>
          <p className='mt-4' style={{ fontSize: '3vw', fontFamily: 'Courier New', textAlign: 'left' }}>
            Welcome! <br />
            I am a <span style={{ fontStyle: 'italic' }}>{roles[roleIdx].substring(0, roleSubstrIdx)}</span>
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default App;