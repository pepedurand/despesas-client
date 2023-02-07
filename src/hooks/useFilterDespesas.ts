import { useEffect, useState } from "react";
import {
  getDespesas,
  getDespesasByMonth,
  getDespesasByType,
} from "../services";
import { Despesas, tipoDespesa } from "../types";
import { months, MonthsEnum } from "../utils";

export const useFilterDespesas = () => {
  const [selectedDespesaType, setSelectedDespesaType] =
    useState<string>("Todos");
  const [despesasToShow, setDespesasToShow] = useState<Despesas[]>([]);
  const [month, setMonth] = useState<string>(
    MonthsEnum[new Date().getMonth() + 1]
  );
  const [year, setYear] = useState(new Date().getFullYear());

  const numberMonth = months.indexOf(month) + 1;

  const loadDespesas = async () => {
    if (selectedDespesaType === "Saídas") {
      const despesas = await getDespesasByType(tipoDespesa.EXPENSE);
      setDespesasToShow(despesas);
    }
    if (selectedDespesaType === "Entradas") {
      const despesas = await getDespesasByType(tipoDespesa.CREDIT);
      setDespesasToShow(despesas);
    }
    if (selectedDespesaType === "Todos") {
      if (month && year) {
        const despesas = await getDespesasByMonth(numberMonth, year);
        setDespesasToShow(despesas);
      } else {
        const despesas = await getDespesas();
        setDespesasToShow(despesas);
      }
    }
  };

  useEffect(() => {
    loadDespesas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDespesaType, month, year]);

  return {
    selectedDespesaType,
    setSelectedDespesaType,
    despesasToShow,
    loadDespesas,
    month,
    setMonth,
    year,
    setYear,
  };
};
