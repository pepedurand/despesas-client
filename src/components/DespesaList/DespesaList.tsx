import { DespesaListItem } from "../../components";
import { Despesas } from "../../types";

interface DespesaListProps {
  despesas: Despesas[];
}
export const DespesaList = ({ despesas }: DespesaListProps) => {
  console.log("componente do map", despesas);
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
