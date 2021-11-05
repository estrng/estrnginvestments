import api from "../services/api";
import { parseNumeric, calculatePercentage } from "./auxfunc";

export const getTotalPercentage = async (investmentId) => {
  const { data } = await api.get(`investments/${investmentId}/reports`);

  const orderedReports = data.sort((a, b) => {
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

  const percentageToral = data
    .map((report) => report.percentage)
    .reduce((a, b) => a + b);

  const firstReport = orderedReports[0];
  const lastReport = orderedReports[orderedReports.length - 1];
  console.log(firstReport.value);
  console.log(lastReport.value);

  const totalValue = lastReport.value - firstReport.value;

  const returnValue = `${parseNumeric(totalValue)} (${percentageToral}%)`;

  return returnValue;
};
