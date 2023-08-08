import { userReducer,IUserState } from "./user/userReducer";
import { SET_USER, SetUserAction } from "./user/userActions";
import { accountsReducer, IAccountsState } from "./accounts/accountsReducer";
import { SET_ACCOUNTS, SetAccountsAction } from "./accounts/accountsActions";
import { transactionsReducer,ITransactionsState } from "./transactions/transactionsReducer";
import { SET_TRANSACTIONS, SetTransactionsAction } from "./transactions/transactionsActions";
import { sortingItemSwitcherReducer,ISortingItemSwitcherState } from "./sortingItemSwitcher/sortingItemSwitcherReducer";
import { SET_SORTING_ITEM_SWITCHER, SetSortingItemSwitcherAction } from "./sortingItemSwitcher/sortingItemSwitcherActions";
import { sortingTypeReducer, ISortingTypeState } from "./sortingType/sortingTypeReducer";
import { SET_SORTING_TYPE, SetSortingTypeAction } from "./sortingType/sortingTypeActions";
import { currenciesReducer, ICurrenciesState } from "./currencies/currenciesReducer";
import { SET_CURRENCIES, SetCurrenciesAction } from "./currencies/currenciesActions";
import { dropdownSwitcherReducer, IDropdownSwitcherState } from "./dropdownSwitcher/dropdownSwitcherReducer";
import { SET_DROPDOWN_SWITCHER, SetDropdownSwitcherAction } from "./dropdownSwitcher/dropdownSwitcherActions";
import { accountsBalanceReducer, IAccountsBalanceState } from "./accountsBalance/accountsBalanceReducer";
import { SET_ACCOUNTS_BALANCE, SetAccountsBalanceAction } from "./accountsBalance/accountsBalanceActions";
import { banksReducer, IBanksState } from "./banks/banksReducer";
import { SET_BANKS, SetBanksAction } from "./banks/banksActions";

export interface IInitialState {
  user: IUserState;
  accounts: IAccountsState;
  accountsBalance: IAccountsBalanceState;
  transactions: ITransactionsState;
  currencies: ICurrenciesState;
  banks: IBanksState;
  dropdownSwitcher: IDropdownSwitcherState;
  sortingItemSwitcher: ISortingItemSwitcherState;
  sortingType: ISortingTypeState;
}

export const initialState: IInitialState = {
  user: {
    user: {}
  },
  accounts: {
    accounts: []
  },
  accountsBalance: {
    accountsBalance: []
  },
  transactions: {
    transactions: []
  },
  currencies: {
    currencies: []
  },
  banks: {
    banks: []
  },
  dropdownSwitcher: {
    dropdownSwitcher: false
  },
  sortingItemSwitcher: {
    sortingItemSwitcher: false
  },
  sortingType: {
    sortingType: ''
  }
}

type Actions = SetUserAction
  | SetAccountsAction
  | SetAccountsBalanceAction
  | SetTransactionsAction
  | SetCurrenciesAction
  | SetBanksAction
  | SetDropdownSwitcherAction
  | SetSortingItemSwitcherAction
  | SetSortingTypeAction

export const rootReducer = (state = initialState, action: Actions): IInitialState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: userReducer(state.user, action)
      }
    case SET_ACCOUNTS:
      return {
        ...state,
        accounts: accountsReducer(state.accounts, action)
      }
    case SET_ACCOUNTS_BALANCE:
      return {
        ...state,
        accountsBalance: accountsBalanceReducer(state.accountsBalance, action)
      }
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: transactionsReducer(state.transactions, action)
      }
    case SET_CURRENCIES:
      return {
        ...state,
        currencies: currenciesReducer(state.currencies, action)
      }
    case SET_BANKS:
      return {
        ...state,
        banks: banksReducer(state.banks, action)
      }
    case SET_DROPDOWN_SWITCHER:
      return {
        ...state,
        dropdownSwitcher: dropdownSwitcherReducer(state.dropdownSwitcher, action)
      }
    case SET_SORTING_ITEM_SWITCHER:
      return {
        ...state,
        sortingItemSwitcher: sortingItemSwitcherReducer(state.sortingItemSwitcher, action)
      }
    case SET_SORTING_TYPE:
      return {
        ...state,
        sortingType: sortingTypeReducer(state.sortingType, action)
      }
    default:
      return state;
  }
};
