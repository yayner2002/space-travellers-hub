/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMissions,
  selectMissions,
  leaveMission,
  joinMission,
} from "../../../redux/missions/Missions";
import "bootstrap/dist/css/bootstrap.css";

const Mission = () => {
  const missions = useSelector(selectMissions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions({ limit: 5 }));
  }, [dispatch, missions.length]);

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              {mission.reserved ? (
                <td>
                  <span className="badge text-bg-info p-3">Active Member</span>
                </td>
              ) : (
                <td>
                  <span className="badge text-bg-secondary p-3">
                    Not A Member
                  </span>
                </td>
              )}

              {mission.reserved ? (
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => dispatch(leaveMission(mission.mission_id))}
                  >
                    Leave Mission
                  </button>
                </td>
              ) : (
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => dispatch(joinMission(mission.mission_id))}
                  >
                    Join Mission
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Mission;
