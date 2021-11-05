import React, { useEffect, useState } from "react";
import api from "../../services/api";
import {
  parseNumeric,
  roundNumber,
  calculatePercentage,
  getMonthName,
} from "../../utils/auxfunc";

// import { Container } from './styles';

function Reports({ investmentId }) {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function loadReports() {
      const { data } = await api.get(`investments/${investmentId}/reports`);
      setReports(data);
    }
    loadReports();
  }, []);

  const orderedReports = reports.sort((a, b) => {
    return a.month - b.month;
  });

  orderedReports.map((report, index) => {
    if (index > 0) {
      report.percentage = calculatePercentage(
        report.value,
        orderedReports[index - 1].value
      );
    } else {
      report.percentage = 0;
    }
    return report;
  });

  return (
    <div style={{ fontSize: 30, justifyContent: "space-between" }}>
      {orderedReports.map((report) => {
        return (
          <table key={report.id}>
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <h2>{`${getMonthName(report.month)}/${report.year}`}</h2>
                </td>
                {"<>"}
                <td>
                  <p>{parseNumeric(roundNumber(report.value))}</p>
                </td>
                ---
                <td>
                  <p>{roundNumber(report.percentage)}%</p>
                </td>
                <td>
                  <p>{report.percentageTotal}</p>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default Reports;
