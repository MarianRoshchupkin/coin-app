import { IUserState, userReducer } from "./user/userReducer";
import { SET_USER, SetUserAction } from "./user/userActions";
import { IAccountsState, accountsReducer } from "./accounts/accountsReducer";
import { SET_ACCOUNTS, SetAccountsAction } from "./accounts/accountsActions";
import { IAccountsBalanceState,accountsBalanceReducer } from "./accountsBalance/accountsBalanceReducer";
import { SET_ACCOUNTS_BALANCE, SetAccountsBalanceAction } from "./accountsBalance/accountsBalanceActions";
import { ITransactionsState, transactionsReducer } from "./transactions/transactionsReducer";
import { SET_TRANSACTIONS, SetTransactionsAction } from "./transactions/transactionsActions";
import { ICurrenciesState,currenciesReducer } from "./currencies/currenciesReducer";
import { SET_CURRENCIES, SetCurrenciesAction } from "./currencies/currenciesActions";
import { IBanksState,banksReducer } from "./banks/banksReducer";
import { SET_BANKS, SetBanksAction } from "./banks/banksActions";
import { ISortingDropdownSwitcherState, sortingDropdownSwitcherReducer } from "./sortingDropdownSwitcher/sortingDropdownSwitcherReducer";
import { SET_SORTING_DROPDOWN_SWITCHER, SetSortingDropdownSwitcherAction } from "./sortingDropdownSwitcher/sortingDropdownSwitcherActions";
import { ICurrencyFromDropdownSwitcherState, currencyFromDropdownSwitcherReducer } from "./CurrencyFromDropdownSwitcher/currencyFromDropdownSwitcherReducer";
import { SET_CURRENCY_FROM_DROPDOWN_SWITCHER, SetCurrencyFromDropdownSwitcherAction } from "./CurrencyFromDropdownSwitcher/currencyFromDropdownSwitcherActions";
import { ICurrencyToDropdownSwitcherState, currencyToDropdownSwitcherReducer } from "./CurrencyToDropdownSwitcher/currencyToDropdownSwitcherReducer";
import { SET_CURRENCY_TO_DROPDOWN_SWITCHER, SetCurrencyToDropdownSwitcherAction } from "./CurrencyToDropdownSwitcher/currencyToDropdownSwitcherActions";
import { ISortingItemSwitcherState, sortingItemSwitcherReducer } from "./sortingItemSwitcher/sortingItemSwitcherReducer";
import { SET_SORTING_ITEM_SWITCHER, SetSortingItemSwitcherAction } from "./sortingItemSwitcher/sortingItemSwitcherActions";
import { ICurrencyFromItemSwitcherState, currencyFromItemSwitcherReducer } from "./CurrencyFromItemSwitcher/currencyFromItemSwitcherReducer";
import { SET_CURRENCY_FROM_ITEM_SWITCHER, SetCurrencyFromItemSwitcherAction } from "./CurrencyFromItemSwitcher/currencyFromItemSwitcherActions";
import { ICurrencyToItemSwitcherState, currencyToItemSwitcherReducer } from "./CurrencyToItemSwitcher/currencyToItemSwitcherReducer";
import { SET_CURRENCY_TO_ITEM_SWITCHER, SetCurrencyToItemSwitcherAction } from "./CurrencyToItemSwitcher/currencyToItemSwitcherActions";
import { ISortingTypeState, sortingTypeReducer } from "./sortingType/sortingTypeReducer";
import { SET_SORTING_TYPE, SetSortingTypeAction } from "./sortingType/sortingTypeActions";
import { ICurrencyFromTypeState, currencyFromTypeReducer } from "./CurrencyFromType/currencyFromTypeReducer";
import { SET_CURRENCY_FROM_TYPE, SetCurrencyFromTypeAction } from "./CurrencyFromType/currencyFromTypeActions";
import { ICurrencyToTypeState, currencyToTypeReducer } from "./CurrencyToType/currencyToTypeReducer";
import { SET_CURRENCY_TO_TYPE, SetCurrencyToTypeAction } from "./CurrencyToType/currencyToTypeActions";
import { ITransactionsLoadCounterState, transactionsLoadCounterReducer } from "./transactionsLoadCounter/transactionsLoadCounterReducer";
import { SET_TRANSACTIONS_LOAD_COUNTER, SetTransactionsLoadCounterAction } from "./transactionsLoadCounter/transactionsLoadCounterActions";
import { ITransactionsOffsetState, transactionsOffsetReducer } from "./transactionsOffset/transactionsOffsetReducer";
import { SET_TRANSACTIONS_OFFSET, SetTransactionsOffsetAction } from "./transactionsOffset/transactionsOffsetActions";
import { IMenuDropdownState, menuDropdownReducer } from "./menuDropdown/menuDropdownReducer";
import { SET_MENU_DROPDOWN, SetMenuDropdownAction } from "./menuDropdown/menuDropdownActions";
import { IMenuDropdownClickedState, menuDropdownClickedReducer } from "./menuDropdownClicked/menuDropdownClickedReducer";
import { SET_MENU_DROPDOWN_CLICKED, SetMenuDropdownClickedAction } from "./menuDropdownClicked/menuDropdownClickedActions";
import { IHistoryTableState, historyTableReducer } from "./historyTable/historyTableReducer";
import { SET_HISTORY_TABLE, SetHistoryTableAction } from "./historyTable/historyTableActions";

