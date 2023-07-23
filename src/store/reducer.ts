import {IUserState, userReducer} from "./user/userReducer";
import {SET_USER, SetUserAction} from "./user/userActions";
import {accountsReducer, IAccountsState} from "./accounts/accountsReducer";
import {SET_ACCOUNTS, SetAccountsAction} from "./accounts/accountsActions";
import {ITransactionsState, transactionsReducer} from "./transactions/transactionsReducer";
import {SET_TRANSACTIONS, SetTransactionsAction} from "./transactions/transactionsActions";
import {ISwitcherState, switcherReducer} from "./switcher/switcherReducer";
import {SET_SWITCHER, SetSwitcherAction} from "./switcher/switcherActions";
import {ISortingTypeState, sortingTypeReducer} from "./sortingType/sortingTypeReducer";
import {SET_SORTING_TYPE, SetSortingTypeAction} from "./sortingType/sortingTypeActions";
import {currenciesReducer, ICurrenciesState} from "./currencies/currenciesReducer";
import {SET_CURRENCIES, SetCurrenciesAction} from "./currencies/currenciesActions";

export interface IInitialState {
  user: IUserState;
  accounts: IAccountsState;
  transactions: ITransactionsState;
  currencies: ICurrenciesState;
  switcher: ISwitcherState;
  sortingType: ISortingTypeState;
}

export const initialState: IInitialState = {
  user: {
    user: {}
  },
  accounts: {
    accounts: []
  },
  transactions: {
    transactions: []
  },
  currencies: {
    currencies: []
  },
  switcher: {
    switcher: false
  },
  sortingType: {
    sortingType: ''
  }
}

type Actions = SetUserAction
  | SetAccountsAction
  | SetTransactionsAction
  | SetCurrenciesAction
  | SetSwitcherAction
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
    case SET_SWITCHER:
      return {
        ...state,
        switcher: switcherReducer(state.switcher, action)
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
