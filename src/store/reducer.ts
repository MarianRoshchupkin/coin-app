import { IUserState, userReducer } from "./user/userReducer";
import { IAccountsState, accountsReducer } from "./accounts/accountsReducer";
import { IAccountsBalanceState, accountsBalanceReducer } from "./accountsBalance/accountsBalanceReducer";
import { ITransactionsState, transactionsReducer } from "./transactions/transactionsReducer";
import { IBanksState, banksReducer } from "./banks/banksReducer";
import { IDropdownSwitcherState, dropdownSwitcherReducer } from "./dropdownSwitcher/dropdownSwitcherReducer";
import { ISortingItemSwitcherState, sortingItemSwitcherReducer } from "./sortingItemSwitcher/sortingItemSwitcherReducer";
import { ISortingTypeState, sortingTypeReducer } from "./sortingType/sortingTypeReducer";
import { ITransactionsLoadCounterState, transactionsLoadCounterReducer } from "./transactionsLoadCounter/transactionsLoadCounterReducer";
import { ITransactionsOffsetState, transactionsOffsetReducer } from "./transactionsOffset/transactionsOffsetReducer";
import { SET_USER, SetUserAction } from "./user/userActions";
import {
  SET_ACCOUNTS,
  SET_ACCOUNTS_SUCCESS,
  SetAccountsAction,
  SetAccountsSuccessAction
} from "./accounts/accountsActions";
import {
  SET_ACCOUNTS_BALANCE,
  SET_ACCOUNTS_BALANCE_SUCCESS,
  SetAccountsBalanceAction,
  SetAccountsBalanceSuccessAction
} from "./accountsBalance/accountsBalanceActions";
import {
  SET_TRANSACTIONS,
  SET_TRANSACTIONS_SUCCESS,
  SetTransactionsAction,
  SetTransactionsSuccessAction
} from "./transactions/transactionsActions";
import { SET_BANKS, SET_BANKS_SUCCESS, SetBanksAction, SetBanksSuccessAction } from "./banks/banksActions";
import { SET_DROPDOWN_SWITCHER, SetDropdownSwitcherAction } from "./dropdownSwitcher/dropdownSwitcherActions";
import { SET_SORTING_ITEM_SWITCHER, SetSortingItemSwitcherAction } from "./sortingItemSwitcher/sortingItemSwitcherActions";
import { SET_SORTING_TYPE, SetSortingTypeAction } from "./sortingType/sortingTypeActions";
import { SET_TRANSACTIONS_LOAD_COUNTER, SetTransactionsLoadCounterAction } from "./transactionsLoadCounter/transactionsLoadCounterActions";
import { SET_TRANSACTIONS_OFFSET, SetTransactionsOffsetAction } from "./transactionsOffset/transactionsOffsetActions";

export interface IInitialState {
  user: IUserState;
  accounts: IAccountsState;
  accountsBalance: IAccountsBalanceState;
  transactions: ITransactionsState;
  banks: IBanksState;
  dropdownSwitcher: IDropdownSwitcherState;
  sortingItemSwitcher: ISortingItemSwitcherState;
  sortingType: ISortingTypeState;
  transactionsLoadCounter: ITransactionsLoadCounterState;
  transactionsOffset: ITransactionsOffsetState;
}

export const initialState: IInitialState = {
  user: {
    user: {}
  },
  accounts: {
    accounts: [],
    loading: false
  },
  accountsBalance: {
    accountsBalance: [],
    loading: false,
  },
  transactions: {
    transactions: [],
    loading: false,
  },
  banks: {
    banks: [],
    loading: false,
  },
  dropdownSwitcher: {
    dropdownSwitcher: false
  },
  sortingItemSwitcher: {
    sortingItemSwitcher: false
  },
  sortingType: {
    sortingType: ''
  },
  transactionsLoadCounter: {
    transactionsLoadCounter: 0
  },
  transactionsOffset: {
    transactionsOffset: 0
  }
}

type Actions = SetUserAction
  | SetAccountsAction
  | SetAccountsSuccessAction
  | SetAccountsBalanceAction
  | SetAccountsBalanceSuccessAction
  | SetTransactionsAction
  | SetTransactionsSuccessAction
  | SetBanksAction
  | SetBanksSuccessAction
  | SetDropdownSwitcherAction
  | SetSortingItemSwitcherAction
  | SetSortingTypeAction
  | SetTransactionsLoadCounterAction
  | SetTransactionsOffsetAction

export const rootReducer = (state = initialState, action: Actions): IInitialState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: userReducer(state.user, action)
      }
    case SET_ACCOUNTS:
    case SET_ACCOUNTS_SUCCESS:
      return {
        ...state,
        accounts: accountsReducer(state.accounts, action)
      }
    case SET_ACCOUNTS_BALANCE:
    case SET_ACCOUNTS_BALANCE_SUCCESS:
      return {
        ...state,
        accountsBalance: accountsBalanceReducer(state.accountsBalance, action)
      }
    case SET_TRANSACTIONS:
    case SET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: transactionsReducer(state.transactions, action)
      }
    case SET_BANKS:
    case SET_BANKS_SUCCESS:
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
    case SET_TRANSACTIONS_LOAD_COUNTER:
      return {
        ...state,
        transactionsLoadCounter: transactionsLoadCounterReducer(state.transactionsLoadCounter, action)
      }
    case SET_TRANSACTIONS_OFFSET:
      return {
        ...state,
        transactionsOffset: transactionsOffsetReducer(state.transactionsOffset, action)
      }
    default:
      return state;
  }
};
