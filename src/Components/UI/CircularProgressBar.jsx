import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar({percentage}) {
   

   const getStrokeColor = () => {
    if (percentage >= 70) {
      return '#00cc00'; // Green
    } else if (percentage >= 40) {
      return '#ffff00'; // Yellow
    } else {
      return '#ff0000'; // Red
    }
  };

  return (
    <div >
      <div style={{ width: 30}}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={{
            path: { // Customize the progress bar colors
              stroke: getStrokeColor(),
            },
            text: { // Customize the text styles
              fill: '#fff',
              fontSize: '28px',
            },
          }} />
      </div>
    </div>
  );
}
export default CircularProgressBar;