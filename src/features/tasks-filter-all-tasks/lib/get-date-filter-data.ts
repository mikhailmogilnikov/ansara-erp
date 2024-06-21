function getLastSixMonthsPairs() {
  const datePairs = [];
  const today = new Date();

  for (let i = 0; i < 6; i++) {
    const startDate = new Date(today.getFullYear(), today.getMonth() - i, 1);
    const endDate = new Date(today.getFullYear(), today.getMonth() - i + 1, 0);

    const startDay = String(startDate.getDate()).padStart(2, '0');
    const startMonth = String(startDate.getMonth() + 1).padStart(2, '0');
    const startYear = startDate.getFullYear();
    const formattedStartDate = `${startDay}.${startMonth}.${startYear}`;

    const endDay = String(endDate.getDate()).padStart(2, '0');
    const endMonth = String(endDate.getMonth() + 1).padStart(2, '0');
    const endYear = endDate.getFullYear();
    const formattedEndDate = `${endDay}.${endMonth}.${endYear}`;

    datePairs.push({
      date: `${formattedStartDate} - ${formattedEndDate}`,
    });
  }

  const firstStartDate = new Date(today.getFullYear(), today.getMonth() - 5, 1);
  const extraEndDate = new Date(firstStartDate.getTime() - 1);
  const extraEndDay = String(extraEndDate.getDate()).padStart(2, '0');
  const extraEndMonth = String(extraEndDate.getMonth() + 1).padStart(2, '0');
  const extraEndYear = extraEndDate.getFullYear();
  const formattedExtraEndDate = `${extraEndDay}.${extraEndMonth}.${extraEndYear}`;

  datePairs.push({
    date: `До ${formattedExtraEndDate}`,
  });

  return datePairs;
}

export const lastMonthsPairs = getLastSixMonthsPairs();
