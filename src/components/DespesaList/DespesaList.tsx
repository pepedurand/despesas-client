import { despesasMock } from "../../mocks";
import { DespesaListItem } from "../DepesaListItem/DespesaListItem";

export const DespesaList = () => {
  return (
    <>
      {despesasMock.map((despesa) => {
        return (
          <DespesaListItem
            dataDespesa={despesa.dataDespesa}
            description={despesa.description}
            value={despesa.value}
            type={despesa.type}
          />
        );
      })}
    </>
  );
};
