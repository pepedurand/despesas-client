import { useState, useEffect, useCallback } from "react";
import { Despesas } from "../types";
import { MonthsEnum } from "../utils";

export const useFilterByMonthAndYear = () => {
  const [originalData, setOriginalData] = useState<Despesas[]>([]);
  const [filteredData, setFilteredData] = useState<Despesas[]>([]);
  const [month, setMonth] = useState<string>(MonthsEnum[new Date().getMonth()]);
  const [year, setYear] = useState(new Date().getFullYear());

  const monthStringToNumber = (monthString: string) => {
    return new Date(`${monthString} 1, 2000`).getMonth() + 1;
  };

  const filterData = useCallback(() => {
    setFilteredData(
      originalData.filter((item) => {
        const itemDate = new Date(item.dataDespesa);
        return (
          itemDate.getMonth() === monthStringToNumber(month) &&
          itemDate.getFullYear() === year
        );
      })
    );
  }, [originalData, month, year]);

  useEffect(() => {
    filterData();
  }, [filterData]);

  return {
    filteredData,
    year,
    setYear,
    month,
    setMonth,
    originalData,
    setOriginalData,
    filterData,
  };
};
