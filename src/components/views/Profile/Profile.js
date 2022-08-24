import React from 'react';
import { useSelector } from 'react-redux';
import { selectMissions } from '../../../redux/missions/Missions';
import profileStyles from './Profile.module.css';

const Profile = () => {
  const missions = useSelector(selectMissions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);

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
        <table className="table">
          <thead>
            <th>My Rockets</th>
          </thead>
          <tbody>
            <tr>
              <td> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
