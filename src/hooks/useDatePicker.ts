import { useEffect, useState } from "react";
import { months, MonthsEnum } from "../utils";

export const useDatePicker = () => {
  const [monthString, setMonthString] = useState<string>(
    MonthsEnum[new Date().getMonth() + 1]
  );
  const [year, setYear] = useState(new Date().getFullYear());
  const [numberMonth, setNumberMonth] = useState<number>();
  const stringDate = `${year}/${months.indexOf(monthString) + 1}`;
  const formattedDate = new Date(stringDate);

  useEffect(() => {
    setNumberMonth(months.indexOf(monthString) + 1);
  }, [monthString, year]);

  return {
    year,
    setYear,
    monthString,
    setMonthString,
    formattedDate,
    numberMonth,
  };
};
