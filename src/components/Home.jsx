import React from 'react';
import Typist from 'react-typist';
import Waves from './../media/images/wave.svg';

function Home({ toggleLoginModal, modalTriggers }) {
  const [loginModal, contactModal] = modalTriggers;

  return (
    <div className='home'>
      <div className='text-area'>
        {!loginModal && !contactModal ? (
          <Typist cursor={{ show: false }}>
            <h2>
              Hi, my name is Ben Elferink...
              <Typist.Backspace count={12} delay={200} />,
            </h2>
            <h1>I'm a Front End Developer!</h1>
          </Typist>
        ) : (
          <>
            <h2>Hi, my name is Ben,</h2>
            <h1>I'm a Front End Developer!</h1>
          </>
        )}
        <p>
          Welcome to reactivated.io! My portfolio of{' '}
          <a href='https://reactjs.org' target='blank'>
            React
          </a>{' '}
          web apps.
          <br />
          React is an open source JavaScript library for building user interfaces, built by &copy; Facebook Inc.
          <br />
          <br />
          At reactivated.io you can browse various web apps which I have developed.
          <br />
          By default, you are browsing as a guest, but you can <span onClick={toggleLoginModal}>create a user</span>, and any data generated by my web apps will be saved to that user.
          <br />
          All data is stored in your browsers{' '}
          <a href='https://www.w3schools.com/html/html5_webstorage.asp' target='blank'>
            LocalStorage
          </a>
          .
          <br />
          <u>Note:</u> to prevent loss of data, please logout at the end of your session.
        </p>
      </div>
      <img src={Waves} alt='waves' />
    </div>
  );
}

export default Home;
