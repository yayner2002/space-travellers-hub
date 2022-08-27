import React from "react";
import { useSelector } from "react-redux";
import { selectMissions } from "../../../redux/missions/Missions";
import { selectRockets } from "../../../redux/rockets/Rockets";
import profileStyles from "./Profile.module.css";

const Profile = () => {
  const missions = useSelector(selectMissions);
  const rockets = useSelector(selectRockets);

  const joinedMissions = missions.filter(
    (mission) => mission.reserved === true
  );
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className={profileStyles.joinedSpaceHub}>
      <div className="joinedMissions">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>My Missions</th>
            </tr>
          </thead>
          <tbody>
            {joinedMissions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="joinedRockets">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>My Rockets</th>
            </tr>
          </thead>
          <tbody>
            {reservedRockets.map((rocket) => {
              return (
                <tr key={rocket.id}>
                  <td>{rocket.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
