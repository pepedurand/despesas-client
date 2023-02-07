import { useEffect, useState } from "react";
import { getDespesas, getDespesasByType } from "../services";
import { Despesas, tipoDespesa } from "../types";

export const useFilterDespesas = () => {
  const [selectedDespesaType, setSelectedDespesaType] =
    useState<string>("Todos");
  const [despesasToShow, setDespesasToShow] = useState<Despesas[]>([]);

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
      const despesas = await getDespesas();
      setDespesasToShow(despesas);
    }
  };

  useEffect(() => {
    loadDespesas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDespesaType]);

  return {
    selectedDespesaType,
    setSelectedDespesaType,
    despesasToShow,
    loadDespesas,
  };
};
