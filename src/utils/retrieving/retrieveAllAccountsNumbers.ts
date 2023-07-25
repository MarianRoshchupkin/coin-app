import { useAccountsData } from "../../hooks/useAccountsData";

export const retrieveAllAccountsNumbers = () => {
  const accounts = useAccountsData();

  const accountsNumber = accounts.map((account) => {
    return {
      id: account.id,
      number: account.number
    }
  })

  return accountsNumber;
}
