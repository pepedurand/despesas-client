export const formatCurrency = (amount: string) => {
  amount = amount.replace(/\D/g, "");
  amount = amount.replace(/(\d)(\d{0,2})$/, "$1,$2");
  amount = amount.replace(/(?=(\d{3})+(\D))\B/g, ".");
  return `R$ ${amount}`;
};
