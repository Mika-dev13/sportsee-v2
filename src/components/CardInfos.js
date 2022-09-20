import PropTypes from 'prop-types';
import caloriesIcon from '../assets/caloriesIcon.svg';
import carbsIcon from '../assets/carbsIcon.svg';
import fatIcon from '../assets/fatIcon.svg';
import proteinIcon from '../assets/proteinIcon.svg';
import '../styles/CardInfos.css';
import numberWithCommas from '../utils/numberWithCommas';

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

/**
 * Display card Infos element (calories, protéines, glucides, lipides)
 * @component
 * @param { string } units and url's icon
 * @param { number } day score
 * @returns { reactElement }
 */
function Cardinfos({ type, value }) {
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

Cardinfos.propTypes = {
  type: PropTypes.string,
  value: PropTypes.number,
};

export default Cardinfos;
