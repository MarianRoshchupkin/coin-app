import { useAccountsData } from "../../hooks/useAccountsData";

export const filterAccountsByAccount = (accountNumber: number) => {
  const accounts = useAccountsData();

  const [account] = accounts.filter((account) =>
    account.number === accountNumber
  );

  return account;
}
