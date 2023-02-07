import { useEffect, useState } from "react";
import { months, MonthsEnum } from "../utils";

export const useDatePicker = () => {
  const [month, setMonth] = useState<string>(
    MonthsEnum[new Date().getMonth() + 1]
  );
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const numberMonth = months.indexOf(month) + 1;
  const stringDate = `${year}/${months.indexOf(month) + 1}`;

  useEffect(() => {
    setSelectedDate(new Date(stringDate));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year]);

  return {
    year,
    setYear,
    month,
    setMonth,
    selectedDate,
    numberMonth,
  };
};
