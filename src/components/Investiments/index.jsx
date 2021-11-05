import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Accomplished from "../Accomplished";
import Reports from "../Reports";
import { CircleLoader } from "react-spinners";

// import { Container } from './styles';

function Investiments() {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    async function loadInvestiments() {
      const response = await api.get("/investments");
      setInvestments(response.data);
    }
    loadInvestiments();
  }, []);

  return (
    <>
      {!investments ? (
        <CircleLoader color={"#00BFFF"} loading={false} />
      ) : (
        investments.map((investment) => (
          <div key={investment.id}>
            <p style={{ fontSize: 60 }}>{investment.description}</p>
            <Accomplished investmentId={investment.id} />
            <div>
              <Reports investmentId={investment.id} />
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Investiments;
