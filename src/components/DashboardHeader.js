import PropTypes from 'prop-types';
import '../styles/DashboardHeader.css';

/**
 * Display user name and message in dashboard header
 * @param { String } firstName user Name
 * @returns { reactElement }
 */
function DashboardHeader({ firstName }) {
  return (
    <div className="dashboard-header">
      <h1>
        Bonjour <span className="firstname">{firstName}</span>
      </h1>

      <p>Félicitation ! Vous avez explosez votre objectif hier 👏</p>
    </div>
  );
}

export default DashboardHeader;

DashboardHeader.propTypes = {
  firstName: PropTypes.string,
};
