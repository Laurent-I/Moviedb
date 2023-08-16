import  { useEffect } from 'react';
import styles from './Eyes.module.css';

const Eyes = () => {
  useEffect(() => {
    const eyeball = (event) => {
      const eye = document.querySelectorAll(`.${styles.eye}`);
      eye.forEach(function (eye) {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = `rotate(${rot}deg)`;
      });
    };

    document.querySelector('body').addEventListener('mousemove', eyeball);

    return () => {
      document.querySelector('body').removeEventListener('mousemove', eyeball);
    };
  }, []);

  return (
    <>
      <div className={`${styles.eyes}`}>
        <div className={`${styles.eye}`}></div>
        <div className={`${styles.eye}`}></div>
      </div>
    </>
  );
};

export default Eyes;
