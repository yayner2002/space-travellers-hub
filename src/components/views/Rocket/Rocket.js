/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRockets, selectRockets } from "../../../redux/rockets/Rockets";

const Rocket = (props) => {
const { id,  description, image, name, reserved } = props;
  const dispatch = useDispatch();

 
  return (
    <div className="rocketsPage">
      <div className="flickerImage">
        <img src={image} alt="" />
      </div>
      <div className="description">
        <h1>{name}</h1>
      </div>
    </div>
  )
};

export default Rocket;
