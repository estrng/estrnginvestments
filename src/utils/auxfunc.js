export const parseNumeric = (number) => {
  return parseFloat(number).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export const roundNumber = (number) => {
  return Math.round(number * 100) / 100;
};

export const calculatePercentage = (currentMonth, previousMonth) => {
  const percentage = (currentMonth - previousMonth) / previousMonth;
  return roundNumber(percentage * 100);
};

export const getMonthName = (month) => {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return months[month - 1];
};
