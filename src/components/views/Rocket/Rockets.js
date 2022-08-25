import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRockets, selectRockets } from "../../../redux/rockets/Rockets";
import Rocket from "./Rocket";

const Rockets = () => {
  const rockets = useSelector(selectRockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) dispatch(fetchRockets());
  });
  return (
    <div>
      <ul>
        {rockets.map((rocket) => {
          return (
            <Rocket
              key={rocket.id}
              name={rocket.name}
              description={rocket.description}
              reserved={rocket.reserved}
              image={rocket.images[0]}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Rockets;
