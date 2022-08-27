import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRockets, selectRockets } from "../../../redux/rockets/Rockets";
import Rocket from "./Rocket";
import rocketStyles from "./Rocket.module.css";

let init = true;

const Rockets = () => {
  const rockets = useSelector(selectRockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (init) {
      dispatch(fetchRockets());
      init = false;
    }
  }, [dispatch]);
  return (
    <div>
      <ul className={rocketStyles.rocketList}>
        {rockets.map((rocket) => {
          return (
            <Rocket
              key={rocket.id}
              id={rocket.id}
              name={rocket.name}
              description={rocket.description}
              reserved={rocket.reserved}
              image={rocket.image}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Rockets;
