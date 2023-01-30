import { TotalCard } from "../../components";
import { despesasMock } from "../../mocks/despesas.list";
import { tipoDespesa } from "../../types";

export const HomePage = () => {
  return (
    <>
      <TotalCard despesas={despesasMock} creditOrDebit={tipoDespesa.CREDIT} />
      <TotalCard despesas={despesasMock} creditOrDebit={tipoDespesa.EXPENSE} />
    </>
  );
};
