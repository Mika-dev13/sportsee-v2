import caloriesIcon from '../assets/caloriesIcon.svg';
import carbsIcon from '../assets/carbsIcon.svg';
import fatIcon from '../assets/fatIcon.svg';
import proteinIcon from '../assets/proteinIcon.svg';
import '../styles/CardInfos.css';

const ICON_BY_TYPE = {
  Calories: caloriesIcon,
  Glucides: carbsIcon,
  Protéines: proteinIcon,
  Lipides: fatIcon,
};

const UNIT_BY_TYPE = {
  Calories: 'kCal',
  Glucides: 'g',
  Protéines: 'g',
  Lipides: 'g',
};

export default function Cardinfos({ type, value }) {
  return (
    <div className="cardInfos-container">
      <img src={ICON_BY_TYPE[type]} alt={type} />
      <div className="cardInfos-text">
        <span>
          {value} {UNIT_BY_TYPE[type]}
        </span>
        <p>{type}</p>
      </div>
    </div>
  );
}
