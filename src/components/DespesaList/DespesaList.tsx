import { useRequestData } from "../../hooks/useRequestData";
import { getAllDespesas } from "../../services/";
import { DespesaListItem } from "../../components";

export const DespesaList = () => {
  const despesas = useRequestData(getAllDespesas());
  return (
    <>
      {despesas.map((despesa) => {
        return (
          <DespesaListItem
            dataDespesa={new Date(despesa.dataDespesa)}
            description={despesa.description}
            value={despesa.value}
            type={despesa.type}
            key={despesa._id + despesa.type}
          />
        );
      })}
    </>
  );
};
