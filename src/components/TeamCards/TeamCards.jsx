import "./style/TeamCards.css";

const TeamCards = ({ teamData }) => {
  return (
    <div className="card-cnt" key={teamData.id}>
      <div className="image">
        <img src={teamData.image} alt={teamData.name} />
      </div>
      <h1 className="title">{teamData.name}</h1>
      <p className="dec">{teamData.role}</p>
    </div>
  );
};

export default TeamCards;
