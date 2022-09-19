import PropTypes from 'prop-types';
import caloriesIcon from '../assets/caloriesIcon.svg';
import carbsIcon from '../assets/carbsIcon.svg';
import fatIcon from '../assets/fatIcon.svg';
import proteinIcon from '../assets/proteinIcon.svg';
import '../styles/CardInfos.css';

const ICONS = {
  Calories: caloriesIcon,
  Glucides: carbsIcon,
  Protéines: proteinIcon,
  Lipides: fatIcon,
};

const UNITS = {
  Calories: 'kCal',
  Glucides: 'g',
  Protéines: 'g',
  Lipides: 'g',
};

export default function Cardinfos({ type, value }) {
  return (
    <div className="cardInfos-container">
      <img src={ICONS[type]} alt={type} />
      <div className="cardInfos-text">
        <span>
          {numberWithCommas(value)} {UNITS[type]}
        </span>
        <p>{type}</p>
      </div>
    </div>
  );
}

/** Insert decimal thousand separator
 * @param { Number } day score
 * @return { String }
 * */
function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

Cardinfos.propTypes = {
  type: PropTypes.string,
  value: PropTypes.number,
};
