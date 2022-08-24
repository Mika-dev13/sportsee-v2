import '../styles/DashboardHeader.css';
export default function DashboardHeader({ firstName }) {
  return (
    <div className="dashboard-header">
      <h1>
        Bonjour <span className="firstname">{firstName}</span>
      </h1>

      <p>Félicitation ! Vous avez explosez votre objectif hier 👏</p>
    </div>
  );
}
