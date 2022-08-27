/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelReserve, fetchRockets, reserveRocket, selectRockets } from "../../../redux/rockets/Rockets";
import rocketStyles from "./Rocket.module.css";
import "bootstrap/dist/css/bootstrap.css";

const Rocket = (props) => {
  const { id, description, image, name, reserved } = props;
  const dispatch = useDispatch();

  return (
    <div className={rocketStyles.rocketsPage} rocketsPage>
      <div className={rocketStyles.flickerImage}>
        <img src={image} alt="" />
      </div>
      <div className="description">
        <h1>{name}</h1>
        <p>{reserved ? (<span className="badge text-bg-primary">Reserved</span>) : (undefined)}{description}</p>
        {reserved ? (
          <button type="button" className="btn btn-outline-secondary" onClick={() => dispatch(cancelReserve(id))}>
            Cancel Reserve
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={() => dispatch(reserveRocket(id))}>
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
};

export default Rocket;