export interface IInitialState {
  user: IUserState;
  accounts: IAccountsState;
  accountsBalance: IAccountsBalanceState;
  transactions: ITransactionsState;
  currencies: ICurrenciesState;
  banks: IBanksState;
  sortingDropdownSwitcher: ISortingDropdownSwitcherState;
  currencyFromDropdownSwitcher: ICurrencyFromDropdownSwitcherState;
  currencyToDropdownSwitcher: ICurrencyToDropdownSwitcherState;
  sortingItemSwitcher: ISortingItemSwitcherState;
  menuDropdown: IMenuDropdownState;
  menuDropdownClicked: IMenuDropdownClickedState;
  historyTable: IHistoryTableState;
  currencyFromItemSwitcher: ICurrencyFromItemSwitcherState;
  currencyToItemSwitcher: ICurrencyToItemSwitcherState
  sortingType: ISortingTypeState;
  currencyFromType: ICurrencyFromTypeState;
  currencyToType: ICurrencyToTypeState;
  transactionsLoadCounter: ITransactionsLoadCounterState;
  transactionsOffset: ITransactionsOffsetState;
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
  sortingDropdownSwitcher: {
    sortingDropdownSwitcher: false
  },
  currencyFromDropdownSwitcher: {
    currencyFromDropdownSwitcher: false
  },
  currencyToDropdownSwitcher: {
    currencyToDropdownSwitcher: false
  },
  sortingItemSwitcher: {
    sortingItemSwitcher: false
  },
  currencyFromItemSwitcher: {
    currencyFromItemSwitcher: false
  },
  currencyToItemSwitcher: {
    currencyToItemSwitcher: false
  },
  menuDropdown: {
    menuDropdown: false
  },
  menuDropdownClicked: {
    menuDropdownClicked: false
  },
  historyTable: {
    historyTable: false
  },
  sortingType: {
    sortingType: ''
  },
  currencyFromType: {
    currencyFromType: ''
  },
  currencyToType: {
    currencyToType: ''
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
  | SetAccountsBalanceAction
  | SetTransactionsAction
  | SetCurrenciesAction
  | SetBanksAction
  | SetSortingDropdownSwitcherAction
  | SetCurrencyFromDropdownSwitcherAction
  | SetCurrencyToDropdownSwitcherAction
  | SetSortingItemSwitcherAction
  | SetCurrencyFromItemSwitcherAction
  | SetCurrencyToItemSwitcherAction
  | SetMenuDropdownAction
  | SetMenuDropdownClickedAction
  | SetHistoryTableAction
  | SetSortingTypeAction
  | SetCurrencyFromTypeAction
  | SetCurrencyToTypeAction
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
    case SET_SORTING_DROPDOWN_SWITCHER:
      return {
        ...state,
        sortingDropdownSwitcher: sortingDropdownSwitcherReducer(state.sortingDropdownSwitcher, action)
      }
    case SET_CURRENCY_FROM_DROPDOWN_SWITCHER:
      return {
        ...state,
        currencyFromDropdownSwitcher: currencyFromDropdownSwitcherReducer(state.currencyFromDropdownSwitcher, action)
      }
    case SET_CURRENCY_TO_DROPDOWN_SWITCHER:
      return {
        ...state,
        currencyToDropdownSwitcher: currencyToDropdownSwitcherReducer(state.currencyToDropdownSwitcher, action)
      }
    case SET_SORTING_ITEM_SWITCHER:
      return {
        ...state,
        sortingItemSwitcher: sortingItemSwitcherReducer(state.sortingItemSwitcher, action)
      }
    case SET_CURRENCY_FROM_ITEM_SWITCHER:
      return {
        ...state,
        currencyFromItemSwitcher: currencyFromItemSwitcherReducer(state.currencyFromItemSwitcher, action)
      }
    case SET_CURRENCY_TO_ITEM_SWITCHER:
      return {
        ...state,
        currencyToItemSwitcher: currencyToItemSwitcherReducer(state.currencyToItemSwitcher, action)
      }
    case SET_MENU_DROPDOWN:
      return {
        ...state,
        menuDropdown: menuDropdownReducer(state.menuDropdown, action)
      }
    case SET_MENU_DROPDOWN_CLICKED:
      return {
        ...state,
        menuDropdownClicked: menuDropdownClickedReducer(state.menuDropdownClicked, action)
      }
    case SET_HISTORY_TABLE:
      return {
        ...state,
        historyTable: historyTableReducer(state.historyTable, action)
      }
    case SET_SORTING_TYPE:
      return {
        ...state,
        sortingType: sortingTypeReducer(state.sortingType, action)
      }
    case SET_CURRENCY_FROM_TYPE:
      return {
        ...state,
        currencyFromType: currencyFromTypeReducer(state.currencyFromType, action)
      }
    case SET_CURRENCY_TO_TYPE:
      return {
        ...state,
        currencyToType: currencyToTypeReducer(state.currencyToType, action)
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
}
