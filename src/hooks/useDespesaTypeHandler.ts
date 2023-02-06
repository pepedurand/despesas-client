import { useState } from "react";

export const useDespesaTypeHandler = () => {
  const [selectedDespesaType, setSelectedDespesaType] = useState<
    string | undefined
  >("Todos");

  return { selectedDespesaType, setSelectedDespesaType };
};
