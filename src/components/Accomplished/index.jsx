import React, { useEffect, useState } from "react";
import { getTotalPercentage } from "../../utils/functions";
import { CircleLoader } from "react-spinners";
// import { Container } from './styles';

function Accomplished({ investmentId }) {
  const [accomplished, setAccomplished] = useState("");

  useEffect(() => {
    getTotalPercentage(investmentId).then((response) => {
      setAccomplished(response);
    });
  }, []);

  return (
    <>
      {!accomplished ? (
        <CircleLoader color={"#00BFFF"} loading={true} />
      ) : accomplished.search("-") ? (
        <h1 style={{ color: "green" }}>{accomplished}</h1>
      ) : (
        <h1 style={{ color: "red" }}>{accomplished}</h1>
      )}
    </>
  );
}

export default Accomplished;
