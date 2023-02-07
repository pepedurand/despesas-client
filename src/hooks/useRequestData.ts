import { useEffect, useState } from "react";

export const useRequestData = (requisition: Promise<any[]>) => {
  const [items, setItems] = useState<any[] | []>([]);

  const loadItemList = async () => {
    const response = await requisition;
    setItems(response);
  };

  useEffect(() => {
    loadItemList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return items;
};
