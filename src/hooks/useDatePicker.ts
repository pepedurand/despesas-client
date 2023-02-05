import { useState } from "react";
import { MonthsEnum } from "../utils";

export const useDatePicker = () => {
  const [month, setMonth] = useState<string>(MonthsEnum[new Date().getMonth()]);
  const [year, setYear] = useState(new Date().getFullYear());

  return {
    year,
    setYear,
    month,
    setMonth,
  };
};
