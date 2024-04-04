/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = exports.initialState = void 0;
var userReducer_1 = __webpack_require__(290);
var userActions_1 = __webpack_require__(36);
var accountsReducer_1 = __webpack_require__(291);
var accountsActions_1 = __webpack_require__(19);
var accountsBalanceReducer_1 = __webpack_require__(292);
var accountsBalanceActions_1 = __webpack_require__(24);
var transactionsReducer_1 = __webpack_require__(293);
var transactionsActions_1 = __webpack_require__(20);
var currenciesReducer_1 = __webpack_require__(294);
var currenciesActions_1 = __webpack_require__(28);
var banksReducer_1 = __webpack_require__(295);
var banksActions_1 = __webpack_require__(35);
var sortingDropdownSwitcherReducer_1 = __webpack_require__(296);
var sortingDropdownSwitcherActions_1 = __webpack_require__(11);
var currencyFromDropdownSwitcherReducer_1 = __webpack_require__(297);
var currencyFromDropdownSwitcherActions_1 = __webpack_require__(29);
var currencyToDropdownSwitcherReducer_1 = __webpack_require__(298);
var currencyToDropdownSwitcherActions_1 = __webpack_require__(32);
var sortingItemSwitcherReducer_1 = __webpack_require__(299);
var sortingItemSwitcherActions_1 = __webpack_require__(12);
var currencyFromItemSwitcherReducer_1 = __webpack_require__(300);
var currencyFromItemSwitcherActions_1 = __webpack_require__(30);
var currencyToItemSwitcherReducer_1 = __webpack_require__(301);
var currencyToItemSwitcherActions_1 = __webpack_require__(33);
var sortingTypeReducer_1 = __webpack_require__(302);
var sortingTypeActions_1 = __webpack_require__(13);
var currencyFromTypeReducer_1 = __webpack_require__(303);
var currencyFromTypeActions_1 = __webpack_require__(31);
var currencyToTypeReducer_1 = __webpack_require__(304);
var currencyToTypeActions_1 = __webpack_require__(34);
var transactionsLoadCounterReducer_1 = __webpack_require__(305);
var transactionsLoadCounterActions_1 = __webpack_require__(8);
var transactionsOffsetReducer_1 = __webpack_require__(306);
var transactionsOffsetActions_1 = __webpack_require__(27);
exports.initialState = {
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
};
var rootReducer = function (state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case userActions_1.SET_USER:
            return __assign(__assign({}, state), { user: (0, userReducer_1.userReducer)(state.user, action) });
        case accountsActions_1.SET_ACCOUNTS:
            return __assign(__assign({}, state), { accounts: (0, accountsReducer_1.accountsReducer)(state.accounts, action) });
        case accountsBalanceActions_1.SET_ACCOUNTS_BALANCE:
            return __assign(__assign({}, state), { accountsBalance: (0, accountsBalanceReducer_1.accountsBalanceReducer)(state.accountsBalance, action) });
        case transactionsActions_1.SET_TRANSACTIONS:
            return __assign(__assign({}, state), { transactions: (0, transactionsReducer_1.transactionsReducer)(state.transactions, action) });
        case currenciesActions_1.SET_CURRENCIES:
            return __assign(__assign({}, state), { currencies: (0, currenciesReducer_1.currenciesReducer)(state.currencies, action) });
        case banksActions_1.SET_BANKS:
            return __assign(__assign({}, state), { banks: (0, banksReducer_1.banksReducer)(state.banks, action) });
        case sortingDropdownSwitcherActions_1.SET_SORTING_DROPDOWN_SWITCHER:
            return __assign(__assign({}, state), { sortingDropdownSwitcher: (0, sortingDropdownSwitcherReducer_1.sortingDropdownSwitcherReducer)(state.sortingDropdownSwitcher, action) });
        case currencyFromDropdownSwitcherActions_1.SET_CURRENCY_FROM_DROPDOWN_SWITCHER:
            return __assign(__assign({}, state), { currencyFromDropdownSwitcher: (0, currencyFromDropdownSwitcherReducer_1.currencyFromDropdownSwitcherReducer)(state.currencyFromDropdownSwitcher, action) });
        case currencyToDropdownSwitcherActions_1.SET_CURRENCY_TO_DROPDOWN_SWITCHER:
            return __assign(__assign({}, state), { currencyToDropdownSwitcher: (0, currencyToDropdownSwitcherReducer_1.currencyToDropdownSwitcherReducer)(state.currencyToDropdownSwitcher, action) });
        case sortingItemSwitcherActions_1.SET_SORTING_ITEM_SWITCHER:
            return __assign(__assign({}, state), { sortingItemSwitcher: (0, sortingItemSwitcherReducer_1.sortingItemSwitcherReducer)(state.sortingItemSwitcher, action) });
        case currencyFromItemSwitcherActions_1.SET_CURRENCY_FROM_ITEM_SWITCHER:
            return __assign(__assign({}, state), { currencyFromItemSwitcher: (0, currencyFromItemSwitcherReducer_1.currencyFromItemSwitcherReducer)(state.currencyFromItemSwitcher, action) });
        case currencyToItemSwitcherActions_1.SET_CURRENCY_TO_ITEM_SWITCHER:
            return __assign(__assign({}, state), { currencyToItemSwitcher: (0, currencyToItemSwitcherReducer_1.currencyToItemSwitcherReducer)(state.currencyToItemSwitcher, action) });
        case sortingTypeActions_1.SET_SORTING_TYPE:
            return __assign(__assign({}, state), { sortingType: (0, sortingTypeReducer_1.sortingTypeReducer)(state.sortingType, action) });
        case currencyFromTypeActions_1.SET_CURRENCY_FROM_TYPE:
            return __assign(__assign({}, state), { currencyFromType: (0, currencyFromTypeReducer_1.currencyFromTypeReducer)(state.currencyFromType, action) });
        case currencyToTypeActions_1.SET_CURRENCY_TO_TYPE:
            return __assign(__assign({}, state), { currencyToType: (0, currencyToTypeReducer_1.currencyToTypeReducer)(state.currencyToType, action) });
        case transactionsLoadCounterActions_1.SET_TRANSACTIONS_LOAD_COUNTER:
            return __assign(__assign({}, state), { transactionsLoadCounter: (0, transactionsLoadCounterReducer_1.transactionsLoadCounterReducer)(state.transactionsLoadCounter, action) });
        case transactionsOffsetActions_1.SET_TRANSACTIONS_OFFSET:
            return __assign(__assign({}, state), { transactionsOffset: (0, transactionsOffsetReducer_1.transactionsOffsetReducer)(state.transactionsOffset, action) });
        default:
            return state;
    }
};
exports.rootReducer = rootReducer;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(152), exports);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(96), exports);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(76), exports);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeAccountsAndLastTransactions = void 0;
var useAccountsData_1 = __webpack_require__(18);
var useTransactionsData_1 = __webpack_require__(40);
var mergeAccountsAndLastTransactions = function () {
    var accounts = (0, useAccountsData_1.useAccountsData)();
    var transactions = (0, useTransactionsData_1.useTransactionsData)();
    var accountsWithLastTransactions = [];
    var _loop_1 = function (i) {
        var filteredTransactions = transactions
            .filter(function (transaction) {
            return transaction.userId === accounts[i].userId;
        });
        var filteredTransactionsByAccount = filteredTransactions
            .filter(function (transaction) {
            return transaction.from === accounts[i].number;
        });
        var lastTransaction = filteredTransactionsByAccount[filteredTransactionsByAccount.length - 1];
        var account = accounts[i];
        account.transaction = lastTransaction;
        accountsWithLastTransactions.push(account);
    };
    for (var i = 0; i < accounts.length; i++) {
        _loop_1(i);
    }
    return accountsWithLastTransactions;
};
exports.mergeAccountsAndLastTransactions = mergeAccountsAndLastTransactions;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setTransactionsLoadCounter = exports.SET_TRANSACTIONS_LOAD_COUNTER = void 0;
exports.SET_TRANSACTIONS_LOAD_COUNTER = 'SET_TRANSACTIONS_LOAD_COUNT';
var setTransactionsLoadCounter = function (transactionsLoadCounter) { return ({
    type: exports.SET_TRANSACTIONS_LOAD_COUNTER,
    transactionsLoadCounter: transactionsLoadCounter
}); };
exports.setTransactionsLoadCounter = setTransactionsLoadCounter;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(58), exports);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(62), exports);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setSortingDropdownSwitcher = exports.SET_SORTING_DROPDOWN_SWITCHER = void 0;
exports.SET_SORTING_DROPDOWN_SWITCHER = 'SET_SORTING_DROPDOWN_SWITCHER';
var setSortingDropdownSwitcher = function (sortingDropdownSwitcher) { return ({
    type: exports.SET_SORTING_DROPDOWN_SWITCHER,
    sortingDropdownSwitcher: sortingDropdownSwitcher
}); };
exports.setSortingDropdownSwitcher = setSortingDropdownSwitcher;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setSortingItemSwitcher = exports.SET_SORTING_ITEM_SWITCHER = void 0;
exports.SET_SORTING_ITEM_SWITCHER = 'SET_SORTING_ITEM_SWITCHER';
var setSortingItemSwitcher = function (sortingItemSwitcher) { return ({
    type: exports.SET_SORTING_ITEM_SWITCHER,
    sortingItemSwitcher: sortingItemSwitcher
}); };
exports.setSortingItemSwitcher = setSortingItemSwitcher;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setSortingType = exports.SET_SORTING_TYPE = void 0;
exports.SET_SORTING_TYPE = 'SET_SORTING_TYPE';
var setSortingType = function (sortingType) { return ({
    type: exports.SET_SORTING_TYPE,
    sortingType: sortingType
}); };
exports.setSortingType = setSortingType;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(101), exports);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowUpIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function ArrowUpIcon(_a) {
    var size = _a.size;
    return (react_1.default.createElement("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 22", width: size, height: size },
        react_1.default.createElement("path", { d: "M17.9519 13.5L12.9519 8.5L7.9519 13.5L17.9519 13.5Z", fill: "#182233" })));
}
exports.ArrowUpIcon = ArrowUpIcon;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowDownIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function ArrowDownIcon(_a) {
    var size = _a.size;
    return (react_1.default.createElement("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 22", width: size, height: size },
        react_1.default.createElement("path", { d: "M7.9519 8.5L12.9519 13.5L17.9519 8.5L7.9519 8.5Z", fill: "#182233" })));
}
exports.ArrowDownIcon = ArrowDownIcon;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(103), exports);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useAccountsData = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(2);
var accountsActions_1 = __webpack_require__(19);
function useAccountsData() {
    var accounts = (0, react_redux_1.useSelector)(function (state) { return state.accounts.accounts; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch((0, accountsActions_1.setAccountsAsync)());
    }, []);
    return accounts;
}
exports.useAccountsData = useAccountsData;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAccountsAsync = exports.setAccounts = exports.SET_ACCOUNTS = void 0;
var axios_1 = __importDefault(__webpack_require__(5));
exports.SET_ACCOUNTS = 'SET_ACCOUNTS';
var setAccounts = function (accounts) { return ({
    type: exports.SET_ACCOUNTS,
    accounts: accounts
}); };
exports.setAccounts = setAccounts;
var setAccountsAsync = function () { return function (dispatch) {
    axios_1.default.get('/accounts-data')
        .then(function (res) {
        var accounts = res.data.accounts;
        dispatch((0, exports.setAccounts)(accounts));
    })
        .catch(function (error) {
        console.log(error);
    });
}; };
exports.setAccountsAsync = setAccountsAsync;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTransactionsAsync = exports.setTransactions = exports.SET_TRANSACTIONS = void 0;
var axios_1 = __importDefault(__webpack_require__(5));
exports.SET_TRANSACTIONS = 'SET_TRANSACTIONS';
var setTransactions = function (transactions) { return ({
    type: exports.SET_TRANSACTIONS,
    transactions: transactions
}); };
exports.setTransactions = setTransactions;
var setTransactionsAsync = function () { return function (dispatch) {
    axios_1.default.get('/transactions-data')
        .then(function (res) {
        var transactions = res.data.transactions;
        dispatch((0, exports.setTransactions)(transactions));
    })
        .catch(function (error) {
        console.log(error);
    });
}; };
exports.setTransactionsAsync = setTransactionsAsync;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RubleIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function RubleIcon(_a) {
    var size = _a.size;
    return (react_1.default.createElement("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", width: size, height: size },
        react_1.default.createElement("path", { d: "M19,4H10V15H7v2h3v3H7v2h3v6h2V22h9V20H12V17h7a6.0067,6.0067,0,0,0,6-6V10A6.0067,6.0067,0,0,0,19,4Zm4,7a4.0045,4.0045,0,0,1-4,4H12V6h7a4.0045,4.0045,0,0,1,4,4Z", fill: "black" })));
}
exports.RubleIcon = RubleIcon;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.filterTransactionsByAccount = void 0;
var useTransactionsData_1 = __webpack_require__(40);
var filterTransactionsByAccount = function (accountNumber) {
    var transactions = (0, useTransactionsData_1.useTransactionsData)();
    var filteredTransactions = transactions
        .filter(function (transaction) {
        return transaction.from === accountNumber || transaction.to === accountNumber;
    });
    return filteredTransactions;
};
exports.filterTransactionsByAccount = filterTransactionsByAccount;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionsGraphicsOptions = exports.noTransactionsGraphicsOptions = exports.balanceGraphicsOptions = exports.noBalanceGraphicsOptions = exports.bigGraphicsTicksStyles = exports.smallGraphicsTicksStyles = exports.chartAreaBorder = void 0;
var chartAreaBorder = {
    id: 'chartAreaBorder',
    beforeDraw: function (chart) {
        var ctx = chart.ctx, _a = chart.chartArea, top = _a.top, bottom = _a.bottom, left = _a.left, right = _a.right;
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000000';
        ctx.moveTo(left + 1, top);
        ctx.lineTo(right, top);
        ctx.lineTo(right, bottom);
        ctx.lineTo(left + 1, bottom);
        ctx.closePath();
        ctx.stroke();
    }
};
exports.chartAreaBorder = chartAreaBorder;
var smallGraphicsTicksStyles = {
    id: 'ticksStyles',
    afterDraw: function (chart) {
        var ctx = chart.ctx, _a = chart.scales, x = _a.x, y = _a.y;
        var yMinTickValue = y.ticks[0].value;
        var yMaxTickValue = y.ticks[y.ticks.length - 1].value;
        var xPos = y.right;
        var yMinPos = y.getPixelForTick(0);
        var yMaxPos = y.getPixelForTick(y.ticks.length - 1);
        var xOffset = xPos + 20;
        ctx.save();
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'left';
        ctx.font = "500 20px 'Work Sans', sans-serif";
        ctx.fillStyle = '#000000';
        ctx.fillText(yMinTickValue, xOffset, yMinPos - 10);
        ctx.fillText(yMaxTickValue, xOffset, yMaxPos + 10);
        x.ticks.forEach(function (tick, index, ticks) {
            var value = tick.label;
            var xPos = x.getPixelForTick(index);
            var yPos = y.bottom;
            ctx.textBaseline = 'bottom';
            ctx.textAlign = 'center';
            ctx.font = "700 20px 'Work Sans', sans-serif";
            ctx.fillStyle = '#000000';
            ctx.fillText(value, xPos, yPos + 30);
        });
        ctx.restore();
    }
};
exports.smallGraphicsTicksStyles = smallGraphicsTicksStyles;
var bigGraphicsTicksStyles = {
    id: 'ticksStyles',
    afterDraw: function (chart) {
        var ctx = chart.ctx, _a = chart.scales, x = _a.x, y = _a.y;
        var yMinTickValue = "".concat(y.ticks[0].value, " \u20BD");
        var yMaxTickValue = "".concat(y.ticks[y.ticks.length - 1].value, " \u20BD");
        var xPos = y.right;
        var yMinPos = y.getPixelForTick(0);
        var yMaxPos = y.getPixelForTick(y.ticks.length - 1);
        var xOffset = xPos + 20;
        ctx.save();
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'left';
        ctx.font = "500 20px 'Work Sans', sans-serif";
        ctx.fillStyle = '#000000';
        ctx.fillText(yMinTickValue, xOffset, yMinPos - 10);
        ctx.fillText(yMaxTickValue, xOffset, yMaxPos + 10);
        x.ticks.forEach(function (tick, index, ticks) {
            var value = tick.label;
            var xPos = x.getPixelForTick(index);
            var yPos = y.bottom;
            ctx.textBaseline = 'bottom';
            ctx.textAlign = 'center';
            ctx.font = "700 20px 'Work Sans', sans-serif";
            ctx.fillStyle = '#000000';
            ctx.fillText(value, xPos, yPos + 30);
        });
        ctx.restore();
    }
};
exports.bigGraphicsTicksStyles = bigGraphicsTicksStyles;
var noBalanceGraphicsOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            drawBorder: false,
            offset: false,
            grid: {
                display: false,
                drawBorder: false,
                drawTicks: false
            },
            ticks: {
                display: false
            }
        },
        y: {
            position: 'right',
            offset: false,
            drawBorder: false,
            grid: {
                display: false,
                drawBorder: false,
                drawTicks: false
            },
            ticks: {
                display: false,
            },
            afterFit: function (axis) {
                axis.paddingTop = 2;
                axis.paddingBottom = 35;
                axis.paddingRight = 2;
            },
        },
    }
};
exports.noBalanceGraphicsOptions = noBalanceGraphicsOptions;
var balanceGraphicsOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            drawBorder: false,
            offset: false,
            grid: {
                display: false,
                drawBorder: false,
                drawTicks: false
            },
            ticks: {
                display: false
            }
        },
        y: {
            position: 'right',
            offset: false,
            drawBorder: false,
            grid: {
                display: false,
                drawBorder: false,
                drawTicks: false
            },
            ticks: {
                display: false,
            },
            afterFit: function (axis) {
                axis.paddingTop = 2;
                axis.paddingRight = 105;
                axis.paddingBottom = 35;
            },
        },
    }
};
exports.balanceGraphicsOptions = balanceGraphicsOptions;
var noTransactionsGraphicsOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            stacked: true,
            drawBorder: false,
            offset: false,
            grid: {
                display: false,
                drawBorder: false,
                drawTicks: false
            },
            ticks: {
                display: false
            }
        },
        y: {
            stacked: true,
            position: 'right',
            offset: false,
            drawBorder: false,
            grid: {
                display: false,
                drawBorder: false,
                drawTicks: false
            },
            ticks: {
                display: false,
            },
            afterFit: function (axis) {
                axis.paddingTop = 2;
                axis.paddingBottom = 35;
                axis.paddingRight = 2;
            },
        }
    }
};
exports.noTransactionsGraphicsOptions = noTransactionsGraphicsOptions;
var transactionsGraphicsOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            stacked: true,
            drawBorder: false,
            offset: false,
            grid: {
                display: false,
                drawBorder: false,
                drawTicks: false
            },
            ticks: {
                display: false
            }
        },
        y: {
            stacked: true,
            position: 'right',
            offset: false,
            drawBorder: false,
            grid: {
                display: false,
                drawBorder: false,
                drawTicks: false
            },
            ticks: {
                display: false,
            },
            afterFit: function (axis) {
                axis.paddingTop = 2;
                axis.paddingRight = 105;
                axis.paddingBottom = 35;
            },
        }
    }
};
exports.transactionsGraphicsOptions = transactionsGraphicsOptions;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAccountsBalanceAsync = exports.setAccountsBalance = exports.SET_ACCOUNTS_BALANCE = void 0;
var axios_1 = __importDefault(__webpack_require__(5));
exports.SET_ACCOUNTS_BALANCE = 'SET_ACCOUNTS_BALANCE';
var setAccountsBalance = function (accountsBalance) { return ({
    type: exports.SET_ACCOUNTS_BALANCE,
    accountsBalance: accountsBalance
}); };
exports.setAccountsBalance = setAccountsBalance;
var setAccountsBalanceAsync = function (number) { return function () { return function (dispatch) {
    axios_1.default.get("/accounts-balance/".concat(number))
        .then(function (res) {
        var accountsBalance = res.data.accountsBalance;
        dispatch((0, exports.setAccountsBalance)(accountsBalance));
    })
        .catch(function (error) {
        console.log(error);
    });
}; }; };
exports.setAccountsBalanceAsync = setAccountsBalanceAsync;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(170), exports);


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setTransactionsOffset = exports.SET_TRANSACTIONS_OFFSET = void 0;
exports.SET_TRANSACTIONS_OFFSET = 'SET_TRANSACTIONS_OFFSET';
var setTransactionsOffset = function (transactionsOffset) { return ({
    type: exports.SET_TRANSACTIONS_OFFSET,
    transactionsOffset: transactionsOffset
}); };
exports.setTransactionsOffset = setTransactionsOffset;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCurrenciesAsync = exports.setCurrencies = exports.SET_CURRENCIES = void 0;
var axios_1 = __importDefault(__webpack_require__(5));
exports.SET_CURRENCIES = 'SET_CURRENCIES';
var setCurrencies = function (currencies) { return ({
    type: exports.SET_CURRENCIES,
    currencies: currencies
}); };
exports.setCurrencies = setCurrencies;
var setCurrenciesAsync = function () { return function (dispatch) {
    axios_1.default.get('/currencies-data')
        .then(function (res) {
        var currencies = res.data.currencies;
        dispatch((0, exports.setCurrencies)(currencies));
    })
        .catch(function (error) {
        console.log(error);
    });
}; };
exports.setCurrenciesAsync = setCurrenciesAsync;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setCurrencyFromDropdownSwitcher = exports.SET_CURRENCY_FROM_DROPDOWN_SWITCHER = void 0;
exports.SET_CURRENCY_FROM_DROPDOWN_SWITCHER = 'SET_CURRENCY_FROM_DROPDOWN_SWITCHER';
var setCurrencyFromDropdownSwitcher = function (currencyFromDropdownSwitcher) { return ({
    type: exports.SET_CURRENCY_FROM_DROPDOWN_SWITCHER,
    currencyFromDropdownSwitcher: currencyFromDropdownSwitcher
}); };
exports.setCurrencyFromDropdownSwitcher = setCurrencyFromDropdownSwitcher;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setCurrencyFromItemSwitcher = exports.SET_CURRENCY_FROM_ITEM_SWITCHER = void 0;
exports.SET_CURRENCY_FROM_ITEM_SWITCHER = 'SET_CURRENCY_FROM_ITEM_SWITCHER';
var setCurrencyFromItemSwitcher = function (currencyFromItemSwitcher) { return ({
    type: exports.SET_CURRENCY_FROM_ITEM_SWITCHER,
    currencyFromItemSwitcher: currencyFromItemSwitcher
}); };
exports.setCurrencyFromItemSwitcher = setCurrencyFromItemSwitcher;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setCurrencyFromType = exports.SET_CURRENCY_FROM_TYPE = void 0;
exports.SET_CURRENCY_FROM_TYPE = 'SET_CURRENCY_FROM_TYPE';
var setCurrencyFromType = function (currencyFromType) { return ({
    type: exports.SET_CURRENCY_FROM_TYPE,
    currencyFromType: currencyFromType
}); };
exports.setCurrencyFromType = setCurrencyFromType;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setCurrencyToDropdownSwitcher = exports.SET_CURRENCY_TO_DROPDOWN_SWITCHER = void 0;
exports.SET_CURRENCY_TO_DROPDOWN_SWITCHER = 'SET_CURRENCY_TO_DROPDOWN_SWITCHER';
var setCurrencyToDropdownSwitcher = function (currencyToDropdownSwitcher) { return ({
    type: exports.SET_CURRENCY_TO_DROPDOWN_SWITCHER,
    currencyToDropdownSwitcher: currencyToDropdownSwitcher
}); };
exports.setCurrencyToDropdownSwitcher = setCurrencyToDropdownSwitcher;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setCurrencyToItemSwitcher = exports.SET_CURRENCY_TO_ITEM_SWITCHER = void 0;
exports.SET_CURRENCY_TO_ITEM_SWITCHER = 'SET_CURRENCY_TO_ITEM_SWITCHER';
var setCurrencyToItemSwitcher = function (currencyToItemSwitcher) { return ({
    type: exports.SET_CURRENCY_TO_ITEM_SWITCHER,
    currencyToItemSwitcher: currencyToItemSwitcher
}); };
exports.setCurrencyToItemSwitcher = setCurrencyToItemSwitcher;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setCurrencyToType = exports.SET_CURRENCY_TO_TYPE = void 0;
exports.SET_CURRENCY_TO_TYPE = 'SET_CURRENCY_TO_TYPE';
var setCurrencyToType = function (currencyToType) { return ({
    type: exports.SET_CURRENCY_TO_TYPE,
    currencyToType: currencyToType
}); };
exports.setCurrencyToType = setCurrencyToType;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBanksAsync = exports.setBanks = exports.SET_BANKS = void 0;
var axios_1 = __importDefault(__webpack_require__(5));
exports.SET_BANKS = 'SET_BANKS';
var setBanks = function (banks) { return ({
    type: exports.SET_BANKS,
    banks: banks
}); };
exports.setBanks = setBanks;
var setBanksAsync = function () { return function (dispatch) {
    axios_1.default.get('/banks-data')
        .then(function (res) {
        var banks = res.data.banks;
        dispatch((0, exports.setBanks)(banks));
    })
        .catch(function (error) {
        console.log(error);
    });
}; };
exports.setBanksAsync = setBanksAsync;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setUserAsync = exports.setUser = exports.SET_USER = void 0;
exports.SET_USER = 'SET_USER';
var setUser = function (user) { return ({
    type: exports.SET_USER,
    user: user
}); };
exports.setUser = setUser;
var setUserAsync = function () { return function (dispatch) {
    if (window.__user__) {
        dispatch((0, exports.setUser)(window.__user__));
    }
}; };
exports.setUserAsync = setUserAsync;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = void 0;
var generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };
exports.generateRandomString = generateRandomString;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
var express_1 = __importDefault(__webpack_require__(50));
var server_1 = __importDefault(__webpack_require__(51));
var App_tsx_1 = __webpack_require__(52);
var indexTemplate_1 = __webpack_require__(310);
var generateRandomIndex_1 = __webpack_require__(37);
var generateFiveDigitNumber_1 = __webpack_require__(49);
var generateFifteenDigitNumber_1 = __webpack_require__(311);
var apiMethods_1 = __webpack_require__(312);
var ws_1 = __importDefault(__webpack_require__(316));
var http = __importStar(__webpack_require__(317));
var body_parser_1 = __importDefault(__webpack_require__(318));
var cookie_1 = __importDefault(__webpack_require__(319));
var cookie_parser_1 = __importDefault(__webpack_require__(320));
var knex_1 = __importDefault(__webpack_require__(321));
exports.database = (0, knex_1.default)({
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
        filename: './data/db.sqlite3'
    },
    migrations: {
        tableName: "knex_migrations",
    }
});
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/static", express_1.default.static("./dist/client"));
app.use((0, cookie_parser_1.default)());
var server = http.createServer(app);
var wss = new ws_1.default.Server({ clientTracking: false, noServer: true });
var clients = new Map();
server.on('upgrade', function (req, socket, head) { return __awaiter(void 0, void 0, void 0, function () {
    var cookies, sessionId, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cookies = cookie_1.default.parse(req.headers['cookie']);
                sessionId = cookies && cookies['sessionId'];
                return [4 /*yield*/, (0, apiMethods_1.findUserBySessionId)(sessionId)];
            case 1:
                user = _a.sent();
                if (!user) {
                    socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
                    socket.destroy();
                    return [2 /*return*/];
                }
                wss.handleUpgrade(req, socket, head, function (ws) {
                    wss.emit('connection', ws);
                });
                return [2 /*return*/];
        }
    });
}); });
wss.on('connection', function (ws) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        clients.set(ws);
        setInterval(function () { return __awaiter(void 0, void 0, void 0, function () {
            var currenciesExchange, newCurrenciesExchange;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, apiMethods_1.getAllCurrenciesExchange)()];
                    case 1:
                        currenciesExchange = _a.sent();
                        return [4 /*yield*/, (0, apiMethods_1.insertNewValuesForCurrenciesExchange)(currenciesExchange)];
                    case 2:
                        newCurrenciesExchange = _a.sent();
                        return [4 /*yield*/, (0, apiMethods_1.sendCurrenciesExchangeToAllClients)(ws, newCurrenciesExchange, clients)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }, 10000);
        return [2 /*return*/];
    });
}); });
app.post("/login", body_parser_1.default.urlencoded({ extended: false }), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, user, sessionId;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, password = _a.password;
                return [4 /*yield*/, (0, apiMethods_1.findUserByUsername)(username)];
            case 1:
                user = _b.sent();
                if (username.length === 0 || password.length === 0) {
                    return [2 /*return*/, res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify({ login: true, loginError: 'Введите логин/пароль' })))];
                }
                if (!user || user.password !== (0, apiMethods_1.createHash)(password)) {
                    return [2 /*return*/, res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify({ login: true, loginError: 'Неверный логин/пароль' })))];
                }
                return [4 /*yield*/, (0, apiMethods_1.createSession)(user.id)];
            case 2:
                sessionId = _b.sent();
                res
                    .cookie("sessionId", sessionId, { httpOnly: true })
                    .send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify(user)));
                return [2 /*return*/];
        }
    });
}); });
app.post("/signup", body_parser_1.default.urlencoded({ extended: false }), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, foundUsername, userId;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, password = _a.password;
                return [4 /*yield*/, (0, apiMethods_1.findUserByUsername)(username)];
            case 1:
                foundUsername = _b.sent();
                userId = (0, generateRandomIndex_1.generateRandomString)();
                if (username.length === 0 || password.length === 0) {
                    return [2 /*return*/, res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify({ signup: true, signupError: 'Придумайте логин/пароль' })))];
                }
                if (foundUsername && username === foundUsername.username) {
                    return [2 /*return*/, res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify({ signup: true, signupError: 'Данный пользователь уже зарегистрирован' })))];
                }
                return [4 /*yield*/, (0, exports.database)('users')
                        .insert({
                        id: userId,
                        username: username,
                        password: (0, apiMethods_1.createHash)(password)
                    })];
            case 2:
                _b.sent();
                res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify({ signup: true, signupSuccess: 'Аккаунт успешно создан' })));
                return [2 /*return*/];
        }
    });
}); });
app.post("/create-account", (0, apiMethods_1.auth)(), body_parser_1.default.urlencoded({ extended: false }), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var number, balance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                number = (0, generateFifteenDigitNumber_1.generateFifteenDigitNumber)();
                balance = (0, generateFiveDigitNumber_1.generateFiveDigitNumber)();
                return [4 /*yield*/, (0, exports.database)('accounts')
                        .insert({
                        id: (0, generateRandomIndex_1.generateRandomString)(),
                        userId: req.user.id,
                        number: number,
                        balance: balance
                    })];
            case 1:
                _a.sent();
                res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify(req.user ? req.user : {})));
                return [2 /*return*/];
        }
    });
}); });
app.post("/transfer-funds", (0, apiMethods_1.auth)(), body_parser_1.default.urlencoded({ extended: false }), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, from, to, sum, currentAccount, foundAccount, currentAccountSum, currentAnotherAccountSum;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, from = _a.from, to = _a.to, sum = _a.sum;
                return [4 /*yield*/, (0, apiMethods_1.findAccountByAccount)(Number(from))];
            case 1:
                currentAccount = _b.sent();
                return [4 /*yield*/, (0, apiMethods_1.findAccountByAccount)(Number(to))];
            case 2:
                foundAccount = _b.sent();
                req.user.currentAccount = Number(from);
                if (from.length === 0 || to.length === 0) {
                    req.user.transferError = 'Введите номер счёта получателя/сумму перевода';
                    return [2 /*return*/, res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify(req.user ? req.user : {})))];
                }
                if (foundAccount === undefined) {
                    req.user.transferError = 'Указанного вами счёта не существует';
                    return [2 /*return*/, res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify(req.user ? req.user : {})))];
                }
                if (Number(from) === foundAccount.number) {
                    req.user.transferError = 'Нельзя перевести средства со своего счёта на свой';
                    return [2 /*return*/, res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify(req.user ? req.user : {})))];
                }
                if (Number(sum) < 10) {
                    req.user.transferError = 'Нельзя перевести меньше средств, чем 10 рублей';
                    return [2 /*return*/, res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify(req.user ? req.user : {})))];
                }
                if (Number(sum) > currentAccount.balance) {
                    req.user.transferError = 'Нельзя перевести больше средств, чем есть на счёте';
                    return [2 /*return*/, res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify(req.user ? req.user : {})))];
                }
                return [4 /*yield*/, (0, exports.database)('accounts')
                        .select()
                        .where({ number: Number(from) })];
            case 3:
                currentAccountSum = (_b.sent())[0];
                return [4 /*yield*/, (0, exports.database)('accounts')
                        .select()
                        .where({ number: Number(to) })];
            case 4:
                currentAnotherAccountSum = (_b.sent())[0];
                return [4 /*yield*/, (0, exports.database)('transactions')
                        .insert({
                        id: (0, generateRandomIndex_1.generateRandomString)(),
                        userId: req.user.id,
                        sum: sum,
                        date: Date.now(),
                        from: Number(from),
                        to: Number(to)
                    })];
            case 5:
                _b.sent();
                return [4 /*yield*/, (0, exports.database)('accounts')
                        .where({ number: Number(from) })
                        .update({ balance: currentAccountSum.balance - Number(sum) })];
            case 6:
                _b.sent();
                return [4 /*yield*/, (0, exports.database)('accounts')
                        .where({ number: to })
                        .update({ balance: currentAnotherAccountSum.balance + Number(sum) })];
            case 7:
                _b.sent();
                return [4 /*yield*/, (0, exports.database)('accountsBalance')
                        .insert({
                        id: (0, generateRandomIndex_1.generateRandomString)(),
                        userId: req.user.id,
                        number: Number(from),
                        balance: currentAccountSum.balance - Number(sum),
                        date: Date.now()
                    })];
            case 8:
                _b.sent();
                return [4 /*yield*/, (0, exports.database)('accountsBalance')
                        .insert({
                        id: (0, generateRandomIndex_1.generateRandomString)(),
                        userId: req.user.id,
                        number: Number(to),
                        balance: currentAnotherAccountSum.balance + Number(sum),
                        date: Date.now()
                    })];
            case 9:
                _b.sent();
                res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify(req.user ? req.user : {})));
                return [2 /*return*/];
        }
    });
}); });
app.post("/currency-buy", (0, apiMethods_1.auth)(), body_parser_1.default.urlencoded({ extended: false }), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, from, to, amount, fromCurrency, exchangeRate;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, from = _a.from, to = _a.to, amount = _a.amount;
                if (from.length === 0 || to.length === 0 || amount.length === 0) {
                    req.user.currencyError = 'Выберите валютные коды/введите сумму перевода';
                    return [2 /*return*/, res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify(req.user ? req.user : {})))];
                }
                if (from === to) {
                    req.user.currencyError = 'Нельзя конвертировать валюту в точно такую же';
                    return [2 /*return*/, res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify(req.user ? req.user : {})))];
                }
                return [4 /*yield*/, (0, apiMethods_1.findCurrencyByCurrency)(req.user.id, from)];
            case 1:
                fromCurrency = _b.sent();
                if (fromCurrency === undefined) {
                    req.user.currencyError = 'Вы еще не приобрели выбранную вами конвертируемую валюту';
                    return [2 /*return*/, res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify(req.user ? req.user : {})))];
                }
                if (Number(amount) > fromCurrency.amount) {
                    req.user.currencyError = 'Нельзя перевести больше средств, чем есть у вас в валюте';
                    return [2 /*return*/, res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify(req.user ? req.user : {})))];
                }
                return [4 /*yield*/, (0, exports.database)('exchange')
                        .select()
                        .where({ from: from, to: to })];
            case 2:
                exchangeRate = (_b.sent())[0];
                return [4 /*yield*/, (0, apiMethods_1.updateCurrenciesTable)(req, to, 1, amount, exchangeRate.rate)];
            case 3:
                _b.sent();
                return [4 /*yield*/, (0, exports.database)(from)
                        .where({ userId: req.user.id, code: from })
                        .update({
                        amount: exports.database.raw("amount - ".concat(Number(amount)))
                    })];
            case 4:
                _b.sent();
                return [4 /*yield*/, (0, exports.database)(to)
                        .where({ userId: req.user.id, code: to })
                        .update({
                        amount: exports.database.raw("amount + ".concat(Number(amount), " * ").concat(exchangeRate.rate))
                    })];
            case 5:
                _b.sent();
                res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify(req.user ? req.user : {})));
                return [2 /*return*/];
        }
    });
}); });
app.get("/", (0, apiMethods_1.auth)(), function (req, res) {
    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify(req.user ? req.user : {})));
});
app.get("/logout", (0, apiMethods_1.auth)(), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, apiMethods_1.deleteSession)(req.sessionId)];
            case 1:
                _a.sent();
                res.clearCookie("sessionId").send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify({ login: true })));
                return [2 /*return*/];
        }
    });
}); });
app.get("/signup", (0, apiMethods_1.auth)(), function (req, res) {
    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify(req.user ? req.user : { signup: true })));
});
app.get("/accounts-data", (0, apiMethods_1.auth)(), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var accounts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.database)('accounts')
                    .select()
                    .where({ userId: req.user.id })];
            case 1:
                accounts = _a.sent();
                res.json({ accounts: accounts });
                return [2 /*return*/];
        }
    });
}); });
app.get("/accounts-balance/:number", (0, apiMethods_1.auth)(), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var accountsBalance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.database)('accountsBalance')
                    .select()
                    .where({ number: req.params.number })];
            case 1:
                accountsBalance = _a.sent();
                res.json({ accountsBalance: accountsBalance });
                return [2 /*return*/];
        }
    });
}); });
app.get("/transactions-data", (0, apiMethods_1.auth)(), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var transactions;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.database)('transactions')
                    .select()
                    .where({ userId: req.user.id })];
            case 1:
                transactions = _a.sent();
                res.json({ transactions: transactions });
                return [2 /*return*/];
        }
    });
}); });
app.get("/currencies-data", (0, apiMethods_1.auth)(), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userCurrencies, currencies;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.database)('currencies')
                    .select()
                    .where({ userId: req.user.id })];
            case 1:
                userCurrencies = _a.sent();
                if (!(userCurrencies.length === 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, apiMethods_1.fillCurrenciesWithData)(req.user.id)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [4 /*yield*/, (0, apiMethods_1.getCurrenciesForUser)(req.user.id)];
            case 4:
                currencies = _a.sent();
                res.json({ currencies: currencies });
                return [2 /*return*/];
        }
    });
}); });
app.get("/banks-data", (0, apiMethods_1.auth)(), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var banks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.database)('banks').select()];
            case 1:
                banks = _a.sent();
                res.json({ banks: banks });
                return [2 /*return*/];
        }
    });
}); });
app.get("*", (0, apiMethods_1.auth)(), function (req, res) {
    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_tsx_1.App)()), JSON.stringify(req.user ? req.user : {})));
});
server.listen(3000, function () {
    console.log("server started on port http://localhost:3000");
});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function CheckIcon(_a) {
    var size = _a.size;
    return (react_1.default.createElement("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size },
        react_1.default.createElement("g", { clipPath: "url(#clip0_1_1137)" },
            react_1.default.createElement("path", { d: "M8.99997 16.1698L4.82997 11.9998L3.40997 13.4098L8.99997 18.9998L21 6.99984L19.59 5.58984L8.99997 16.1698Z", fill: "#182233" })),
        react_1.default.createElement("defs", null,
            react_1.default.createElement("clipPath", { id: "clip0_1_1137" },
                react_1.default.createElement("rect", { width: "24", height: "24", fill: "white" })))));
}
exports.CheckIcon = CheckIcon;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useTransactionsData = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(2);
var transactionsActions_1 = __webpack_require__(20);
function useTransactionsData() {
    var transactions = (0, react_redux_1.useSelector)(function (state) { return state.transactions.transactions; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch((0, transactionsActions_1.setTransactionsAsync)());
    }, []);
    return transactions;
}
exports.useTransactionsData = useTransactionsData;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.limitTransactionsAmount = void 0;
var filterTransactionsByAccount_1 = __webpack_require__(22);
var limitTransactionsAmount = function (limit, offset, accountNumber) {
    var transactions = (0, filterTransactionsByAccount_1.filterTransactionsByAccount)(accountNumber);
    var limitedTransactions;
    if (transactions.length < limit + offset) {
        limitedTransactions = transactions.reverse();
    }
    else {
        limitedTransactions = transactions
            .slice(transactions.length - limit - offset, transactions.length)
            .reverse();
    }
    return limitedTransactions;
};
exports.limitTransactionsAmount = limitTransactionsAmount;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDataForBalanceGraphics = void 0;
var sortAccountsBalancesByMonth_1 = __webpack_require__(163);
var convertDataForBalanceGraphics = function (accountNumber, months, monthsNumbers) {
    var monthsBalances = (0, sortAccountsBalancesByMonth_1.sortAccountsBalancesByMonth)(accountNumber, months, monthsNumbers);
    var data = {
        labels: months,
        datasets: [{
                data: monthsBalances,
                backgroundColor: '#116ACC',
                hoverBackgroundColor: '#116ACC',
                categoryPercentage: 0.8,
                yAxisID: 'y'
            }]
    };
    data.labels.unshift('');
    data.labels.push('');
    data.datasets[0].data.unshift(null);
    data.datasets[0].data.push(null);
    return data;
};
exports.convertDataForBalanceGraphics = convertDataForBalanceGraphics;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(177), exports);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.filterAccountsByAccount = void 0;
var useAccountsData_1 = __webpack_require__(18);
var filterAccountsByAccount = function (accountNumber) {
    var accounts = (0, useAccountsData_1.useAccountsData)();
    var account = accounts.filter(function (account) {
        return account.number === accountNumber;
    })[0];
    return account;
};
exports.filterAccountsByAccount = filterAccountsByAccount;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useCurrenciesData = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(2);
var currenciesActions_1 = __webpack_require__(28);
function useCurrenciesData() {
    var currencies = (0, react_redux_1.useSelector)(function (state) { return state.currencies.currencies; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch((0, currenciesActions_1.setCurrenciesAsync)());
    }, []);
    return currencies;
}
exports.useCurrenciesData = useCurrenciesData;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useCurrenciesExchangeData = void 0;
var react_1 = __webpack_require__(0);
function useCurrenciesExchangeData() {
    var wsProto = location.protocol === 'https:' ? 'wss:' : 'ws:';
    var client = new WebSocket("".concat(wsProto, "//").concat(location.host));
    var _a = (0, react_1.useState)(null), currenciesExchange = _a[0], setCurrenciesExchange = _a[1];
    var handleMessage = function (message) {
        var data = JSON.parse(message.data.toString());
        if (data.type === 'EXCHANGE_RATE_CHANGE') {
            setCurrenciesExchange(data.currenciesExchange);
        }
    };
    (0, react_1.useEffect)(function () {
        client.addEventListener('message', handleMessage);
        return function () {
            client.removeEventListener('message', handleMessage);
        };
    }, [currenciesExchange]);
    return currenciesExchange;
}
exports.useCurrenciesExchangeData = useCurrenciesExchangeData;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(243), exports);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(258), exports);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFiveDigitNumber = void 0;
var generateFiveDigitNumber = function () { return Math.floor(Math.random() * 90000) + 10000; };
exports.generateFiveDigitNumber = generateFiveDigitNumber;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importStar(__webpack_require__(0));
__webpack_require__(53);
var Signup_1 = __webpack_require__(55);
var Login_1 = __webpack_require__(78);
var Content_1 = __webpack_require__(84);
var Header_1 = __webpack_require__(10);
var Layout_1 = __webpack_require__(87);
var Accounts_1 = __webpack_require__(90);
var AccountView_1 = __webpack_require__(128);
var AccountDetails_1 = __webpack_require__(183);
var Currency_1 = __webpack_require__(224);
var CurrencyDetails_1 = __webpack_require__(263);
var Banks_1 = __webpack_require__(275);
var NotFound_1 = __webpack_require__(286);
var useUser_1 = __webpack_require__(289);
var react_redux_1 = __webpack_require__(2);
var reducer_1 = __webpack_require__(1);
var react_router_dom_1 = __webpack_require__(26);
var redux_devtools_extension_1 = __webpack_require__(307);
var redux_1 = __webpack_require__(308);
var redux_thunk_1 = __importDefault(__webpack_require__(309));
var store = (0, redux_1.createStore)(reducer_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));
function AppComponent() {
    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];
    var user = (0, useUser_1.useUser)()[0];
    (0, react_1.useEffect)(function () {
        setMounted(true);
    }, []);
    if (mounted && (user.login
        || user.loginError
        || Object.keys(user).length === 0)) {
        return react_1.default.createElement(Login_1.Login, { user: user });
    }
    if (mounted && (user.signup
        || user.signupError
        || user.signupSuccess)) {
        return react_1.default.createElement(Signup_1.Signup, { user: user });
    }
    return (react_1.default.createElement("div", null, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Layout_1.Layout, null,
            react_1.default.createElement(Header_1.Header, { navigation: true }),
            react_1.default.createElement(Content_1.Content, { user: user },
                react_1.default.createElement(react_router_dom_1.Routes, null,
                    Object.keys(user).length === 0 && (react_1.default.createElement(react_router_dom_1.Route, { path: '/signup', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/accounts', replace: true }) })) || (react_1.default.createElement(react_router_dom_1.Route, { path: '/login', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/accounts', replace: true }) })),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/accounts', replace: true }) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/signup', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/accounts', replace: true }) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/logout', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/login', replace: true }) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/accounts', element: react_1.default.createElement(Accounts_1.Accounts, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/accounts/:number', element: react_1.default.createElement(AccountView_1.AccountView, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/accounts/:number/details', element: react_1.default.createElement(AccountDetails_1.AccountDetails, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/currency', element: react_1.default.createElement(Currency_1.Currency, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/currency/details', element: react_1.default.createElement(CurrencyDetails_1.CurrencyDetails, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/banks', element: react_1.default.createElement(Banks_1.Banks, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/create-account', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/accounts', replace: true }) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/transfer-funds', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: "/accounts/".concat(user.currentAccount), replace: true }) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/currency-buy', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/currency', replace: true }) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '*', element: react_1.default.createElement(NotFound_1.NotFound, null) }))))))));
}
var App = function () {
    return react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(AppComponent, null));
};
exports.App = App;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(54);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700&display=swap);"]);
// Module
exports.push([module.i, ":root {\n  --primary:         #116ACC;\n  --secondary1:      #182233;\n  --secondary2:      #B3CEE2;\n  --secondary3:      #D9DDE7;\n  --secondary4:      #FD4E5D;\n  --black:           #000000;\n  --grey1:           #1F2937;\n  --grey2:           #374151;\n  --grey3:           #4B5563;\n  --grey4:           #6B7280;\n  --grey5:           #9CA3AF;\n  --grey6:           #D1D5DB;\n  --grey7:           #F3F4F6;\n  --white:           #ffffff;\n  --info:            #A0C3FF;\n  --success:         #76CA66;\n  --warning:         #E2B93B;\n  --error:           #BA0000;\n  --background:      #E5E5E5;\n}\n\nbody {\n  margin: 0;\n  font-family: 'Ubuntu', serif;\n  color: var(--black);\n  background-color: var(--white);\n}\n\n* {\n  color: var(--black);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton {\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
            }
            return content;
        }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
    list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
            }
            if (mediaQuery) {
                if (!item[2]) {
                    item[2] = mediaQuery;
                }
                else {
                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
            }
            list.push(item);
        }
    };
    return list;
};
function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
} // Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    return "/*# ".concat(data, " */");
}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(56), exports);


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signup = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var signup_css_1 = __importDefault(__webpack_require__(57));
var Notification_1 = __webpack_require__(9);
var Header_1 = __webpack_require__(10);
var SignupForm_1 = __webpack_require__(70);
var SignupButton_1 = __webpack_require__(73);
function Signup(_a) {
    var user = _a.user;
    return (react_1.default.createElement("div", { className: signup_css_1.default.content },
        react_1.default.createElement("div", { className: signup_css_1.default.container },
            user.signupError && (react_1.default.createElement(Notification_1.Notification, { type: 'error', text: user.signupError })),
            user.signupSuccess && (react_1.default.createElement(Notification_1.Notification, { type: 'success', text: user.signupSuccess })),
            react_1.default.createElement(Header_1.Header, { navigation: false }),
            react_1.default.createElement(SignupButton_1.SignupButton, null),
            react_1.default.createElement(SignupForm_1.SignupForm, null))));
}
exports.Signup = Signup;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "signup__content--2qBMy",
	"container": "signup__container--F_aQq"
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
var react_1 = __importStar(__webpack_require__(0));
var notification_css_1 = __importDefault(__webpack_require__(59));
var ErrorIcon_1 = __webpack_require__(60);
var CheckCircleIcon_1 = __webpack_require__(61);
function Notification(_a) {
    var type = _a.type, text = _a.text;
    var _b = (0, react_1.useState)(true), isOpened = _b[0], setIsOpened = _b[1];
    return (react_1.default.createElement("div", { className: notification_css_1.default.container }, isOpened && (react_1.default.createElement("div", { className: "".concat(notification_css_1.default.notification, " ").concat(type === 'error' ? notification_css_1.default.error : notification_css_1.default.success) },
        react_1.default.createElement("span", { className: notification_css_1.default.icon }, type === 'error'
            ? (react_1.default.createElement(ErrorIcon_1.ErrorIcon, { size: 28 }))
            : (react_1.default.createElement(CheckCircleIcon_1.CheckCircleIcon, { size: 28 }))),
        react_1.default.createElement("span", { className: notification_css_1.default.desc }, text),
        react_1.default.createElement("span", { className: notification_css_1.default.close, onClick: function () { return setIsOpened(false); } }, type === 'error'
            ? (react_1.default.createElement("svg", { className: notification_css_1.default.closeIcon, fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24px", height: "24px" },
                react_1.default.createElement("path", { fill: "#9CA3AF", d: "M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z" })))
            : (react_1.default.createElement("svg", { className: notification_css_1.default.closeIcon, fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24px", height: "24px" },
                react_1.default.createElement("path", { fill: "#9CA3AF", d: "M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z" }))))))));
}
exports.Notification = Notification;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "notification__container--741FU",
	"notification": "notification__notification--1S9Nr",
	"icon": "notification__icon--2lSGL",
	"desc": "notification__desc--38nwy",
	"close": "notification__close--1rSYj",
	"closeIcon": "notification__closeIcon--3jTkB",
	"success": "notification__success--3_Z1_",
	"error": "notification__error--3hF2w"
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function ErrorIcon(_a) {
    var size = _a.size;
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: size, height: size },
        react_1.default.createElement("path", { d: "M8 6.303l-.951-.952A1.2 1.2 0 005.35 7.05l.953.95-.952.951A1.2 1.2 0 107.05 10.65L8 9.697l.951.952A1.2 1.2 0 1010.65 8.95L9.697 8l.952-.951A1.2 1.2 0 108.95 5.35L8 6.303zM16 8A8 8 0 110 8a8 8 0 0116 0z", fill: "#E01F19" })));
}
exports.ErrorIcon = ErrorIcon;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckCircleIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function CheckCircleIcon(_a) {
    var size = _a.size;
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", width: size, height: size },
        react_1.default.createElement("path", { d: "M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z", fill: "#76CA66" }),
        react_1.default.createElement("path", { d: "M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z", fill: "white" })));
}
exports.CheckCircleIcon = CheckCircleIcon;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var header_css_1 = __importDefault(__webpack_require__(63));
var Logo_1 = __webpack_require__(64);
var NavBlock_1 = __webpack_require__(67);
function Header(_a) {
    var navigation = _a.navigation;
    return (react_1.default.createElement("header", { className: header_css_1.default.header },
        react_1.default.createElement("div", { className: header_css_1.default.container },
            react_1.default.createElement(Logo_1.Logo, null),
            navigation && (react_1.default.createElement(NavBlock_1.NavBlock, null)))));
}
exports.Header = Header;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--sBbZe",
	"container": "header__container--1FFRn"
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(65), exports);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var logo_css_1 = __importDefault(__webpack_require__(66));
function Logo() {
    return (react_1.default.createElement("a", { className: logo_css_1.default.link, href: '/' },
        react_1.default.createElement("svg", { width: "106", height: "34", viewBox: "0 0 106 34", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M28.048 24.984C27.152 27.672 25.584 29.768 23.344 31.272C21.104 32.744 18.448 33.48 15.376 33.48C12.464 33.48 9.936 32.824 7.792 31.512C5.648 30.168 3.968 28.28 2.752 25.848C1.568 23.416 0.976 20.52 0.976 17.16C0.976 13.8 1.568 10.904 2.752 8.472C3.968 6.04 5.648 4.168 7.792 2.856C9.936 1.512 12.448 0.839999 15.328 0.839999C21.696 0.839999 25.792 3.448 27.616 8.664L25.264 9.768C24.528 7.56 23.36 5.896 21.76 4.776C20.16 3.624 18.064 3.048 15.472 3.048C13.104 3.048 11.008 3.624 9.184 4.776C7.392 5.896 6 7.512 5.008 9.624C4.016 11.736 3.52 14.248 3.52 17.16C3.52 20.072 4 22.584 4.96 24.696C5.952 26.808 7.328 28.44 9.088 29.592C10.88 30.712 12.976 31.272 15.376 31.272C17.936 31.272 20.112 30.664 21.904 29.448C23.696 28.2 24.944 26.408 25.648 24.072L28.048 24.984ZM43.939 8.52C46.179 8.52 48.147 9.016 49.843 10.008C51.571 11 52.915 12.44 53.875 14.328C54.867 16.184 55.363 18.408 55.363 21C55.363 23.592 54.867 25.832 53.875 27.72C52.915 29.576 51.571 31 49.843 31.992C48.147 32.984 46.179 33.48 43.939 33.48C41.699 33.48 39.715 32.984 37.987 31.992C36.291 31 34.947 29.576 33.955 27.72C32.995 25.832 32.515 23.592 32.515 21C32.515 18.408 32.995 16.184 33.955 14.328C34.947 12.44 36.291 11 37.987 10.008C39.715 9.016 41.699 8.52 43.939 8.52ZM43.939 10.584C41.219 10.584 39.027 11.512 37.363 13.368C35.731 15.224 34.915 17.768 34.915 21C34.915 24.232 35.731 26.776 37.363 28.632C39.027 30.488 41.219 31.416 43.939 31.416C46.659 31.416 48.835 30.488 50.467 28.632C52.131 26.776 52.963 24.232 52.963 21C52.963 17.768 52.131 15.224 50.467 13.368C48.835 11.512 46.659 10.584 43.939 10.584ZM63.4251 4.344C62.8171 4.344 62.3211 4.168 61.9371 3.816C61.5851 3.432 61.4091 2.936 61.4091 2.328C61.4091 1.72 61.5851 1.24 61.9371 0.887999C62.3211 0.503998 62.8171 0.311997 63.4251 0.311997C64.0331 0.311997 64.5131 0.503998 64.8651 0.887999C65.2491 1.24 65.4411 1.72 65.4411 2.328C65.4411 2.936 65.2491 3.432 64.8651 3.816C64.5131 4.168 64.0331 4.344 63.4251 4.344ZM64.6251 9V33H62.2251V9H64.6251ZM73.1939 33V9H75.3539L75.4979 13.8C76.2339 12.104 77.4019 10.808 79.0019 9.912C80.6019 8.984 82.4099 8.52 84.4259 8.52C87.0819 8.52 89.2739 9.272 91.0019 10.776C92.7299 12.28 93.5939 14.504 93.5939 17.448V33H91.1939V18.216C91.1939 15.592 90.5379 13.672 89.2259 12.456C87.9139 11.24 86.2339 10.632 84.1859 10.632C82.6819 10.632 81.2739 10.984 79.9619 11.688C78.6499 12.36 77.5939 13.352 76.7939 14.664C75.9939 15.976 75.5939 17.576 75.5939 19.464V33H73.1939ZM102.889 29.064C103.529 29.064 104.041 29.272 104.425 29.688C104.841 30.072 105.049 30.584 105.049 31.224C105.049 31.864 104.841 32.392 104.425 32.808C104.041 33.192 103.529 33.384 102.889 33.384C102.249 33.384 101.721 33.192 101.305 32.808C100.921 32.392 100.729 31.864 100.729 31.224C100.729 30.584 100.921 30.072 101.305 29.688C101.721 29.272 102.249 29.064 102.889 29.064Z", fill: "white" }))));
}
exports.Logo = Logo;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"link": "logo__link--2faN1"
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(68), exports);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var navblock_css_1 = __importDefault(__webpack_require__(69));
function NavBlock() {
    return (react_1.default.createElement("ul", { className: navblock_css_1.default.list },
        react_1.default.createElement("li", { className: navblock_css_1.default.item },
            react_1.default.createElement("a", { className: navblock_css_1.default.link, href: "/banks" }, "\u0411\u0430\u043D\u043A\u043E\u043C\u0430\u0442\u044B")),
        react_1.default.createElement("li", { className: navblock_css_1.default.item },
            react_1.default.createElement("a", { className: navblock_css_1.default.link, href: "/accounts" }, "\u0421\u0447\u0435\u0442\u0430")),
        react_1.default.createElement("li", { className: navblock_css_1.default.item },
            react_1.default.createElement("a", { className: navblock_css_1.default.link, href: "/currency" }, "\u0412\u0430\u043B\u044E\u0442\u0430")),
        react_1.default.createElement("li", { className: navblock_css_1.default.item },
            react_1.default.createElement("a", { className: navblock_css_1.default.link, href: "/logout" }, "\u0412\u044B\u0439\u0442\u0438"))));
}
exports.NavBlock = NavBlock;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "navblock__list--3WvDk",
	"item": "navblock__item--2Tnn2",
	"link": "navblock__link--145Qc"
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(71), exports);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupForm = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var signupform_css_1 = __importDefault(__webpack_require__(72));
function SignupForm() {
    return (react_1.default.createElement("div", { className: signupform_css_1.default.container },
        react_1.default.createElement("h2", { className: signupform_css_1.default.title }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"),
        react_1.default.createElement("form", { className: signupform_css_1.default.form, method: "post", action: "/signup", encType: "application/x-www-form-urlencoded" },
            react_1.default.createElement("label", { className: signupform_css_1.default.label },
                react_1.default.createElement("span", { className: signupform_css_1.default.desc }, "\u041B\u043E\u0433\u0438\u043D"),
                react_1.default.createElement("input", { className: signupform_css_1.default.input, type: "text", name: "username", placeholder: "Placeholder" })),
            react_1.default.createElement("label", { className: signupform_css_1.default.label },
                react_1.default.createElement("span", { className: signupform_css_1.default.desc }, "\u041F\u0430\u0440\u043E\u043B\u044C"),
                react_1.default.createElement("input", { className: signupform_css_1.default.input, type: "password", name: "password", placeholder: "Placeholder" })),
            react_1.default.createElement("button", { className: signupform_css_1.default.button }, "\u0417\u0430\u0440\u0430\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))));
}
exports.SignupForm = SignupForm;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "signupform__container--2sini",
	"title": "signupform__title--30_lL",
	"label": "signupform__label--2lAQ7",
	"desc": "signupform__desc--29udc",
	"input": "signupform__input--1E4sP",
	"button": "signupform__button--2ppM7"
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(74), exports);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var signupbutton_css_1 = __importDefault(__webpack_require__(75));
var Button_1 = __webpack_require__(6);
function SignupButton() {
    return (react_1.default.createElement("div", { className: signupbutton_css_1.default.container },
        react_1.default.createElement(Button_1.Button, { link: '/', text: 'Вернуться назад' })));
}
exports.SignupButton = SignupButton;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "signupbutton__container--122KT"
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var button_css_1 = __importDefault(__webpack_require__(77));
function Button(_a) {
    var link = _a.link, text = _a.text;
    return (react_1.default.createElement("a", { className: button_css_1.default.link, href: link },
        react_1.default.createElement("svg", { className: button_css_1.default.icon, width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M7.83 11L11.41 7.41L10 6L4 12L10 18L11.41 16.59L7.83 13H20V11H7.83Z", fill: "white" })),
        react_1.default.createElement("span", { className: button_css_1.default.desc }, text)));
}
exports.Button = Button;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"link": "button__link--2TKcd",
	"desc": "button__desc--21eS0",
	"icon": "button__icon--2Mf6F"
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(79), exports);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var login_css_1 = __importDefault(__webpack_require__(80));
var Notification_1 = __webpack_require__(9);
var Header_1 = __webpack_require__(10);
var LoginForm_1 = __webpack_require__(81);
function Login(_a) {
    var user = _a.user;
    return (react_1.default.createElement("div", { className: login_css_1.default.content },
        react_1.default.createElement(Header_1.Header, { navigation: false }),
        react_1.default.createElement("div", { className: login_css_1.default.container },
            user.loginError && react_1.default.createElement(Notification_1.Notification, { type: 'error', text: user.loginError }),
            react_1.default.createElement(LoginForm_1.LoginForm, null))));
}
exports.Login = Login;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "login__content--3ag0L",
	"container": "login__container--Qn_Zv"
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(82), exports);


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginForm = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var loginform_css_1 = __importDefault(__webpack_require__(83));
function LoginForm() {
    return (react_1.default.createElement("div", { className: loginform_css_1.default.container },
        react_1.default.createElement("div", { className: loginform_css_1.default.formContainer },
            react_1.default.createElement("h2", { className: loginform_css_1.default.title }, "\u0412\u0445\u043E\u0434 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442"),
            react_1.default.createElement("form", { className: loginform_css_1.default.form, method: "post", action: "/login", encType: "application/x-www-form-urlencoded" },
                react_1.default.createElement("label", { className: loginform_css_1.default.label },
                    react_1.default.createElement("span", { className: loginform_css_1.default.desc }, "\u041B\u043E\u0433\u0438\u043D"),
                    react_1.default.createElement("input", { className: loginform_css_1.default.input, type: "text", name: "username", placeholder: "Placeholder" })),
                react_1.default.createElement("label", { className: loginform_css_1.default.label },
                    react_1.default.createElement("span", { className: loginform_css_1.default.desc }, "\u041F\u0430\u0440\u043E\u043B\u044C"),
                    react_1.default.createElement("input", { className: loginform_css_1.default.input, type: "password", name: "password", placeholder: "Placeholder" })),
                react_1.default.createElement("button", { className: loginform_css_1.default.button }, "\u0412\u043E\u0439\u0442\u0438"))),
        react_1.default.createElement("a", { className: loginform_css_1.default.link, href: '/signup' }, "\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")));
}
exports.LoginForm = LoginForm;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "loginform__container--27dky",
	"formContainer": "loginform__formContainer--2kCJj",
	"title": "loginform__title--iiLBz",
	"label": "loginform__label--1eaHp",
	"desc": "loginform__desc--1OiKh",
	"input": "loginform__input--1dzjo",
	"button": "loginform__button--2HTi9",
	"link": "loginform__link--3kgJo"
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(85), exports);


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var content_css_1 = __importDefault(__webpack_require__(86));
var Notification_1 = __webpack_require__(9);
function Content(_a) {
    var user = _a.user, children = _a.children;
    return (react_1.default.createElement("main", { className: content_css_1.default.content },
        user.transferError && (react_1.default.createElement(Notification_1.Notification, { type: 'error', text: user.transferError })),
        user.currencyError && (react_1.default.createElement(Notification_1.Notification, { type: 'error', text: user.currencyError })),
        children));
}
exports.Content = Content;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--2vB05"
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(88), exports);


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var layout_css_1 = __importDefault(__webpack_require__(89));
function Layout(_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { className: layout_css_1.default.layout }, children));
}
exports.Layout = Layout;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout__layout--EHoUo"
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(91), exports);


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accounts = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accounts_css_1 = __importDefault(__webpack_require__(92));
var AccountsMenu_1 = __webpack_require__(93);
var AccountsListContainer_1 = __webpack_require__(110);
function Accounts() {
    return (react_1.default.createElement("div", { className: accounts_css_1.default.container },
        react_1.default.createElement(AccountsMenu_1.AccountsMenu, null),
        react_1.default.createElement(AccountsListContainer_1.AccountsListContainer, null)));
}
exports.Accounts = Accounts;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(94), exports);


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsMenu = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountsmenu_css_1 = __importDefault(__webpack_require__(95));
var Title_1 = __webpack_require__(4);
var AccountsDropdown_1 = __webpack_require__(98);
var AccountsButton_1 = __webpack_require__(107);
var useAccountsData_1 = __webpack_require__(18);
function AccountsMenu() {
    var accounts = (0, useAccountsData_1.useAccountsData)();
    return (react_1.default.createElement("div", { className: accountsmenu_css_1.default.menu },
        react_1.default.createElement(Title_1.Title, { title: 'Ваши счета' }),
        accounts.length !== 0 && (react_1.default.createElement(AccountsDropdown_1.AccountsDropdown, null)),
        react_1.default.createElement(AccountsButton_1.AccountsButton, null)));
}
exports.AccountsMenu = AccountsMenu;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "accountsmenu__menu--3qci1"
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var title_css_1 = __importDefault(__webpack_require__(97));
function Title(_a) {
    var title = _a.title;
    return (react_1.default.createElement("h2", { className: title_css_1.default.title }, title));
}
exports.Title = Title;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "title__title--gkV6t"
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(99), exports);


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsDropdown = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountsdropdown_css_1 = __importDefault(__webpack_require__(100));
var react_redux_1 = __webpack_require__(2);
var sortingDropdownSwitcherActions_1 = __webpack_require__(11);
var sortingItemSwitcherActions_1 = __webpack_require__(12);
var sortingTypeActions_1 = __webpack_require__(13);
var Dropdown_1 = __webpack_require__(14);
var ArrowUpIcon_1 = __webpack_require__(15);
var ArrowDownIcon_1 = __webpack_require__(16);
var DropdownListContainer_1 = __webpack_require__(17);
var AccountsList_1 = __webpack_require__(104);
function AccountsDropdown() {
    var dropdownSwitcher = (0, react_redux_1.useSelector)(function (state) { return state.sortingDropdownSwitcher.sortingDropdownSwitcher; });
    var itemSwitcher = (0, react_redux_1.useSelector)(function (state) { return state.sortingItemSwitcher.sortingItemSwitcher; });
    var type = (0, react_redux_1.useSelector)(function (state) { return state.sortingType.sortingType; });
    return (react_1.default.createElement("div", { className: accountsdropdown_css_1.default.container },
        react_1.default.createElement(Dropdown_1.Dropdown, { dropdownSwitcher: dropdownSwitcher, setDropdownSwitcher: sortingDropdownSwitcherActions_1.setSortingDropdownSwitcher, button: react_1.default.createElement("button", { className: accountsdropdown_css_1.default.button },
                type !== ''
                    ? (react_1.default.createElement("span", { className: accountsdropdown_css_1.default.buttonDesc }, type))
                    : (react_1.default.createElement("span", { className: accountsdropdown_css_1.default.buttonDesc }, "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430")),
                dropdownSwitcher
                    ? (react_1.default.createElement("span", { className: accountsdropdown_css_1.default.icon },
                        react_1.default.createElement(ArrowUpIcon_1.ArrowUpIcon, { size: 24 })))
                    : (react_1.default.createElement("span", { className: accountsdropdown_css_1.default.icon },
                        react_1.default.createElement(ArrowDownIcon_1.ArrowDownIcon, { size: 24 })))) },
            react_1.default.createElement(DropdownListContainer_1.DropdownListContainer, { targetElementClass: 'sortItem', itemSwitcher: itemSwitcher, type: type, setItemSwitcher: sortingItemSwitcherActions_1.setSortingItemSwitcher, setType: sortingTypeActions_1.setSortingType, renderList: function () { return (react_1.default.createElement(AccountsList_1.AccountsList, { itemSwitcher: itemSwitcher, type: type })); } }))));
}
exports.AccountsDropdown = AccountsDropdown;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "accountsdropdown__container--3X0mg",
	"button": "accountsdropdown__button--VdadC",
	"buttonDesc": "accountsdropdown__buttonDesc--18B-i",
	"icon": "accountsdropdown__icon--3xmey"
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var dropdown_css_1 = __importDefault(__webpack_require__(102));
var react_redux_1 = __webpack_require__(2);
function Dropdown(_a) {
    var button = _a.button, children = _a.children, dropdownSwitcher = _a.dropdownSwitcher, setDropdownSwitcher = _a.setDropdownSwitcher;
    var dispatch = (0, react_redux_1.useDispatch)();
    return (react_1.default.createElement("div", { className: dropdown_css_1.default.container },
        react_1.default.createElement("div", { onClick: function () { return dispatch(setDropdownSwitcher(!dropdownSwitcher)); } }, button),
        dropdownSwitcher && (react_1.default.createElement("div", { className: dropdown_css_1.default.listContainer },
            react_1.default.createElement("div", { className: dropdown_css_1.default.list, onClick: function () { return dispatch(setDropdownSwitcher(false)); } }, children)))));
}
exports.Dropdown = Dropdown;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "dropdown__container--a87Ei",
	"listContainer": "dropdown__listContainer--2G6Ta",
	"list": "dropdown__list--3xt6X"
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownListContainer = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_redux_1 = __webpack_require__(2);
function DropdownListContainer(props) {
    var dropdownList = props.renderList();
    var dispatch = (0, react_redux_1.useDispatch)();
    var handleClick = function (event) {
        var targetElement = event.target;
        var targetElementText = targetElement.textContent;
        if (props.itemSwitcher && props.type !== targetElementText) {
            return [
                dispatch(props.setItemSwitcher(props.itemSwitcher)),
                dispatch(props.setType(targetElementText))
            ];
        }
        if (props.itemSwitcher && props.type === targetElementText) {
            return [
                dispatch(props.setItemSwitcher(!props.itemSwitcher)),
                dispatch(props.setType(''))
            ];
        }
        dispatch(props.setItemSwitcher(!props.itemSwitcher));
        dispatch(props.setType(targetElementText));
    };
    (0, react_1.useEffect)(function () {
        var items = document.querySelectorAll(".".concat(props.targetElementClass));
        items.forEach(function (item) {
            return item.addEventListener('click', handleClick);
        });
        return function () {
            items.forEach(function (item) {
                return item.removeEventListener('click', handleClick);
            });
        };
    }, []);
    return (react_1.default.createElement("div", null, dropdownList));
}
exports.DropdownListContainer = DropdownListContainer;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(105), exports);


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var acccountslist_css_1 = __importDefault(__webpack_require__(106));
var CheckIcon_1 = __webpack_require__(39);
function AccountsList(_a) {
    var itemSwitcher = _a.itemSwitcher, type = _a.type;
    var sortingTypes = ['По номеру', 'По балансу', 'По последней транзакции'];
    return (react_1.default.createElement("ul", { className: acccountslist_css_1.default.list }, sortingTypes.map(function (sortingType) { return (react_1.default.createElement("li", { className: "sortItem ".concat(acccountslist_css_1.default.item), key: sortingType },
        react_1.default.createElement("a", { className: acccountslist_css_1.default.link },
            react_1.default.createElement("span", { className: acccountslist_css_1.default.desc }, sortingType),
            itemSwitcher && type === sortingType && (react_1.default.createElement("span", { className: acccountslist_css_1.default.icon },
                react_1.default.createElement(CheckIcon_1.CheckIcon, { size: 24 })))))); })));
}
exports.AccountsList = AccountsList;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "acccountslist__list--1IvV8",
	"link": "acccountslist__link--2Ej-l",
	"desc": "acccountslist__desc--3Gvue",
	"icon": "acccountslist__icon--1rjjy"
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(108), exports);


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountsbutton_css_1 = __importDefault(__webpack_require__(109));
function AccountsButton() {
    return (react_1.default.createElement("form", { className: accountsbutton_css_1.default.form, method: "post", action: "/create-account", encType: "application/x-www-form-urlencoded" },
        react_1.default.createElement("button", { className: accountsbutton_css_1.default.button },
            react_1.default.createElement("svg", { className: accountsbutton_css_1.default.icon, width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M12 4.00001L12 12M12 12L12 20M12 12L20 12M12 12L4 12", stroke: "white", strokeWidth: "2" })),
            react_1.default.createElement("span", { className: accountsbutton_css_1.default.desc }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0441\u0447\u0451\u0442"))));
}
exports.AccountsButton = AccountsButton;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "accountsbutton__form--1ghrQ",
	"button": "accountsbutton__button--3HRpe",
	"desc": "accountsbutton__desc--3KGS8",
	"icon": "accountsbutton__icon--1lsb4"
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(111), exports);


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsListContainer = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_redux_1 = __webpack_require__(2);
var sortAccountsByAccount_1 = __webpack_require__(112);
var sortAccountsByBalance_1 = __webpack_require__(113);
var sortAccountsByTransaction_1 = __webpack_require__(114);
var mergeAccountAndLastTransaction_1 = __webpack_require__(7);
var AccountsList_1 = __webpack_require__(115);
function AccountsListContainer() {
    var sortingType = (0, react_redux_1.useSelector)(function (state) { return state.sortingType.sortingType; });
    var accounts;
    if (sortingType === 'По номеру') {
        accounts = (0, sortAccountsByAccount_1.sortAccountsByAccount)();
    }
    if (sortingType === 'По балансу') {
        accounts = (0, sortAccountsByBalance_1.sortAccountsByBalance)();
    }
    if (sortingType === 'По последней транзакции') {
        accounts = (0, sortAccountsByTransaction_1.sortAccountsByTransaction)();
    }
    if (sortingType === '') {
        accounts = (0, mergeAccountAndLastTransaction_1.mergeAccountsAndLastTransactions)();
    }
    return (react_1.default.createElement(AccountsList_1.AccountsList, { accounts: accounts }));
}
exports.AccountsListContainer = AccountsListContainer;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sortAccountsByAccount = void 0;
var mergeAccountAndLastTransaction_1 = __webpack_require__(7);
var sortAccountsByAccount = function () {
    var accountsWithLastTransactions = (0, mergeAccountAndLastTransaction_1.mergeAccountsAndLastTransactions)();
    accountsWithLastTransactions.sort(function (accountOne, accountTwo) {
        return accountOne.number - accountTwo.number;
    });
    return accountsWithLastTransactions;
};
exports.sortAccountsByAccount = sortAccountsByAccount;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sortAccountsByBalance = void 0;
var mergeAccountAndLastTransaction_1 = __webpack_require__(7);
var sortAccountsByBalance = function () {
    var accountsWithLastTransactions = (0, mergeAccountAndLastTransaction_1.mergeAccountsAndLastTransactions)();
    accountsWithLastTransactions.sort(function (accountOne, accountTwo) {
        return accountOne.balance - accountTwo.balance;
    });
    return accountsWithLastTransactions;
};
exports.sortAccountsByBalance = sortAccountsByBalance;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sortAccountsByTransaction = void 0;
var mergeAccountAndLastTransaction_1 = __webpack_require__(7);
var sortAccountsByTransaction = function () {
    var accountsWithLastTransactions = (0, mergeAccountAndLastTransaction_1.mergeAccountsAndLastTransactions)();
    accountsWithLastTransactions.sort(function (accountOne, accountTwo) {
        if (accountOne.transaction !== undefined && accountTwo.transaction !== undefined) {
            return accountOne.transaction.date - accountTwo.transaction.date;
        }
    });
    return accountsWithLastTransactions;
};
exports.sortAccountsByTransaction = sortAccountsByTransaction;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(116), exports);


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountslist_css_1 = __importDefault(__webpack_require__(117));
var Account_1 = __webpack_require__(118);
function AccountsList(_a) {
    var accounts = _a.accounts;
    return (react_1.default.createElement("ul", { className: accountslist_css_1.default.list }, accounts.map(function (account) { return (react_1.default.createElement(Account_1.Account, { number: account.number, balance: account.balance, transaction: account.transaction, key: account.id })); })));
}
exports.AccountsList = AccountsList;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "accountslist__list--1hmw6"
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(119), exports);


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var account_css_1 = __importDefault(__webpack_require__(120));
var TextContent_1 = __webpack_require__(121);
var Transaction_1 = __webpack_require__(124);
function Account(_a) {
    var number = _a.number, balance = _a.balance, transaction = _a.transaction;
    return (react_1.default.createElement("li", { className: account_css_1.default.account },
        react_1.default.createElement(TextContent_1.TextContent, { number: number, balance: balance }),
        react_1.default.createElement(Transaction_1.Transaction, { number: number, transaction: transaction })));
}
exports.Account = Account;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"account": "account__account--3Y3Cp"
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(122), exports);


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var textcontent_css_1 = __importDefault(__webpack_require__(123));
var RubleIcon_1 = __webpack_require__(21);
function TextContent(_a) {
    var number = _a.number, balance = _a.balance;
    return (react_1.default.createElement("div", { className: textcontent_css_1.default.container },
        react_1.default.createElement("h3", { className: textcontent_css_1.default.title }, number),
        react_1.default.createElement("p", { className: textcontent_css_1.default.balance },
            balance ? (react_1.default.createElement("span", null, balance)) : (react_1.default.createElement("span", null, "0")),
            react_1.default.createElement(RubleIcon_1.RubleIcon, { size: 12 }))));
}
exports.TextContent = TextContent;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "textcontent__container--3W4xl",
	"title": "textcontent__title--3Vu_o",
	"balance": "textcontent__balance--2qIcE"
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(125), exports);


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var transaction_css_1 = __importDefault(__webpack_require__(126));
var convertMillisecondsToDate_1 = __webpack_require__(127);
function Transaction(_a) {
    var number = _a.number, transaction = _a.transaction;
    return (react_1.default.createElement("div", { className: transaction_css_1.default.container },
        transaction && (react_1.default.createElement("div", { className: transaction_css_1.default.details },
            react_1.default.createElement("span", { className: transaction_css_1.default.transaction }, "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044F:"),
            react_1.default.createElement("span", { className: transaction_css_1.default.date }, (0, convertMillisecondsToDate_1.convertMillisecondsToDate)(transaction.date)))),
        react_1.default.createElement("a", { className: transaction_css_1.default.link, href: "/accounts/".concat(number) },
            react_1.default.createElement("span", { className: transaction_css_1.default.desc }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C"))));
}
exports.Transaction = Transaction;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "transaction__container--2hrX_",
	"details": "transaction__details--f6DMw",
	"transaction": "transaction__transaction--3hctP",
	"date": "transaction__date--2yM2P",
	"link": "transaction__link--oiJSW",
	"desc": "transaction__desc--3D0wK"
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMillisecondsToDate = void 0;
var convertMillisecondsToDate = function (milliseconds) {
    var convertedDate = (new Date(milliseconds)).toLocaleDateString();
    var day = convertedDate.split('.')[0];
    var month = convertedDate.split('.')[1];
    var year = convertedDate.split('.')[2];
    switch (month) {
        case '01':
            return "".concat(day, " \u044F\u043D\u0432\u0430\u0440\u044F ").concat(year);
        case '02':
            return "".concat(day, " \u0444\u0435\u0432\u0440\u0430\u043B\u044F ").concat(year);
        case '03':
            return "".concat(day, " \u043C\u0430\u0440\u0442\u0430 ").concat(year);
        case '04':
            return "".concat(day, " \u0430\u043F\u0440\u0435\u043B\u044F ").concat(year);
        case '05':
            return "".concat(day, " \u043C\u0430\u044F ").concat(year);
        case '06':
            return "".concat(day, " \u0438\u044E\u043D\u044F ").concat(year);
        case '07':
            return "".concat(day, " \u0438\u044E\u043B\u044F ").concat(year);
        case '08':
            return "".concat(day, " \u0430\u0432\u0433\u0443\u0441\u0442\u0430 ").concat(year);
        case '09':
            return "".concat(day, " \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F ").concat(year);
        case '10':
            return "".concat(day, " \u043E\u043A\u0442\u044F\u0431\u0440\u044F ").concat(year);
        case '11':
            return "".concat(day, " \u043D\u043E\u044F\u0431\u0440\u044F ").concat(year);
        case '12':
            return "".concat(day, " \u0434\u0435\u043A\u0430\u0431\u0440\u044F ").concat(year);
        default:
            return month;
    }
};
exports.convertMillisecondsToDate = convertMillisecondsToDate;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(129), exports);


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountView = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountview_css_1 = __importDefault(__webpack_require__(130));
var AccountMenu_1 = __webpack_require__(131);
var AccountContent_1 = __webpack_require__(146);
var react_router_dom_1 = __webpack_require__(26);
var filterAccountsByAccount_1 = __webpack_require__(44);
function AccountView() {
    var number = (0, react_router_dom_1.useParams)().number;
    var account = (0, filterAccountsByAccount_1.filterAccountsByAccount)(Number(number));
    return (react_1.default.createElement("div", null, account !== undefined && (react_1.default.createElement("div", { className: accountview_css_1.default.container },
        react_1.default.createElement(AccountMenu_1.AccountMenu, { account: account.number, balance: account.balance }),
        react_1.default.createElement(AccountContent_1.AccountContent, { number: Number(number) })))));
}
exports.AccountView = AccountView;


/***/ }),
/* 130 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(132), exports);


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountMenu = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountmenu_css_1 = __importDefault(__webpack_require__(133));
var AccountTextContent_1 = __webpack_require__(134);
var AccountDetails_1 = __webpack_require__(137);
function AccountMenu(_a) {
    var account = _a.account, balance = _a.balance;
    return (react_1.default.createElement("div", { className: accountmenu_css_1.default.menu },
        react_1.default.createElement(AccountTextContent_1.AccountTextContent, null),
        react_1.default.createElement(AccountDetails_1.AccountDetails, { account: account, balance: balance })));
}
exports.AccountMenu = AccountMenu;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "accountmenu__menu--3OQbT"
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(135), exports);


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountTextContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accounttextcontent_css_1 = __importDefault(__webpack_require__(136));
var Title_1 = __webpack_require__(4);
var Button_1 = __webpack_require__(6);
function AccountTextContent() {
    return (react_1.default.createElement("div", { className: accounttextcontent_css_1.default.container },
        react_1.default.createElement(Title_1.Title, { title: 'Просмотр счёта' }),
        react_1.default.createElement(Button_1.Button, { link: '/', text: 'Вернуться назад' })));
}
exports.AccountTextContent = AccountTextContent;


/***/ }),
/* 136 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "accounttextcontent__container--2Cv1M"
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(138), exports);


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountDetails = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountdetails_css_1 = __importDefault(__webpack_require__(139));
var AccountBalance_1 = __webpack_require__(140);
var AccountNumber_1 = __webpack_require__(143);
function AccountDetails(_a) {
    var account = _a.account, balance = _a.balance;
    return (react_1.default.createElement("div", { className: accountdetails_css_1.default.container },
        react_1.default.createElement(AccountNumber_1.AccountNumber, { account: account }),
        react_1.default.createElement(AccountBalance_1.AccountBalance, { balance: balance })));
}
exports.AccountDetails = AccountDetails;


/***/ }),
/* 139 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "accountdetails__container--1iPXg"
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(141), exports);


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountBalance = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountbalance_css_1 = __importDefault(__webpack_require__(142));
var RubleIcon_1 = __webpack_require__(21);
function AccountBalance(_a) {
    var balance = _a.balance;
    return (react_1.default.createElement("p", { className: accountbalance_css_1.default.balance },
        "\u0411\u0430\u043B\u0430\u043D\u0441",
        react_1.default.createElement("span", { className: accountbalance_css_1.default.number },
            balance,
            react_1.default.createElement(RubleIcon_1.RubleIcon, { size: 18 }))));
}
exports.AccountBalance = AccountBalance;


/***/ }),
/* 142 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"balance": "accountbalance__balance--1av00",
	"number": "accountbalance__number--3h_Rs"
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(144), exports);


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountNumber = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountnumber_css_1 = __importDefault(__webpack_require__(145));
function AccountNumber(_a) {
    var account = _a.account;
    return (react_1.default.createElement("h2", { className: accountnumber_css_1.default.title },
        "\u2116 ",
        account));
}
exports.AccountNumber = AccountNumber;


/***/ }),
/* 145 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "accountnumber__title--1rZbM"
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(147), exports);


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountcontent_css_1 = __importDefault(__webpack_require__(148));
var limitTransactionsAmount_1 = __webpack_require__(41);
var AccountTransfer_1 = __webpack_require__(149);
var AccountBalance_1 = __webpack_require__(159);
var AccountHistory_1 = __webpack_require__(174);
function AccountContent(_a) {
    var number = _a.number;
    var limitedTransactions = (0, limitTransactionsAmount_1.limitTransactionsAmount)(10, 0, number);
    return (react_1.default.createElement("div", { className: accountcontent_css_1.default.container },
        react_1.default.createElement(AccountTransfer_1.AccountTransfer, { number: number }),
        react_1.default.createElement(AccountBalance_1.AccountBalance, { number: number }),
        limitedTransactions.length !== 0 && (react_1.default.createElement(AccountHistory_1.AccountHistory, { transactions: limitedTransactions, number: number }))));
}
exports.AccountContent = AccountContent;


/***/ }),
/* 148 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "accountcontent__container--2TulR"
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(150), exports);


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountTransfer = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accounttransfer_css_1 = __importDefault(__webpack_require__(151));
var Description_1 = __webpack_require__(3);
var AccountFormContainer_1 = __webpack_require__(154);
function AccountTransfer(_a) {
    var number = _a.number;
    return (react_1.default.createElement("div", { className: accounttransfer_css_1.default.container },
        react_1.default.createElement(Description_1.Description, { text: 'Новый перевод' }),
        react_1.default.createElement(AccountFormContainer_1.AccountFormContainer, { number: number })));
}
exports.AccountTransfer = AccountTransfer;


/***/ }),
/* 151 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "accounttransfer__container--1V2K1"
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Description = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var description_css_1 = __importDefault(__webpack_require__(153));
function Description(_a) {
    var text = _a.text;
    return (react_1.default.createElement("p", { className: description_css_1.default.desc }, text));
}
exports.Description = Description;


/***/ }),
/* 153 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"desc": "description__desc--H-ZSJ"
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(155), exports);


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountFormContainer = void 0;
var react_1 = __importStar(__webpack_require__(0));
var AccountForm_1 = __webpack_require__(156);
function AccountFormContainer(_a) {
    var number = _a.number;
    var numberInputRegExp = new RegExp(/^(\d{1,15})$/);
    var sumInputRegExp = new RegExp(/^\d*\.*\d*$/);
    var numberEnteredString = '';
    var sumEnteredString = '';
    var numberEnteredStringLength = 0;
    var sumEnteredStringLength = 0;
    var handleNumberInput = function (event) {
        var element = event.target;
        if (element.value.length > numberEnteredStringLength) {
            if (numberInputRegExp.test(element.value)) {
                numberEnteredString = element.value;
            }
            else {
                numberEnteredString += '';
            }
            element.value = numberEnteredString;
        }
        else {
            numberEnteredString = numberEnteredString.slice(0, -1);
        }
        numberEnteredStringLength = element.value.length;
    };
    var handleSumInput = function (event) {
        var formButton = document.querySelector('.formButton');
        var element = event.target;
        if (element.value.charAt(0) === '.') {
            element.value = element.value.slice(1, element.value.length);
            sumEnteredString = element.value;
        }
        if (element.value.match(/\./g) !== null) {
            var dotNumber = element.value.match(/\./g).length;
            var dotIndex = element.value.indexOf('.');
            if (dotNumber > 1) {
                var firstStringPart = element.value.slice(0, dotIndex);
                var secondStringPart = element.value.slice(dotIndex + 1, element.value.length);
                element.value = firstStringPart + secondStringPart;
                sumEnteredString = element.value;
            }
            var stringAfterDot = element.value.slice(element.value.indexOf('.') + 1, element.value.length);
            if (stringAfterDot.length > 2) {
                element.value = element.value.slice(0, element.value.indexOf('.') + 3);
                sumEnteredString = element.value;
            }
        }
        if (element.value.length > sumEnteredStringLength) {
            if (sumInputRegExp.test(element.value)) {
                sumEnteredString = element.value;
            }
            else {
                sumEnteredString += '';
            }
            element.value = sumEnteredString;
        }
        if (element.value.length < sumEnteredStringLength) {
            sumEnteredString = sumEnteredString.slice(0, -1);
        }
        if (element.value.charAt(element.value.length - 1) === '.') {
            formButton.setAttribute('disabled', '');
        }
        else {
            formButton.removeAttribute('disabled');
        }
        sumEnteredStringLength = element.value.length;
    };
    (0, react_1.useEffect)(function () {
        var numberInput = document.querySelector('.numberInput');
        var sumInput = document.querySelector('.sumInput');
        numberInput.addEventListener('input', handleNumberInput);
        sumInput.addEventListener('input', handleSumInput);
        return function () {
            numberInput.removeEventListener('input', handleNumberInput);
            sumInput.addEventListener('input', handleSumInput);
        };
    }, []);
    return (react_1.default.createElement(AccountForm_1.AccountForm, { number: number }));
}
exports.AccountFormContainer = AccountFormContainer;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(157), exports);


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountForm = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountform_css_1 = __importDefault(__webpack_require__(158));
function AccountForm(_a) {
    var number = _a.number;
    var NOOP = function () { };
    return (react_1.default.createElement("form", { className: accountform_css_1.default.form, method: "post", action: "/transfer-funds", encType: "application/x-www-form-urlencoded" },
        react_1.default.createElement("input", { style: { display: "none" }, type: "text", name: "from", value: number, onChange: NOOP }),
        react_1.default.createElement("label", { className: accountform_css_1.default.label },
            react_1.default.createElement("span", { className: accountform_css_1.default.desc }, "\u041D\u043E\u043C\u0435\u0440 \u0441\u0447\u0451\u0442\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F"),
            react_1.default.createElement("input", { className: "".concat(accountform_css_1.default.input, " numberInput"), type: "text", name: "to", maxLength: 15, placeholder: "Placeholder" })),
        react_1.default.createElement("label", { className: accountform_css_1.default.label },
            react_1.default.createElement("span", { className: accountform_css_1.default.desc }, "\u0421\u0443\u043C\u043C\u0430 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430"),
            react_1.default.createElement("input", { className: "".concat(accountform_css_1.default.input, " sumInput"), type: "text", name: "sum", placeholder: "Placeholder" })),
        react_1.default.createElement("button", { className: "".concat(accountform_css_1.default.button, " formButton") },
            react_1.default.createElement("svg", { className: accountform_css_1.default.icon, width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { fill: "white", d: "M20 20H4C2.89543 20 2 19.1046 2 18V5.913C2.04661 4.84255 2.92853 3.99899 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20ZM4 7.868V18H20V7.868L12 13.2L4 7.868ZM4.8 6L12 10.8L19.2 6H4.8Z" })),
            react_1.default.createElement("span", { className: accountform_css_1.default.buttonDesc }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"))));
}
exports.AccountForm = AccountForm;


/***/ }),
/* 158 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"label": "accountform__label--23eAo",
	"desc": "accountform__desc--2DH3d",
	"input": "accountform__input--3ghJt",
	"button": "accountform__button--21s5J",
	"buttonDesc": "accountform__buttonDesc--P3DM-",
	"icon": "accountform__icon--1CSAO"
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(160), exports);


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountBalance = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountbalance_css_1 = __importDefault(__webpack_require__(161));
var settingsForGraphics_1 = __webpack_require__(23);
var convertTwelveToSixMonths_1 = __webpack_require__(162);
var convertDataForBalanceGraphics_1 = __webpack_require__(42);
var Description_1 = __webpack_require__(3);
var AccountGraphics_1 = __webpack_require__(25);
function AccountBalance(_a) {
    var number = _a.number;
    var _b = (0, convertTwelveToSixMonths_1.convertTwelveToSixMonths)(), halfYearMonths = _b.halfYearMonths, halfYearMonthsNumber = _b.halfYearMonthsNumber;
    var data = (0, convertDataForBalanceGraphics_1.convertDataForBalanceGraphics)(number, halfYearMonths, halfYearMonthsNumber);
    return (react_1.default.createElement("a", { className: accountbalance_css_1.default.container, href: "/accounts/".concat(number, "/details") },
        react_1.default.createElement(Description_1.Description, { text: 'Динамика баланса' }),
        data.datasets[0].data.every(function (value) { return value === 0 || value === null; })
            ?
                react_1.default.createElement(AccountGraphics_1.AccountGraphics, { data: data, options: settingsForGraphics_1.noBalanceGraphicsOptions, plugins: [settingsForGraphics_1.chartAreaBorder, settingsForGraphics_1.smallGraphicsTicksStyles] })
            :
                react_1.default.createElement(AccountGraphics_1.AccountGraphics, { data: data, options: settingsForGraphics_1.balanceGraphicsOptions, plugins: [settingsForGraphics_1.chartAreaBorder, settingsForGraphics_1.smallGraphicsTicksStyles] })));
}
exports.AccountBalance = AccountBalance;


/***/ }),
/* 161 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "accountbalance__container--1V3dJ"
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTwelveToSixMonths = void 0;
var convertTwelveToSixMonths = function () {
    var months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
    var monthsNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var date = (new Date(Date.now())).toLocaleDateString();
    var month = date.split('.')[1];
    var monthsNumberIndex = monthsNumbers.findIndex(function (monthNumber) { return monthNumber === month; });
    var monthsBefore = monthsNumberIndex < 5 ? monthsNumberIndex : 5;
    var monthsAfter = monthsNumberIndex === 12 ? 0 : 1;
    var halfYearMonths = months.slice(monthsNumberIndex - monthsBefore, monthsNumberIndex + monthsAfter);
    var halfYearMonthsNumber = monthsNumbers.slice(monthsNumberIndex - monthsBefore, monthsNumberIndex + monthsAfter);
    return { halfYearMonths: halfYearMonths, halfYearMonthsNumber: halfYearMonthsNumber };
};
exports.convertTwelveToSixMonths = convertTwelveToSixMonths;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sortAccountsBalancesByMonth = void 0;
var useAccountsBalanceData_1 = __webpack_require__(164);
var filterAccountsBalanceByMonth_1 = __webpack_require__(165);
var sortMonthsBalancesByMonth_1 = __webpack_require__(166);
var filterMonthsBalanceByMonth_1 = __webpack_require__(167);
var retrieveOneMonthBalance_1 = __webpack_require__(168);
var fillBalancesByMonth_1 = __webpack_require__(169);
var sortAccountsBalancesByMonth = function (number, months, monthsNumbers) {
    var accountsBalances = (0, useAccountsBalanceData_1.useAccountsBalanceData)(number);
    var monthsBalances = (0, filterAccountsBalanceByMonth_1.filterAccountsBalanceByMonth)(months, monthsNumbers, accountsBalances);
    var sortedMonthsBalances = (0, sortMonthsBalancesByMonth_1.sortMonthsBalancesByMonth)(months, monthsBalances);
    var groupedMonthsBalances = (0, filterMonthsBalanceByMonth_1.filterMonthsBalanceByMonth)(months, sortedMonthsBalances);
    var groupedMonthsBalancesWithOneValue = (0, retrieveOneMonthBalance_1.retrieveOneMonthBalance)(months, groupedMonthsBalances);
    var balances = (0, fillBalancesByMonth_1.fillBalancesByMonth)(months, groupedMonthsBalancesWithOneValue);
    return balances;
};
exports.sortAccountsBalancesByMonth = sortAccountsBalancesByMonth;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useAccountsBalanceData = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(2);
var accountsBalanceActions_1 = __webpack_require__(24);
function useAccountsBalanceData(number) {
    var accountsBalance = (0, react_redux_1.useSelector)(function (state) { return state.accountsBalance.accountsBalance; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch((0, accountsBalanceActions_1.setAccountsBalanceAsync)(number)());
    }, []);
    return accountsBalance;
}
exports.useAccountsBalanceData = useAccountsBalanceData;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.filterAccountsBalanceByMonth = void 0;
var filterAccountsBalanceByMonth = function (months, monthsNumbers, accountsBalances) {
    var monthsBalances = [];
    for (var _i = 0, accountsBalances_1 = accountsBalances; _i < accountsBalances_1.length; _i++) {
        var accountBalance = accountsBalances_1[_i];
        var date = (new Date(accountBalance.date)).toLocaleDateString();
        var month = date.split('.')[1];
        for (var i = 0; i < months.length; i++) {
            if (month === monthsNumbers[i]) {
                monthsBalances.push({
                    time: accountBalance.date,
                    month: months[i],
                    balance: accountBalance.balance
                });
            }
        }
    }
    return monthsBalances;
};
exports.filterAccountsBalanceByMonth = filterAccountsBalanceByMonth;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sortMonthsBalancesByMonth = void 0;
var sortMonthsBalancesByMonth = function (months, monthsBalances) {
    var _loop_1 = function (month) {
        monthsBalances.sort(function (monthBalanceOne, monthBalanceTwo) {
            if (monthBalanceOne.month === month && monthBalanceTwo.month === month) {
                return monthBalanceTwo.time - monthBalanceOne.time;
            }
        });
    };
    for (var _i = 0, months_1 = months; _i < months_1.length; _i++) {
        var month = months_1[_i];
        _loop_1(month);
    }
    return monthsBalances;
};
exports.sortMonthsBalancesByMonth = sortMonthsBalancesByMonth;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.filterMonthsBalanceByMonth = void 0;
var filterMonthsBalanceByMonth = function (months, sortedMonthsBalances) {
    var monthsBalancesArray = [];
    var _loop_1 = function (month) {
        var arrayMonthsBalances = sortedMonthsBalances.filter(function (monthBalance) {
            return monthBalance.month === month;
        });
        monthsBalancesArray.push(arrayMonthsBalances.length !== 0
            ? arrayMonthsBalances
            : [{ time: 0, month: month, balance: 0 }]);
    };
    for (var _i = 0, months_1 = months; _i < months_1.length; _i++) {
        var month = months_1[_i];
        _loop_1(month);
    }
    return monthsBalancesArray;
};
exports.filterMonthsBalanceByMonth = filterMonthsBalanceByMonth;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveOneMonthBalance = void 0;
var retrieveOneMonthBalance = function (months, groupedMonthsBalances) {
    for (var _i = 0, months_1 = months; _i < months_1.length; _i++) {
        var month = months_1[_i];
        for (var _a = 0, groupedMonthsBalances_1 = groupedMonthsBalances; _a < groupedMonthsBalances_1.length; _a++) {
            var monthBalanceArray = groupedMonthsBalances_1[_a];
            for (var _b = 0, monthBalanceArray_1 = monthBalanceArray; _b < monthBalanceArray_1.length; _b++) {
                var monthBalance = monthBalanceArray_1[_b];
                if (monthBalance.month === month) {
                    monthBalanceArray.splice(1);
                }
            }
        }
    }
    return groupedMonthsBalances;
};
exports.retrieveOneMonthBalance = retrieveOneMonthBalance;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fillBalancesByMonth = void 0;
var fillBalancesByMonth = function (months, groupedMonthBalances) {
    var balances = [];
    for (var _i = 0, months_1 = months; _i < months_1.length; _i++) {
        var month = months_1[_i];
        for (var _a = 0, groupedMonthBalances_1 = groupedMonthBalances; _a < groupedMonthBalances_1.length; _a++) {
            var monthBalanceArray = groupedMonthBalances_1[_a];
            for (var _b = 0, monthBalanceArray_1 = monthBalanceArray; _b < monthBalanceArray_1.length; _b++) {
                var monthBalance = monthBalanceArray_1[_b];
                if (monthBalance.month === month) {
                    balances.push(monthBalance.balance);
                }
            }
        }
    }
    return balances;
};
exports.fillBalancesByMonth = fillBalancesByMonth;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountGraphics = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountgraphics_css_1 = __importDefault(__webpack_require__(171));
var chart_js_1 = __webpack_require__(172);
var react_chartjs_2_1 = __webpack_require__(173);
function AccountGraphics(_a) {
    var data = _a.data, options = _a.options, plugins = _a.plugins;
    chart_js_1.Chart.register(chart_js_1.CategoryScale, chart_js_1.LinearScale, chart_js_1.BarElement, chart_js_1.Tooltip);
    return (react_1.default.createElement("div", { className: accountgraphics_css_1.default.container },
        react_1.default.createElement(react_chartjs_2_1.Bar, { data: data, options: options, plugins: plugins })));
}
exports.AccountGraphics = AccountGraphics;


/***/ }),
/* 171 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "accountgraphics__container--vOB4q"
};


/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = require("chart.js");

/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(175), exports);


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountHistory = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accounthistory_css_1 = __importDefault(__webpack_require__(176));
var Description_1 = __webpack_require__(3);
var AccountTable_1 = __webpack_require__(43);
function AccountHistory(_a) {
    var transactions = _a.transactions, number = _a.number;
    return (react_1.default.createElement("a", { className: accounthistory_css_1.default.container, href: "/accounts/".concat(number, "/details") },
        react_1.default.createElement(Description_1.Description, { text: 'История переводов' }),
        react_1.default.createElement(AccountTable_1.AccountTable, { transactions: transactions, number: number })));
}
exports.AccountHistory = AccountHistory;


/***/ }),
/* 176 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "accounthistory__container--io5rF"
};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountTable = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accounttable_css_1 = __importDefault(__webpack_require__(178));
var MinusIcon_1 = __webpack_require__(179);
var RubleRedIcon_1 = __webpack_require__(180);
var PlusGreenIcon_1 = __webpack_require__(181);
var RubleGreenIcon_1 = __webpack_require__(182);
function AccountTable(_a) {
    var transactions = _a.transactions, number = _a.number;
    return (react_1.default.createElement("table", { className: accounttable_css_1.default.table },
        react_1.default.createElement("thead", null,
            react_1.default.createElement("tr", { className: accounttable_css_1.default.titlesRow },
                react_1.default.createElement("th", { className: "".concat(accounttable_css_1.default.title, " ").concat(accounttable_css_1.default.titleOne) }, "\u0421\u0447\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044F"),
                react_1.default.createElement("th", { className: "".concat(accounttable_css_1.default.title, " ").concat(accounttable_css_1.default.titleTwo) }, "\u0421\u0447\u0435\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F"),
                react_1.default.createElement("th", { className: "".concat(accounttable_css_1.default.title, " ").concat(accounttable_css_1.default.titleThree) }, "\u0421\u0443\u043C\u043C\u0430"),
                react_1.default.createElement("th", { className: "".concat(accounttable_css_1.default.title, " ").concat(accounttable_css_1.default.titleFour) }, "\u0414\u0430\u0442\u0430"))),
        react_1.default.createElement("tbody", null, transactions.map(function (transaction) { return (react_1.default.createElement("tr", { className: accounttable_css_1.default.contentRows, key: transaction.date },
            react_1.default.createElement("td", { className: "".concat(accounttable_css_1.default.content, " ").concat(accounttable_css_1.default.contentOne) }, transaction.from),
            react_1.default.createElement("td", { className: "".concat(accounttable_css_1.default.content, " ").concat(accounttable_css_1.default.contentTwo) }, transaction.to),
            number === transaction.from
                ? (react_1.default.createElement("td", { className: "".concat(accounttable_css_1.default.content, " ").concat(accounttable_css_1.default.contentThree) },
                    react_1.default.createElement(MinusIcon_1.MinusIcon, { size: 10 }),
                    react_1.default.createElement("span", { className: accounttable_css_1.default.negativeAmount }, transaction.sum),
                    react_1.default.createElement(RubleRedIcon_1.RubleRedIcon, { size: 16 })))
                : (react_1.default.createElement("td", { className: "".concat(accounttable_css_1.default.content, " ").concat(accounttable_css_1.default.contentThree) },
                    react_1.default.createElement(PlusGreenIcon_1.PlusGreenIcon, { size: 10 }),
                    react_1.default.createElement("span", { className: accounttable_css_1.default.positiveAmount }, transaction.sum),
                    react_1.default.createElement(RubleGreenIcon_1.RubleGreenIcon, { size: 16 }))),
            react_1.default.createElement("td", { className: "".concat(accounttable_css_1.default.content, " ").concat(accounttable_css_1.default.contentFour) }, (new Date(transaction.date)).toLocaleDateString()))); }))));
}
exports.AccountTable = AccountTable;


/***/ }),
/* 178 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"table": "accounttable__table--2pFAX",
	"titlesRow": "accounttable__titlesRow--1pkWe",
	"title": "accounttable__title--Uf9Nj",
	"titleOne": "accounttable__titleOne--3g0CJ",
	"titleTwo": "accounttable__titleTwo--39ZK2",
	"titleThree": "accounttable__titleThree--2jUyE",
	"contentRows": "accounttable__contentRows--12UAT",
	"content": "accounttable__content--RXauk",
	"contentOne": "accounttable__contentOne--3OZ96",
	"contentTwo": "accounttable__contentTwo--2PgQh",
	"contentThree": "accounttable__contentThree--33PgL",
	"positiveAmount": "accounttable__positiveAmount--Kibgt",
	"negativeAmount": "accounttable__negativeAmount--1j9v9"
};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinusIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function MinusIcon(_a) {
    var size = _a.size;
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 92 92", width: size, height: size },
        react_1.default.createElement("path", { d: "M68 50.5H24c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h44c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5z", fill: "#FD4E5D" })));
}
exports.MinusIcon = MinusIcon;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RubleRedIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function RubleRedIcon(_a) {
    var size = _a.size;
    return (react_1.default.createElement("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", width: size, height: size },
        react_1.default.createElement("path", { d: "M19,4H10V15H7v2h3v3H7v2h3v6h2V22h9V20H12V17h7a6.0067,6.0067,0,0,0,6-6V10A6.0067,6.0067,0,0,0,19,4Zm4,7a4.0045,4.0045,0,0,1-4,4H12V6h7a4.0045,4.0045,0,0,1,4,4Z", fill: "#FD4E5D" })));
}
exports.RubleRedIcon = RubleRedIcon;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlusGreenIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function PlusGreenIcon(_a) {
    var size = _a.size;
    return (react_1.default.createElement("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: size, height: size },
        react_1.default.createElement("path", { d: "M12 4.00001L12 12M12 12L12 20M12 12L20 12M12 12L4 12", stroke: "#76CA66", strokeWidth: "2" })));
}
exports.PlusGreenIcon = PlusGreenIcon;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RubleGreenIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function RubleGreenIcon(_a) {
    var size = _a.size;
    return (react_1.default.createElement("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", width: size, height: size },
        react_1.default.createElement("path", { d: "M19,4H10V15H7v2h3v3H7v2h3v6h2V22h9V20H12V17h7a6.0067,6.0067,0,0,0,6-6V10A6.0067,6.0067,0,0,0,19,4Zm4,7a4.0045,4.0045,0,0,1-4,4H12V6h7a4.0045,4.0045,0,0,1,4,4Z", fill: "#76CA66" })));
}
exports.RubleGreenIcon = RubleGreenIcon;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(184), exports);


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountDetails = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountdetails_css_1 = __importDefault(__webpack_require__(185));
var AccountMenu_1 = __webpack_require__(186);
var AccountContent_1 = __webpack_require__(201);
var react_router_dom_1 = __webpack_require__(26);
var filterAccountsByAccount_1 = __webpack_require__(44);
function AccountDetails() {
    var number = (0, react_router_dom_1.useParams)().number;
    var account = (0, filterAccountsByAccount_1.filterAccountsByAccount)(Number(number));
    return (react_1.default.createElement("div", null, account !== undefined && (react_1.default.createElement("div", { className: accountdetails_css_1.default.container },
        react_1.default.createElement(AccountMenu_1.AccountMenu, { account: account.number, balance: account.balance }),
        react_1.default.createElement(AccountContent_1.AccountContent, { number: Number(number) })))));
}
exports.AccountDetails = AccountDetails;


/***/ }),
/* 185 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(187), exports);


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountMenu = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountmenu_css_1 = __importDefault(__webpack_require__(188));
var AccountTextContent_1 = __webpack_require__(189);
var AccountDetails_1 = __webpack_require__(192);
function AccountMenu(_a) {
    var account = _a.account, balance = _a.balance;
    return (react_1.default.createElement("div", { className: accountmenu_css_1.default.menu },
        react_1.default.createElement(AccountTextContent_1.AccountTextContent, { number: account }),
        react_1.default.createElement(AccountDetails_1.AccountDetails, { account: account, balance: balance })));
}
exports.AccountMenu = AccountMenu;


/***/ }),
/* 188 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "accountmenu__menu--2p74v"
};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(190), exports);


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountTextContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accounttextcontent_css_1 = __importDefault(__webpack_require__(191));
var Title_1 = __webpack_require__(4);
var Button_1 = __webpack_require__(6);
function AccountTextContent(_a) {
    var number = _a.number;
    return (react_1.default.createElement("div", { className: accounttextcontent_css_1.default.container },
        react_1.default.createElement(Title_1.Title, { title: 'История баланса' }),
        react_1.default.createElement(Button_1.Button, { link: "/accounts/".concat(number), text: 'Вернуться назад' })));
}
exports.AccountTextContent = AccountTextContent;


/***/ }),
/* 191 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "accounttextcontent__container--2YcVi"
};


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(193), exports);


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountDetails = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountdetails_css_1 = __importDefault(__webpack_require__(194));
var AccountBalance_1 = __webpack_require__(195);
var AccountNumber_1 = __webpack_require__(198);
function AccountDetails(_a) {
    var account = _a.account, balance = _a.balance;
    return (react_1.default.createElement("div", { className: accountdetails_css_1.default.container },
        react_1.default.createElement(AccountNumber_1.AccountNumber, { account: account }),
        react_1.default.createElement(AccountBalance_1.AccountBalance, { balance: balance })));
}
exports.AccountDetails = AccountDetails;


/***/ }),
/* 194 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "accountdetails__container--38hA1"
};


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(196), exports);


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountBalance = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountbalance_css_1 = __importDefault(__webpack_require__(197));
var RubleIcon_1 = __webpack_require__(21);
function AccountBalance(_a) {
    var balance = _a.balance;
    return (react_1.default.createElement("p", { className: accountbalance_css_1.default.balance },
        "\u0411\u0430\u043B\u0430\u043D\u0441",
        react_1.default.createElement("span", { className: accountbalance_css_1.default.number },
            balance,
            react_1.default.createElement(RubleIcon_1.RubleIcon, { size: 18 }))));
}
exports.AccountBalance = AccountBalance;


/***/ }),
/* 197 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"balance": "accountbalance__balance--1Klqe",
	"number": "accountbalance__number--3DK6u"
};


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(199), exports);


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountNumber = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountnumber_css_1 = __importDefault(__webpack_require__(200));
function AccountNumber(_a) {
    var account = _a.account;
    return (react_1.default.createElement("h2", { className: accountnumber_css_1.default.title },
        "\u2116 ",
        account));
}
exports.AccountNumber = AccountNumber;


/***/ }),
/* 200 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "accountnumber__title--35H7a"
};


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(202), exports);


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountcontent_css_1 = __importDefault(__webpack_require__(203));
var filterTransactionsByAccount_1 = __webpack_require__(22);
var AccountBalance_1 = __webpack_require__(204);
var AccountTransactions_1 = __webpack_require__(207);
var AccountHistory_1 = __webpack_require__(217);
function AccountContent(_a) {
    var number = _a.number;
    var transactions = (0, filterTransactionsByAccount_1.filterTransactionsByAccount)(number);
    return (react_1.default.createElement("div", { className: accountcontent_css_1.default.container },
        react_1.default.createElement(AccountBalance_1.AccountBalance, { number: number }),
        react_1.default.createElement(AccountTransactions_1.AccountTransactions, { number: number }),
        transactions.length !== 0 && (react_1.default.createElement(AccountHistory_1.AccountHistory, { number: number }))));
}
exports.AccountContent = AccountContent;


/***/ }),
/* 203 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "accountcontent__container--3J02s"
};


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(205), exports);


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountBalance = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountbalance_css_1 = __importDefault(__webpack_require__(206));
var settingsForGraphics_1 = __webpack_require__(23);
var convertDataForBalanceGraphics_1 = __webpack_require__(42);
var Description_1 = __webpack_require__(3);
var AccountGraphics_1 = __webpack_require__(25);
function AccountBalance(_a) {
    var number = _a.number;
    var months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
    var monthsNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var data = (0, convertDataForBalanceGraphics_1.convertDataForBalanceGraphics)(number, months, monthsNumbers);
    return (react_1.default.createElement("div", { className: accountbalance_css_1.default.container },
        react_1.default.createElement(Description_1.Description, { text: 'Динамика баланса' }),
        data.datasets[0].data.every(function (value) { return value === 0 || value === null; })
            ? (react_1.default.createElement(AccountGraphics_1.AccountGraphics, { data: data, options: settingsForGraphics_1.noBalanceGraphicsOptions, plugins: [settingsForGraphics_1.chartAreaBorder, settingsForGraphics_1.bigGraphicsTicksStyles] }))
            : (react_1.default.createElement(AccountGraphics_1.AccountGraphics, { data: data, options: settingsForGraphics_1.balanceGraphicsOptions, plugins: [settingsForGraphics_1.chartAreaBorder, settingsForGraphics_1.bigGraphicsTicksStyles] }))));
}
exports.AccountBalance = AccountBalance;


/***/ }),
/* 206 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "accountbalance__container--1DY5n"
};


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(208), exports);


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountTransactions = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accounttransactions_css_1 = __importDefault(__webpack_require__(209));
var settingsForGraphics_1 = __webpack_require__(23);
var convertDataForTransactionsGraphics_1 = __webpack_require__(210);
var Description_1 = __webpack_require__(3);
var AccountGraphics_1 = __webpack_require__(25);
function AccountTransactions(_a) {
    var number = _a.number;
    var months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
    var monthsNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var data = (0, convertDataForTransactionsGraphics_1.convertDataForTransactionsGraphics)(number, months, monthsNumbers);
    return (react_1.default.createElement("div", { className: accounttransactions_css_1.default.container },
        react_1.default.createElement(Description_1.Description, { text: 'Соотношение входящих исходящих транзакций' }),
        data.datasets[0].data.every(function (value) { return value === 0 || value === null; })
            ? (react_1.default.createElement(AccountGraphics_1.AccountGraphics, { data: data, options: settingsForGraphics_1.noTransactionsGraphicsOptions, plugins: [settingsForGraphics_1.chartAreaBorder, settingsForGraphics_1.bigGraphicsTicksStyles] }))
            : (react_1.default.createElement(AccountGraphics_1.AccountGraphics, { data: data, options: settingsForGraphics_1.transactionsGraphicsOptions, plugins: [settingsForGraphics_1.chartAreaBorder, settingsForGraphics_1.bigGraphicsTicksStyles] }))));
}
exports.AccountTransactions = AccountTransactions;


/***/ }),
/* 209 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "accounttransactions__container--fwUhk"
};


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDataForTransactionsGraphics = void 0;
var sortTransactionsByMonth_1 = __webpack_require__(211);
var convertDataForTransactionsGraphics = function (accountNumber, months, monthsNumbers) {
    var _a = (0, sortTransactionsByMonth_1.sortTransactionsByMonth)(accountNumber, months, monthsNumbers), negativeMonthsTransactionsSums = _a.negativeMonthsTransactionsSums, positiveMonthsTransactionsSums = _a.positiveMonthsTransactionsSums;
    var data = {
        labels: months,
        datasets: [
            {
                data: negativeMonthsTransactionsSums,
                backgroundColor: '#FD4E5D',
                hoverBackgroundColor: '#FD4E5D',
                categoryPercentage: 0.8,
            },
            {
                data: positiveMonthsTransactionsSums,
                backgroundColor: '#76CA66',
                hoverBackgroundColor: '#76CA66',
                categoryPercentage: 0.8,
            }
        ]
    };
    data.labels.unshift('');
    data.labels.push('');
    data.datasets[0].data.unshift(null);
    data.datasets[0].data.push(null);
    data.datasets[1].data.unshift(null);
    data.datasets[1].data.push(null);
    return data;
};
exports.convertDataForTransactionsGraphics = convertDataForTransactionsGraphics;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sortTransactionsByMonth = void 0;
var filterTransactionsByAccount_1 = __webpack_require__(22);
var splitTransactionsByNegativeAndPositive_1 = __webpack_require__(212);
var filterTransactionsByMonth_1 = __webpack_require__(213);
var sortMonthsTransactionsByMonth_1 = __webpack_require__(214);
var filterMonthsTransactionsByMonth_1 = __webpack_require__(215);
var sumMonthsTransactionsSums_1 = __webpack_require__(216);
var sortTransactionsByMonth = function (number, months, monthsNumbers) {
    var transactions = (0, filterTransactionsByAccount_1.filterTransactionsByAccount)(number);
    var _a = (0, splitTransactionsByNegativeAndPositive_1.splitTransactionsByNegativeAndPositive)(transactions, number), negativeTransactions = _a.negativeTransactions, positiveTransactions = _a.positiveTransactions;
    var negativeMonthsTransactions = (0, filterTransactionsByMonth_1.filterTransactionsByMonth)(months, monthsNumbers, negativeTransactions, 'negative');
    var positiveMonthsTransactions = (0, filterTransactionsByMonth_1.filterTransactionsByMonth)(months, monthsNumbers, positiveTransactions, 'positive');
    var sortedNegativeMonthsTransactions = (0, sortMonthsTransactionsByMonth_1.sortMonthsTransactionsByMonth)(months, negativeMonthsTransactions);
    var sortedPositiveMonthsTransactions = (0, sortMonthsTransactionsByMonth_1.sortMonthsTransactionsByMonth)(months, positiveMonthsTransactions);
    var groupedNegativeMonthsTransactions = (0, filterMonthsTransactionsByMonth_1.filterMonthsTransactionsByMonth)(months, sortedNegativeMonthsTransactions, 'negative');
    var groupedPositiveMonthsTransactions = (0, filterMonthsTransactionsByMonth_1.filterMonthsTransactionsByMonth)(months, sortedPositiveMonthsTransactions, 'positive');
    var negativeMonthsTransactionsSums = (0, sumMonthsTransactionsSums_1.sumMonthsTransactionsSums)(months, groupedNegativeMonthsTransactions);
    var positiveMonthsTransactionsSums = (0, sumMonthsTransactionsSums_1.sumMonthsTransactionsSums)(months, groupedPositiveMonthsTransactions);
    return {
        negativeMonthsTransactionsSums: negativeMonthsTransactionsSums,
        positiveMonthsTransactionsSums: positiveMonthsTransactionsSums
    };
};
exports.sortTransactionsByMonth = sortTransactionsByMonth;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.splitTransactionsByNegativeAndPositive = void 0;
var splitTransactionsByNegativeAndPositive = function (transactions, number) {
    var negativeTransactions = transactions.filter(function (transaction) { return transaction.from === number; });
    var positiveTransactions = transactions.filter(function (transaction) { return transaction.to === number; });
    return {
        negativeTransactions: negativeTransactions,
        positiveTransactions: positiveTransactions
    };
};
exports.splitTransactionsByNegativeAndPositive = splitTransactionsByNegativeAndPositive;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.filterTransactionsByMonth = void 0;
var filterTransactionsByMonth = function (months, monthsNumbers, transactions, transactionValue) {
    var monthsTransactions = [];
    for (var _i = 0, transactions_1 = transactions; _i < transactions_1.length; _i++) {
        var transaction = transactions_1[_i];
        var date = (new Date(transaction.date)).toLocaleDateString();
        var month = date.split('.')[1];
        for (var i = 0; i < months.length; i++) {
            if (month === monthsNumbers[i]) {
                if (transactionValue === 'negative') {
                    monthsTransactions.push({
                        time: transaction.date,
                        month: months[i],
                        from: transaction.from,
                        sum: transaction.sum
                    });
                }
                else {
                    monthsTransactions.push({
                        time: transaction.date,
                        month: months[i],
                        from: transaction.from,
                        sum: transaction.sum
                    });
                }
            }
        }
    }
    return monthsTransactions;
};
exports.filterTransactionsByMonth = filterTransactionsByMonth;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sortMonthsTransactionsByMonth = void 0;
var sortMonthsTransactionsByMonth = function (months, monthsTransactions) {
    var _loop_1 = function (month) {
        monthsTransactions.sort(function (monthTransactionOne, monthTransactionTwo) {
            if (monthTransactionOne.month === month && monthTransactionTwo.month === month) {
                return monthTransactionTwo.time - monthTransactionOne.time;
            }
        });
    };
    for (var _i = 0, months_1 = months; _i < months_1.length; _i++) {
        var month = months_1[_i];
        _loop_1(month);
    }
    return monthsTransactions;
};
exports.sortMonthsTransactionsByMonth = sortMonthsTransactionsByMonth;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.filterMonthsTransactionsByMonth = void 0;
var filterMonthsTransactionsByMonth = function (months, sortedMonthsTransactions, transactionValue) {
    var monthsTransactionsArray = [];
    var _loop_1 = function (month) {
        var arrayMonthTransactions = sortedMonthsTransactions.filter(function (monthTransaction) {
            return monthTransaction.month === month;
        });
        if (transactionValue === 'negative') {
            if (arrayMonthTransactions.length !== 0) {
                monthsTransactionsArray.push(arrayMonthTransactions);
            }
            else {
                monthsTransactionsArray.push([{ time: 0, month: month, from: 0, sum: 0 }]);
            }
        }
        else {
            if (arrayMonthTransactions.length !== 0) {
                monthsTransactionsArray.push(arrayMonthTransactions);
            }
            else {
                monthsTransactionsArray.push([{ time: 0, month: month, to: 0, sum: 0 }]);
            }
        }
    };
    for (var _i = 0, months_1 = months; _i < months_1.length; _i++) {
        var month = months_1[_i];
        _loop_1(month);
    }
    return monthsTransactionsArray;
};
exports.filterMonthsTransactionsByMonth = filterMonthsTransactionsByMonth;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.sumMonthsTransactionsSums = void 0;
var sumMonthsTransactionsSums = function (months, groupedMonthTransactions) {
    var monthsTransactionsSums = [];
    for (var _i = 0, months_1 = months; _i < months_1.length; _i++) {
        var month = months_1[_i];
        var sum = 0;
        for (var _a = 0, groupedMonthTransactions_1 = groupedMonthTransactions; _a < groupedMonthTransactions_1.length; _a++) {
            var monthTransactionArray = groupedMonthTransactions_1[_a];
            for (var _b = 0, monthTransactionArray_1 = monthTransactionArray; _b < monthTransactionArray_1.length; _b++) {
                var monthTransaction = monthTransactionArray_1[_b];
                if (monthTransaction.month === month) {
                    sum += monthTransaction.sum;
                }
            }
        }
        monthsTransactionsSums.push(sum);
    }
    return monthsTransactionsSums;
};
exports.sumMonthsTransactionsSums = sumMonthsTransactionsSums;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(218), exports);


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountHistory = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accounthistory_css_1 = __importDefault(__webpack_require__(219));
var useLimitedTransactionsData_1 = __webpack_require__(220);
var Description_1 = __webpack_require__(3);
var AccountTable_1 = __webpack_require__(43);
var AccountLoadButton_1 = __webpack_require__(221);
function AccountHistory(_a) {
    var number = _a.number;
    var _b = (0, useLimitedTransactionsData_1.useLimitedTransactionsData)(number), transactions = _b.transactions, transactionsLoadCounter = _b.transactionsLoadCounter, bottomOfList = _b.bottomOfList;
    return (react_1.default.createElement("div", { className: accounthistory_css_1.default.container },
        react_1.default.createElement(Description_1.Description, { text: 'История переводов' }),
        react_1.default.createElement(AccountTable_1.AccountTable, { transactions: transactions, number: number }),
        react_1.default.createElement("div", { ref: bottomOfList }),
        transactions.length > 30 && transactionsLoadCounter === 3 && (react_1.default.createElement(AccountLoadButton_1.AccountLoadButton, null))));
}
exports.AccountHistory = AccountHistory;


/***/ }),
/* 219 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "accounthistory__container--1ePJG"
};


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useLimitedTransactionsData = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(2);
var limitTransactionsAmount_1 = __webpack_require__(41);
var transactionsLoadCounterActions_1 = __webpack_require__(8);
var transactionsOffsetActions_1 = __webpack_require__(27);
function useLimitedTransactionsData(number) {
    var transactionsOffset = (0, react_redux_1.useSelector)(function (state) { return state.transactionsOffset.transactionsOffset; });
    var transactions = (0, limitTransactionsAmount_1.limitTransactionsAmount)(10, transactionsOffset, number);
    var transactionsLoadCounter = (0, react_redux_1.useSelector)(function (state) { return state.transactionsLoadCounter.transactionsLoadCounter; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var bottomOfList = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var observer = new IntersectionObserver(function (entries) {
            if (transactionsLoadCounter !== 3) {
                if (entries[0].isIntersecting) {
                    dispatch((0, transactionsLoadCounterActions_1.setTransactionsLoadCounter)(transactionsLoadCounter + 1));
                    dispatch((0, transactionsOffsetActions_1.setTransactionsOffset)(transactionsOffset + 10));
                }
            }
        });
        if (bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }
        return function () {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        };
    }, [transactionsLoadCounter, transactionsOffset]);
    return {
        transactions: transactions,
        transactionsLoadCounter: transactionsLoadCounter,
        bottomOfList: bottomOfList,
    };
}
exports.useLimitedTransactionsData = useLimitedTransactionsData;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(222), exports);


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountLoadButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var accountloadbutton_css_1 = __importDefault(__webpack_require__(223));
var react_redux_1 = __webpack_require__(2);
var transactionsLoadCounterActions_1 = __webpack_require__(8);
function AccountLoadButton() {
    var dispatch = (0, react_redux_1.useDispatch)();
    return (react_1.default.createElement("div", { className: accountloadbutton_css_1.default.container },
        react_1.default.createElement("button", { className: accountloadbutton_css_1.default.button, onClick: function () { return dispatch((0, transactionsLoadCounterActions_1.setTransactionsLoadCounter)(0)); } },
            react_1.default.createElement("span", { className: accountloadbutton_css_1.default.desc }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435"))));
}
exports.AccountLoadButton = AccountLoadButton;


/***/ }),
/* 223 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "accountloadbutton__container--1p00F",
	"button": "accountloadbutton__button--1GVcp",
	"desc": "accountloadbutton__desc--1dTbW"
};


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(225), exports);


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var currency_css_1 = __importDefault(__webpack_require__(226));
var CurrencyMenu_1 = __webpack_require__(227);
var CurrencyContent_1 = __webpack_require__(230);
function Currency() {
    return (react_1.default.createElement("div", { className: currency_css_1.default.container },
        react_1.default.createElement(CurrencyMenu_1.CurrencyMenu, null),
        react_1.default.createElement(CurrencyContent_1.CurrencyContent, null)));
}
exports.Currency = Currency;


/***/ }),
/* 226 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(228), exports);


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyMenu = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var currencymenu_css_1 = __importDefault(__webpack_require__(229));
var Title_1 = __webpack_require__(4);
function CurrencyMenu() {
    return (react_1.default.createElement("div", { className: currencymenu_css_1.default.menu },
        react_1.default.createElement(Title_1.Title, { title: 'Валютный обмен' })));
}
exports.CurrencyMenu = CurrencyMenu;


/***/ }),
/* 229 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "currencymenu__menu--2gTCH"
};


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(231), exports);


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var currencycontent_css_1 = __importDefault(__webpack_require__(232));
var Currencies_1 = __webpack_require__(233);
var CurrenctyExchangeRate_1 = __webpack_require__(239);
var CurrencyExchange_1 = __webpack_require__(247);
function CurrencyContent() {
    return (react_1.default.createElement("div", { className: currencycontent_css_1.default.container },
        react_1.default.createElement(CurrencyExchange_1.CurrencyExchange, null),
        react_1.default.createElement(CurrenctyExchangeRate_1.CurrencyExchangeRate, null),
        react_1.default.createElement(Currencies_1.Currencies, null)));
}
exports.CurrencyContent = CurrencyContent;


/***/ }),
/* 232 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "currencycontent__container--1GstO"
};


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(234), exports);


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currencies = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var currencies_css_1 = __importDefault(__webpack_require__(235));
var Description_1 = __webpack_require__(3);
var CurrenciesList_1 = __webpack_require__(236);
function Currencies() {
    return (react_1.default.createElement("div", { className: currencies_css_1.default.container },
        react_1.default.createElement(Description_1.Description, { text: 'Ваши валюты' }),
        react_1.default.createElement(CurrenciesList_1.CurrenciesList, null)));
}
exports.Currencies = Currencies;


/***/ }),
/* 235 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "currencies__container--XUkF4"
};


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(237), exports);


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrenciesList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var currencieslist_css_1 = __importDefault(__webpack_require__(238));
var useCurrenciesData_1 = __webpack_require__(45);
function CurrenciesList() {
    var currencies = (0, useCurrenciesData_1.useCurrenciesData)();
    return (react_1.default.createElement("div", { className: currencieslist_css_1.default.container }, currencies.map(function (currency) { return (react_1.default.createElement("div", { className: currencieslist_css_1.default.line, key: currency.code },
        react_1.default.createElement("p", { className: currencieslist_css_1.default.currency }, currency.code),
        react_1.default.createElement("span", { className: currencieslist_css_1.default.pointLine }),
        react_1.default.createElement("p", { className: currencieslist_css_1.default.value }, currency.amount))); })));
}
exports.CurrenciesList = CurrenciesList;


/***/ }),
/* 238 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "currencieslist__container--3HNuZ",
	"line": "currencieslist__line--3E9Nj",
	"currency": "currencieslist__currency--3Q8bX",
	"pointLine": "currencieslist__pointLine--3P90j",
	"value": "currencieslist__value--BG1Bx"
};


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(240), exports);


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyExchangeRate = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var currencyexchangerate_css_1 = __importDefault(__webpack_require__(241));
var limitCurrenciesExchanges_1 = __webpack_require__(242);
var Description_1 = __webpack_require__(3);
var CurrenciesPairsList_1 = __webpack_require__(47);
function CurrencyExchangeRate() {
    var currenciesExchange = (0, limitCurrenciesExchanges_1.limitCurrenciesExchange)();
    return (react_1.default.createElement("a", { className: currencyexchangerate_css_1.default.container, href: "/currency/details" },
        react_1.default.createElement(Description_1.Description, { text: 'Изменение курсов в реальном времени' }),
        react_1.default.createElement(CurrenciesPairsList_1.CurrenciesPairsList, { currenciesExchange: currenciesExchange })));
}
exports.CurrencyExchangeRate = CurrencyExchangeRate;


/***/ }),
/* 241 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "currencyexchangerate__container--2iwOM"
};


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.limitCurrenciesExchange = void 0;
var useCurrenciesExchangeData_1 = __webpack_require__(46);
var useCurrenciesData_1 = __webpack_require__(45);
var limitCurrenciesExchange = function () {
    var currenciesExchange = (0, useCurrenciesExchangeData_1.useCurrenciesExchangeData)();
    var currencies = (0, useCurrenciesData_1.useCurrenciesData)();
    var CURRENCIES_MIN_LENGTH = 6;
    var limitedCurrenciesExchange = [];
    if (currenciesExchange !== null) {
        var randomNumber = Math.floor(Math.random() * 91);
        limitedCurrenciesExchange = currenciesExchange
            .slice(randomNumber, randomNumber + CURRENCIES_MIN_LENGTH + currencies.length);
    }
    return limitedCurrenciesExchange;
};
exports.limitCurrenciesExchange = limitCurrenciesExchange;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrenciesPairsList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var currenciespairslist_css_1 = __importDefault(__webpack_require__(244));
var ArrowUpGreenIcon_1 = __webpack_require__(245);
var ArrowDownRedIcon_1 = __webpack_require__(246);
function CurrenciesPairsList(_a) {
    var currenciesExchange = _a.currenciesExchange;
    return (react_1.default.createElement("div", { className: currenciespairslist_css_1.default.container }, currenciesExchange.length !== 0
        ? currenciesExchange.map(function (currencyExchange) { return (react_1.default.createElement("div", { className: currenciespairslist_css_1.default.line, key: currencyExchange.id },
            react_1.default.createElement("p", { className: currenciespairslist_css_1.default.currency },
                currencyExchange.from,
                "/",
                currencyExchange.to),
            currencyExchange.change === 1
                ? (react_1.default.createElement("span", { className: "".concat(currenciespairslist_css_1.default.pointLine, " ").concat(currenciespairslist_css_1.default.pointLineGreen) }))
                : (react_1.default.createElement("span", { className: "".concat(currenciespairslist_css_1.default.pointLine, " ").concat(currenciespairslist_css_1.default.pointLineRed) })),
            react_1.default.createElement("p", { className: currenciespairslist_css_1.default.value },
                react_1.default.createElement("span", { className: currenciespairslist_css_1.default.amount }, currencyExchange.rate),
                currencyExchange.change === 1
                    ? (react_1.default.createElement(ArrowUpGreenIcon_1.ArrowUpGreenIcon, { size: 20 }))
                    : (react_1.default.createElement(ArrowDownRedIcon_1.ArrowDownRedIcon, { size: 20 }))))); })
        : (react_1.default.createElement("div", { className: currenciespairslist_css_1.default.loader },
            react_1.default.createElement("span", { className: currenciespairslist_css_1.default.desc }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")))));
}
exports.CurrenciesPairsList = CurrenciesPairsList;


/***/ }),
/* 244 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "currenciespairslist__container--2e0f8",
	"line": "currenciespairslist__line--1KfuX",
	"currency": "currenciespairslist__currency--1X3rn",
	"pointLine": "currenciespairslist__pointLine--2Ywlr",
	"pointLineGreen": "currenciespairslist__pointLineGreen--_xr7H",
	"pointLineRed": "currenciespairslist__pointLineRed--2WCpW",
	"value": "currenciespairslist__value--3MrU4",
	"amount": "currenciespairslist__amount--2ZyQ6",
	"loader": "currenciespairslist__loader--3nT3b",
	"desc": "currenciespairslist__desc--2I2X6"
};


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowUpGreenIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function ArrowUpGreenIcon(_a) {
    var size = _a.size;
    return (react_1.default.createElement("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 10", width: size, height: size },
        react_1.default.createElement("path", { d: "M20 10L10 0L0 10L20 10Z", fill: "#76CA66" })));
}
exports.ArrowUpGreenIcon = ArrowUpGreenIcon;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowDownRedIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function ArrowDownRedIcon(_a) {
    var size = _a.size;
    return (react_1.default.createElement("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 10", width: size, height: size },
        react_1.default.createElement("path", { d: "M0 0L10 10L20 0H0Z", fill: "#FD4E5D" })));
}
exports.ArrowDownRedIcon = ArrowDownRedIcon;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(248), exports);


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyExchange = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var currencyexchange_css_1 = __importDefault(__webpack_require__(249));
var Description_1 = __webpack_require__(3);
var CurrencyFormContainer_1 = __webpack_require__(250);
function CurrencyExchange() {
    return (react_1.default.createElement("div", { className: currencyexchange_css_1.default.container },
        react_1.default.createElement(Description_1.Description, { text: 'Обмен валюты' }),
        react_1.default.createElement(CurrencyFormContainer_1.CurrencyFormContainer, null)));
}
exports.CurrencyExchange = CurrencyExchange;


/***/ }),
/* 249 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "currencyexchange__container--1Vg5e"
};


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(251), exports);


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyFormContainer = void 0;
var react_1 = __importStar(__webpack_require__(0));
var CurrencyForm_1 = __webpack_require__(252);
function CurrencyFormContainer() {
    var amountInputRegExp = new RegExp(/^\d*\.*\d*$/);
    var amountEnteredString = '';
    var amountEnteredStringLength = 0;
    var handleAmountInput = function (event) {
        var formButton = document.querySelector('.formButton');
        var element = event.target;
        if (element.value.charAt(0) === '.') {
            element.value = element.value.slice(1, element.value.length);
            amountEnteredString = element.value;
        }
        if (element.value.match(/\./g) !== null) {
            var dotNumber = element.value.match(/\./g).length;
            var dotIndex = element.value.indexOf('.');
            if (dotNumber > 1) {
                var firstStringPart = element.value.slice(0, dotIndex);
                var secondStringPart = element.value.slice(dotIndex + 1, element.value.length);
                element.value = firstStringPart + secondStringPart;
                amountEnteredString = element.value;
            }
            var stringAfterDot = element.value.slice(element.value.indexOf('.') + 1, element.value.length);
            if (stringAfterDot.length > 2) {
                element.value = element.value.slice(0, element.value.indexOf('.') + 3);
                amountEnteredString = element.value;
            }
        }
        if (element.value.length > amountEnteredStringLength) {
            if (amountInputRegExp.test(element.value)) {
                amountEnteredString = element.value;
            }
            else {
                amountEnteredString += '';
            }
            element.value = amountEnteredString;
        }
        if (element.value.length < amountEnteredStringLength) {
            amountEnteredString = amountEnteredString.slice(0, -1);
        }
        if (element.value.charAt(element.value.length - 1) === '.') {
            formButton.setAttribute('disabled', '');
        }
        else {
            formButton.removeAttribute('disabled');
        }
        amountEnteredStringLength = element.value.length;
    };
    (0, react_1.useEffect)(function () {
        var amountInput = document.querySelector('.amountInput');
        amountInput.addEventListener('input', handleAmountInput);
        return function () {
            amountInput.removeEventListener('input', handleAmountInput);
        };
    }, []);
    return (react_1.default.createElement(CurrencyForm_1.CurrencyForm, null));
}
exports.CurrencyFormContainer = CurrencyFormContainer;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(253), exports);


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyForm = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var currencyform_css_1 = __importDefault(__webpack_require__(254));
var react_redux_1 = __webpack_require__(2);
var CurrencyLeftDropdown_1 = __webpack_require__(255);
var CurrencyRightDropdown_1 = __webpack_require__(260);
function CurrencyForm() {
    var currencyLeftType = (0, react_redux_1.useSelector)(function (state) { return state.currencyFromType.currencyFromType; });
    var currencyRightType = (0, react_redux_1.useSelector)(function (state) { return state.currencyToType.currencyToType; });
    var NOOP = function () { };
    return (react_1.default.createElement("form", { className: currencyform_css_1.default.form, method: "post", action: "/currency-buy", encType: "application/x-www-form-urlencoded" },
        react_1.default.createElement("div", { className: currencyform_css_1.default.inputsContainer },
            react_1.default.createElement("input", { style: { display: 'none' }, type: "text", name: "from", value: currencyLeftType, onChange: NOOP }),
            react_1.default.createElement("input", { style: { display: 'none' }, type: "text", name: "to", value: currencyRightType, onChange: NOOP }),
            react_1.default.createElement("div", { className: currencyform_css_1.default.inputsContainerTop },
                react_1.default.createElement("label", { className: currencyform_css_1.default.labelTop, onClick: function (e) { return e.preventDefault(); } },
                    react_1.default.createElement("span", { className: currencyform_css_1.default.desc }, "\u0418\u0437"),
                    react_1.default.createElement(CurrencyLeftDropdown_1.CurrencyLeftDropdown, null)),
                react_1.default.createElement("label", { className: currencyform_css_1.default.labelTop, onClick: function (e) { return e.preventDefault(); } },
                    react_1.default.createElement("span", { className: currencyform_css_1.default.desc }, "\u0432"),
                    react_1.default.createElement(CurrencyRightDropdown_1.CurrencyRightDropdown, null))),
            react_1.default.createElement("div", { className: currencyform_css_1.default.inputsContainerBottom },
                react_1.default.createElement("label", { className: currencyform_css_1.default.labelBottom },
                    react_1.default.createElement("span", { className: currencyform_css_1.default.desc }, "\u0421\u0443\u043C\u043C\u0430"),
                    react_1.default.createElement("input", { className: "".concat(currencyform_css_1.default.input, " amountInput"), type: "text", name: "amount", placeholder: "Placeholder" })))),
        react_1.default.createElement("div", { className: currencyform_css_1.default.buttonContainer },
            react_1.default.createElement("button", { className: "".concat(currencyform_css_1.default.button, " formButton") },
                react_1.default.createElement("span", { className: currencyform_css_1.default.buttonDesc }, "\u041E\u0431\u043C\u0435\u043D\u044F\u0442\u044C")))));
}
exports.CurrencyForm = CurrencyForm;


/***/ }),
/* 254 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "currencyform__form--1yKgj",
	"inputsContainer": "currencyform__inputsContainer--ooNRn",
	"inputsContainerTop": "currencyform__inputsContainerTop--3zfdG",
	"labelTop": "currencyform__labelTop--1luL6",
	"labelBottom": "currencyform__labelBottom--1eWvE",
	"desc": "currencyform__desc--1CCJ5",
	"input": "currencyform__input--184Rn",
	"button": "currencyform__button--1zvKX",
	"buttonDesc": "currencyform__buttonDesc--3WKGm"
};


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(256), exports);


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyLeftDropdown = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var currencyleftdropdown_css_1 = __importDefault(__webpack_require__(257));
var react_redux_1 = __webpack_require__(2);
var currencyFromDropdownSwitcherActions_1 = __webpack_require__(29);
var currencyFromItemSwitcherActions_1 = __webpack_require__(30);
var currencyFromTypeActions_1 = __webpack_require__(31);
var Dropdown_1 = __webpack_require__(14);
var ArrowUpIcon_1 = __webpack_require__(15);
var ArrowDownIcon_1 = __webpack_require__(16);
var DropdownListContainer_1 = __webpack_require__(17);
var CurrencyList_1 = __webpack_require__(48);
function CurrencyLeftDropdown() {
    var dropdownSwitcher = (0, react_redux_1.useSelector)(function (state) { return state.currencyFromDropdownSwitcher.currencyFromDropdownSwitcher; });
    var itemSwitcher = (0, react_redux_1.useSelector)(function (state) { return state.currencyFromItemSwitcher.currencyFromItemSwitcher; });
    var type = (0, react_redux_1.useSelector)(function (state) { return state.currencyFromType.currencyFromType; });
    return (react_1.default.createElement("div", { className: currencyleftdropdown_css_1.default.container },
        react_1.default.createElement(Dropdown_1.Dropdown, { dropdownSwitcher: dropdownSwitcher, setDropdownSwitcher: currencyFromDropdownSwitcherActions_1.setCurrencyFromDropdownSwitcher, button: react_1.default.createElement("button", { className: currencyleftdropdown_css_1.default.button, type: "button" },
                type !== ''
                    ? (react_1.default.createElement("span", { className: currencyleftdropdown_css_1.default.buttonDesc }, type))
                    : (react_1.default.createElement("span", { className: currencyleftdropdown_css_1.default.buttonDesc }, "...")),
                dropdownSwitcher
                    ? (react_1.default.createElement("span", { className: currencyleftdropdown_css_1.default.icon },
                        react_1.default.createElement(ArrowUpIcon_1.ArrowUpIcon, { size: 24 })))
                    : (react_1.default.createElement("span", { className: currencyleftdropdown_css_1.default.icon },
                        react_1.default.createElement(ArrowDownIcon_1.ArrowDownIcon, { size: 24 })))) },
            react_1.default.createElement(DropdownListContainer_1.DropdownListContainer, { targetElementClass: 'currencyLeftItem', itemSwitcher: itemSwitcher, type: type, setItemSwitcher: currencyFromItemSwitcherActions_1.setCurrencyFromItemSwitcher, setType: currencyFromTypeActions_1.setCurrencyFromType, renderList: function () { return (react_1.default.createElement(CurrencyList_1.CurrencyList, { currencyClass: 'currencyLeftItem', itemSwitcher: itemSwitcher, type: type })); } }))));
}
exports.CurrencyLeftDropdown = CurrencyLeftDropdown;


/***/ }),
/* 257 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "currencyleftdropdown__container--3Tqz7",
	"button": "currencyleftdropdown__button--1puNj",
	"buttonDesc": "currencyleftdropdown__buttonDesc--3r6aK",
	"icon": "currencyleftdropdown__icon--1GmKK"
};


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var currencylist_css_1 = __importDefault(__webpack_require__(259));
var CheckIcon_1 = __webpack_require__(39);
function CurrencyList(_a) {
    var currencyClass = _a.currencyClass, itemSwitcher = _a.itemSwitcher, type = _a.type;
    var currenciesCodes = ['AUD', 'BTC', 'BYR', 'CAD', 'CHF', 'CNH', 'ETH', 'EUR', 'GBP', 'HKD', 'JPY', 'NZD', 'RUB', 'UAH', 'USD'];
    return (react_1.default.createElement("ul", { className: currencylist_css_1.default.list }, currenciesCodes.map(function (currencyCode) { return (react_1.default.createElement("li", { className: "".concat(currencyClass, " ").concat(currencylist_css_1.default.item), key: currencyCode },
        react_1.default.createElement("a", { className: currencylist_css_1.default.link },
            react_1.default.createElement("span", { className: currencylist_css_1.default.desc }, currencyCode),
            itemSwitcher && type === currencyCode && (react_1.default.createElement("span", { className: currencylist_css_1.default.icon },
                react_1.default.createElement(CheckIcon_1.CheckIcon, { size: 24 })))))); })));
}
exports.CurrencyList = CurrencyList;


/***/ }),
/* 259 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "currencylist__list--3XnTA",
	"link": "currencylist__link--1uXT_",
	"desc": "currencylist__desc--2Xbkh",
	"icon": "currencylist__icon--335gT"
};


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(261), exports);


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyRightDropdown = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var currencyrightdropdown_css_1 = __importDefault(__webpack_require__(262));
var react_redux_1 = __webpack_require__(2);
var currencyToDropdownSwitcherActions_1 = __webpack_require__(32);
var currencyToItemSwitcherActions_1 = __webpack_require__(33);
var currencyToTypeActions_1 = __webpack_require__(34);
var Dropdown_1 = __webpack_require__(14);
var ArrowUpIcon_1 = __webpack_require__(15);
var ArrowDownIcon_1 = __webpack_require__(16);
var DropdownListContainer_1 = __webpack_require__(17);
var CurrencyList_1 = __webpack_require__(48);
function CurrencyRightDropdown() {
    var dropdownSwitcher = (0, react_redux_1.useSelector)(function (state) { return state.currencyToDropdownSwitcher.currencyToDropdownSwitcher; });
    var itemSwitcher = (0, react_redux_1.useSelector)(function (state) { return state.currencyToItemSwitcher.currencyToItemSwitcher; });
    var type = (0, react_redux_1.useSelector)(function (state) { return state.currencyToType.currencyToType; });
    return (react_1.default.createElement("div", { className: currencyrightdropdown_css_1.default.container },
        react_1.default.createElement(Dropdown_1.Dropdown, { dropdownSwitcher: dropdownSwitcher, setDropdownSwitcher: currencyToDropdownSwitcherActions_1.setCurrencyToDropdownSwitcher, button: react_1.default.createElement("button", { className: currencyrightdropdown_css_1.default.button, type: "button" },
                type !== ''
                    ? (react_1.default.createElement("span", { className: currencyrightdropdown_css_1.default.buttonDesc }, type))
                    : (react_1.default.createElement("span", { className: currencyrightdropdown_css_1.default.buttonDesc }, "...")),
                dropdownSwitcher
                    ? (react_1.default.createElement("span", { className: currencyrightdropdown_css_1.default.icon },
                        react_1.default.createElement(ArrowUpIcon_1.ArrowUpIcon, { size: 24 })))
                    : (react_1.default.createElement("span", { className: currencyrightdropdown_css_1.default.icon },
                        react_1.default.createElement(ArrowDownIcon_1.ArrowDownIcon, { size: 24 })))) },
            react_1.default.createElement(DropdownListContainer_1.DropdownListContainer, { targetElementClass: 'currencyRightItem', itemSwitcher: itemSwitcher, type: type, setItemSwitcher: currencyToItemSwitcherActions_1.setCurrencyToItemSwitcher, setType: currencyToTypeActions_1.setCurrencyToType, renderList: function () { return (react_1.default.createElement(CurrencyList_1.CurrencyList, { currencyClass: 'currencyRightItem', itemSwitcher: itemSwitcher, type: type })); } }))));
}
exports.CurrencyRightDropdown = CurrencyRightDropdown;


/***/ }),
/* 262 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "currencyrightdropdown__container--3VZzR",
	"button": "currencyrightdropdown__button--Tyeua",
	"buttonDesc": "currencyrightdropdown__buttonDesc--YB-Mm",
	"icon": "currencyrightdropdown__icon--2q90v"
};


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(264), exports);


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyDetails = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var currencydetails_css_1 = __importDefault(__webpack_require__(265));
var CurrencyMenu_1 = __webpack_require__(266);
var CurrencyContent_1 = __webpack_require__(269);
function CurrencyDetails() {
    return (react_1.default.createElement("div", { className: currencydetails_css_1.default.container },
        react_1.default.createElement(CurrencyMenu_1.CurrencyMenu, null),
        react_1.default.createElement(CurrencyContent_1.CurrencyContent, null)));
}
exports.CurrencyDetails = CurrencyDetails;


/***/ }),
/* 265 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(267), exports);


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyMenu = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var currencymenu_css_1 = __importDefault(__webpack_require__(268));
var Title_1 = __webpack_require__(4);
var Button_1 = __webpack_require__(6);
function CurrencyMenu() {
    return (react_1.default.createElement("div", { className: currencymenu_css_1.default.menu },
        react_1.default.createElement(Title_1.Title, { title: 'Валютные катировки' }),
        react_1.default.createElement(Button_1.Button, { link: '/currency', text: 'Вернуться назад' })));
}
exports.CurrencyMenu = CurrencyMenu;


/***/ }),
/* 268 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "currencymenu__menu--OSxTc"
};


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(270), exports);


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var currencycontent_css_1 = __importDefault(__webpack_require__(271));
var CurrencyExchangeRate_1 = __webpack_require__(272);
function CurrencyContent() {
    return (react_1.default.createElement("div", { className: currencycontent_css_1.default.container },
        react_1.default.createElement(CurrencyExchangeRate_1.CurrencyExchangeRate, null)));
}
exports.CurrencyContent = CurrencyContent;


/***/ }),
/* 271 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(273), exports);


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyExchangeRate = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var currencyexchangerate_css_1 = __importDefault(__webpack_require__(274));
var useCurrenciesExchangeData_1 = __webpack_require__(46);
var Description_1 = __webpack_require__(3);
var CurrenciesPairsList_1 = __webpack_require__(47);
function CurrencyExchangeRate() {
    var currenciesExchange = (0, useCurrenciesExchangeData_1.useCurrenciesExchangeData)();
    return (react_1.default.createElement("div", { className: currencyexchangerate_css_1.default.container },
        react_1.default.createElement(Description_1.Description, { text: 'Изменение курсов в реальном времени' }),
        currenciesExchange !== null
            ? (react_1.default.createElement(CurrenciesPairsList_1.CurrenciesPairsList, { currenciesExchange: currenciesExchange }))
            : (react_1.default.createElement(CurrenciesPairsList_1.CurrenciesPairsList, { currenciesExchange: [] }))));
}
exports.CurrencyExchangeRate = CurrencyExchangeRate;


/***/ }),
/* 274 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "currencyexchangerate__container--2hRUr"
};


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(276), exports);


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banks = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var banks_css_1 = __importDefault(__webpack_require__(277));
var useBanksData_1 = __webpack_require__(278);
var BanksMenu_1 = __webpack_require__(279);
var BanksContent_1 = __webpack_require__(282);
function Banks() {
    var banks = (0, useBanksData_1.useBanksData)();
    return (react_1.default.createElement("div", { className: banks_css_1.default.container },
        react_1.default.createElement(BanksMenu_1.BanksMenu, null),
        react_1.default.createElement(BanksContent_1.BanksContent, { banks: banks })));
}
exports.Banks = Banks;


/***/ }),
/* 277 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useBanksData = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(2);
var banksActions_1 = __webpack_require__(35);
function useBanksData() {
    var banks = (0, react_redux_1.useSelector)(function (state) { return state.banks.banks; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch((0, banksActions_1.setBanksAsync)());
    }, []);
    return banks;
}
exports.useBanksData = useBanksData;


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(280), exports);


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BanksMenu = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var banksmenu_css_1 = __importDefault(__webpack_require__(281));
var Title_1 = __webpack_require__(4);
function BanksMenu() {
    return (react_1.default.createElement("div", { className: banksmenu_css_1.default.menu },
        react_1.default.createElement(Title_1.Title, { title: 'Карта банкоматов' })));
}
exports.BanksMenu = BanksMenu;


/***/ }),
/* 281 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "banksmenu__menu--3F9NY"
};


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(283), exports);


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BanksContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var bankscontent_css_1 = __importDefault(__webpack_require__(284));
var react_yandex_maps_1 = __webpack_require__(285);
function BanksContent(_a) {
    var banks = _a.banks;
    return (react_1.default.createElement("div", { className: bankscontent_css_1.default.container },
        react_1.default.createElement(react_yandex_maps_1.YMaps, null,
            react_1.default.createElement(react_yandex_maps_1.Map, { width: '100%', height: '728px', defaultState: {
                    center: [55.75, 37.57],
                    zoom: 11,
                    controls: ['zoomControl', 'fullscreenControl']
                }, modules: ['control.ZoomControl', 'control.FullscreenControl'] }, banks.map(function (bank) { return (react_1.default.createElement(react_yandex_maps_1.Placemark, { defaultGeometry: [bank.lat, bank.lon] })); })))));
}
exports.BanksContent = BanksContent;


/***/ }),
/* 284 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 285 */
/***/ (function(module, exports) {

module.exports = require("@pbe/react-yandex-maps");

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(287), exports);


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var notfound_css_1 = __importDefault(__webpack_require__(288));
function NotFound() {
    return (react_1.default.createElement("div", { className: notfound_css_1.default.container },
        react_1.default.createElement("p", { className: notfound_css_1.default.error }, "404"),
        react_1.default.createElement("p", { className: notfound_css_1.default.desc }, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430"),
        react_1.default.createElement("a", { className: notfound_css_1.default.link, href: '/' },
            react_1.default.createElement("span", { className: notfound_css_1.default.text }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"))));
}
exports.NotFound = NotFound;


/***/ }),
/* 288 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "notfound__container--1Kd1l",
	"error": "notfound__error--2dqqP",
	"desc": "notfound__desc--YPT4G",
	"link": "notfound__link--1ibl6",
	"text": "notfound__text--1B7zq"
};


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useUser = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(2);
var userActions_1 = __webpack_require__(36);
function useUser() {
    var user = (0, react_redux_1.useSelector)(function (state) { return state.user.user; });
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch((0, userActions_1.setUserAsync)());
    }, [user]);
    return [user];
}
exports.useUser = useUser;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userReducer = void 0;
var reducer_1 = __webpack_require__(1);
var userActions_1 = __webpack_require__(36);
var userReducer = function (state, action) {
    if (state === void 0) { state = reducer_1.initialState.user; }
    switch (action.type) {
        case userActions_1.SET_USER:
            return __assign(__assign({}, state), { user: action.user });
        default:
            return state;
    }
};
exports.userReducer = userReducer;


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountsReducer = void 0;
var reducer_1 = __webpack_require__(1);
var accountsActions_1 = __webpack_require__(19);
var accountsReducer = function (state, action) {
    if (state === void 0) { state = reducer_1.initialState.accounts; }
    switch (action.type) {
        case accountsActions_1.SET_ACCOUNTS:
            return __assign(__assign({}, state), { accounts: action.accounts });
        default:
            return state;
    }
};
exports.accountsReducer = accountsReducer;


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountsBalanceReducer = void 0;
var reducer_1 = __webpack_require__(1);
var accountsBalanceActions_1 = __webpack_require__(24);
var accountsBalanceReducer = function (state, action) {
    if (state === void 0) { state = reducer_1.initialState.accountsBalance; }
    switch (action.type) {
        case accountsBalanceActions_1.SET_ACCOUNTS_BALANCE:
            return __assign(__assign({}, state), { accountsBalance: action.accountsBalance });
        default:
            return state;
    }
};
exports.accountsBalanceReducer = accountsBalanceReducer;


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionsReducer = void 0;
var reducer_1 = __webpack_require__(1);
var transactionsActions_1 = __webpack_require__(20);
var transactionsReducer = function (state, action) {
    if (state === void 0) { state = reducer_1.initialState.transactions; }
    switch (action.type) {
        case transactionsActions_1.SET_TRANSACTIONS:
            return __assign(__assign({}, state), { transactions: action.transactions });
        default:
            return state;
    }
};
exports.transactionsReducer = transactionsReducer;


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currenciesReducer = void 0;
var reducer_1 = __webpack_require__(1);
var currenciesActions_1 = __webpack_require__(28);
var currenciesReducer = function (state, action) {
    if (state === void 0) { state = reducer_1.initialState.currencies; }
    switch (action.type) {
        case currenciesActions_1.SET_CURRENCIES:
            return __assign(__assign({}, state), { currencies: action.currencies });
        default:
            return state;
    }
};
exports.currenciesReducer = currenciesReducer;


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.banksReducer = void 0;
var reducer_1 = __webpack_require__(1);
var banksActions_1 = __webpack_require__(35);
var banksReducer = function (state, action) {
    if (state === void 0) { state = reducer_1.initialState.banks; }
    switch (action.type) {
        case banksActions_1.SET_BANKS:
            return __assign(__assign({}, state), { banks: action.banks });
        default:
            return state;
    }
};
exports.banksReducer = banksReducer;


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortingDropdownSwitcherReducer = void 0;
var reducer_1 = __webpack_require__(1);
var sortingDropdownSwitcherActions_1 = __webpack_require__(11);
var sortingDropdownSwitcherReducer = function (state, action) {
    if (state === void 0) { state = reducer_1.initialState.sortingDropdownSwitcher; }
    switch (action.type) {
        case sortingDropdownSwitcherActions_1.SET_SORTING_DROPDOWN_SWITCHER:
            return __assign(__assign({}, state), { sortingDropdownSwitcher: action.sortingDropdownSwitcher });
        default:
            return state;
    }
};
exports.sortingDropdownSwitcherReducer = sortingDropdownSwitcherReducer;


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyFromDropdownSwitcherReducer = void 0;
var reducer_1 = __webpack_require__(1);
var currencyFromDropdownSwitcherActions_1 = __webpack_require__(29);
var currencyFromDropdownSwitcherReducer = function (state, action) {
    if (state === void 0) { state = reducer_1.initialState.currencyFromDropdownSwitcher; }
    switch (action.type) {
        case currencyFromDropdownSwitcherActions_1.SET_CURRENCY_FROM_DROPDOWN_SWITCHER:
            return __assign(__assign({}, state), { currencyFromDropdownSwitcher: action.currencyFromDropdownSwitcher });
        default:
            return state;
    }
};
exports.currencyFromDropdownSwitcherReducer = currencyFromDropdownSwitcherReducer;


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyToDropdownSwitcherReducer = void 0;
var reducer_1 = __webpack_require__(1);
var currencyToDropdownSwitcherActions_1 = __webpack_require__(32);
var currencyToDropdownSwitcherReducer = function (state, action) {
    if (state === void 0) { state = reducer_1.initialState.currencyToDropdownSwitcher; }
    switch (action.type) {
        case currencyToDropdownSwitcherActions_1.SET_CURRENCY_TO_DROPDOWN_SWITCHER:
            return __assign(__assign({}, state), { currencyToDropdownSwitcher: action.currencyToDropdownSwitcher });
        default:
            return state;
    }
};
exports.currencyToDropdownSwitcherReducer = currencyToDropdownSwitcherReducer;


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortingItemSwitcherReducer = void 0;
var reducer_1 = __webpack_require__(1);
var sortingItemSwitcherActions_1 = __webpack_require__(12);
var sortingItemSwitcherReducer = function (state, action) {
    if (state === void 0) { state = reducer_1.initialState.sortingItemSwitcher; }
    switch (action.type) {
        case sortingItemSwitcherActions_1.SET_SORTING_ITEM_SWITCHER:
            return __assign(__assign({}, state), { sortingItemSwitcher: action.sortingItemSwitcher });
        default:
            return state;
    }
};
exports.sortingItemSwitcherReducer = sortingItemSwitcherReducer;


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyFromItemSwitcherReducer = void 0;
var reducer_1 = __webpack_require__(1);
var currencyFromItemSwitcherActions_1 = __webpack_require__(30);
var currencyFromItemSwitcherReducer = function (state, action) {
    if (state === void 0) { state = reducer_1.initialState.currencyFromItemSwitcher; }
    switch (action.type) {
        case currencyFromItemSwitcherActions_1.SET_CURRENCY_FROM_ITEM_SWITCHER:
            return __assign(__assign({}, state), { currencyFromItemSwitcher: action.currencyFromItemSwitcher });
        default:
            return state;
    }
};
exports.currencyFromItemSwitcherReducer = currencyFromItemSwitcherReducer;


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyToItemSwitcherReducer = void 0;
var reducer_1 = __webpack_require__(1);
var currencyToItemSwitcherActions_1 = __webpack_require__(33);
var currencyToItemSwitcherReducer = function (state, action) {
    if (state === void 0) { state = reducer_1.initialState.currencyToItemSwitcher; }
    switch (action.type) {
        case currencyToItemSwitcherActions_1.SET_CURRENCY_TO_ITEM_SWITCHER:
            return __assign(__assign({}, state), { currencyToItemSwitcher: action.currencyToItemSwitcher });
        default:
            return state;
    }
};
exports.currencyToItemSwitcherReducer = currencyToItemSwitcherReducer;


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortingTypeReducer = void 0;
var reducer_1 = __webpack_require__(1);
var sortingTypeActions_1 = __webpack_require__(13);
var sortingTypeReducer = function (state, action) {
    if (state === void 0) { state = reducer_1.initialState.sortingType; }
    switch (action.type) {
        case sortingTypeActions_1.SET_SORTING_TYPE:
            return __assign(__assign({}, state), { sortingType: action.sortingType });
        default:
            return state;
    }
};
exports.sortingTypeReducer = sortingTypeReducer;


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyFromTypeReducer = void 0;
var reducer_1 = __webpack_require__(1);
var currencyFromTypeActions_1 = __webpack_require__(31);
var currencyFromTypeReducer = function (state, action) {
    if (state === void 0) { state = reducer_1.initialState.currencyFromType; }
    switch (action.type) {
        case currencyFromTypeActions_1.SET_CURRENCY_FROM_TYPE:
            return __assign(__assign({}, state), { currencyFromType: action.currencyFromType });
        default:
            return state;
    }
};
exports.currencyFromTypeReducer = currencyFromTypeReducer;


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyToTypeReducer = void 0;
var reducer_1 = __webpack_require__(1);
var currencyToTypeActions_1 = __webpack_require__(34);
var currencyToTypeReducer = function (state, action) {
    if (state === void 0) { state = reducer_1.initialState.currencyToType; }
    switch (action.type) {
        case currencyToTypeActions_1.SET_CURRENCY_TO_TYPE:
            return __assign(__assign({}, state), { currencyToType: action.currencyToType });
        default:
            return state;
    }
};
exports.currencyToTypeReducer = currencyToTypeReducer;


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionsLoadCounterReducer = void 0;
var transactionsLoadCounterActions_1 = __webpack_require__(8);
var reducer_1 = __webpack_require__(1);
var transactionsLoadCounterReducer = function (state, action) {
    if (state === void 0) { state = reducer_1.initialState.transactionsLoadCounter.transactionsLoadCounter; }
    switch (action.type) {
        case transactionsLoadCounterActions_1.SET_TRANSACTIONS_LOAD_COUNTER:
            return __assign(__assign({}, state), { transactionsLoadCounter: action.transactionsLoadCounter });
        default:
            return state;
    }
};
exports.transactionsLoadCounterReducer = transactionsLoadCounterReducer;


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionsOffsetReducer = void 0;
var transactionsOffsetActions_1 = __webpack_require__(27);
var reducer_1 = __webpack_require__(1);
var transactionsOffsetReducer = function (state, action) {
    if (state === void 0) { state = reducer_1.initialState.transactionsOffset.transactionsOffset; }
    switch (action.type) {
        case transactionsOffsetActions_1.SET_TRANSACTIONS_OFFSET:
            return __assign(__assign({}, state), { transactionsOffset: action.transactionsOffset });
        default:
            return state;
    }
};
exports.transactionsOffsetReducer = transactionsOffsetReducer;


/***/ }),
/* 307 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 308 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 309 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
var indexTemplate = function (content, user) {
    return "\n  <!DOCTYPE html>\n  <html lang=\"ru\">\n  \n  <head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Coin</title>\n    <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n    <script>\n      window.__user__ = JSON.parse('".concat(user, "');\n    </script>\n  </head>\n  \n  <body>\n    <div id=\"react_root\">").concat(content, "</div>\n  </body>\n  \n  </html>\n");
};
exports.indexTemplate = indexTemplate;


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFifteenDigitNumber = void 0;
var generateFifteenDigitNumber = function () {
    var max = Math.pow(10, 15);
    var min = max / 10;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.generateFifteenDigitNumber = generateFifteenDigitNumber;


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrenciesForUser = exports.fillCurrenciesWithData = exports.updateCurrenciesTable = exports.createHash = exports.deleteSession = exports.createSession = exports.findUserBySessionId = exports.findCurrencyByCurrency = exports.findAccountByAccount = exports.findUserByUsername = exports.auth = exports.sendCurrenciesExchangeToAllClients = exports.insertNewValuesForCurrenciesExchange = exports.getAllCurrenciesExchange = void 0;
var generateRandomIndex_1 = __webpack_require__(37);
var generateInsertQueryForCurrencies_1 = __webpack_require__(313);
var generateFiveDigitNumber_1 = __webpack_require__(49);
var server_1 = __webpack_require__(38);
var crypto_1 = __importDefault(__webpack_require__(315));
var getAllCurrenciesExchange = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, server_1.database)('exchange').select()];
}); }); };
exports.getAllCurrenciesExchange = getAllCurrenciesExchange;
var insertNewValuesForCurrenciesExchange = function (oldCurrenciesExchange) { return __awaiter(void 0, void 0, void 0, function () {
    var _i, oldCurrenciesExchange_1, currencyExchange, oldCurrencyExchange;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _i = 0, oldCurrenciesExchange_1 = oldCurrenciesExchange;
                _a.label = 1;
            case 1:
                if (!(_i < oldCurrenciesExchange_1.length)) return [3 /*break*/, 4];
                currencyExchange = oldCurrenciesExchange_1[_i];
                oldCurrencyExchange = currencyExchange.rate;
                currencyExchange.rate = Math.random();
                if (oldCurrencyExchange > currencyExchange.rate) {
                    currencyExchange.change = -1;
                }
                if (oldCurrencyExchange < currencyExchange.rate) {
                    currencyExchange.change = 1;
                }
                return [4 /*yield*/, (0, server_1.database)('exchange')
                        .where({ id: currencyExchange.id })
                        .update({
                        rate: currencyExchange.rate,
                        change: currencyExchange.change
                    })];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/, (0, server_1.database)('exchange').select()];
        }
    });
}); };
exports.insertNewValuesForCurrenciesExchange = insertNewValuesForCurrenciesExchange;
var sendCurrenciesExchange = function (ws, currenciesExchange) {
    ws.send(JSON.stringify({
        type: 'EXCHANGE_RATE_CHANGE',
        currenciesExchange: currenciesExchange
    }));
};
var sendCurrenciesExchangeToAllClients = function (ws, currenciesExchange, clients) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        Array.from(clients.entries()).forEach(function () {
            sendCurrenciesExchange(ws, currenciesExchange);
        });
        return [2 /*return*/];
    });
}); };
exports.sendCurrenciesExchangeToAllClients = sendCurrenciesExchangeToAllClients;
var auth = function () { return function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!req.cookies['sessionId'])
                    return [2 /*return*/, next()];
                _a = req;
                return [4 /*yield*/, (0, exports.findUserBySessionId)(req.cookies['sessionId'])];
            case 1:
                _a.user = _b.sent();
                req.sessionId = req.cookies["sessionId"];
                next();
                return [2 /*return*/];
        }
    });
}); }; };
exports.auth = auth;
var findUserByUsername = function (username) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, (0, server_1.database)('users')
                .select()
                .where({ username: username })
                .first()];
    });
}); };
exports.findUserByUsername = findUserByUsername;
var findAccountByAccount = function (account) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, (0, server_1.database)('accounts')
                .select()
                .where({ number: account })
                .first()];
    });
}); };
exports.findAccountByAccount = findAccountByAccount;
var findCurrencyByCurrency = function (userId, currency) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, (0, server_1.database)(currency)
                .select()
                .where({ userId: userId, code: currency })
                .first()];
    });
}); };
exports.findCurrencyByCurrency = findCurrencyByCurrency;
var findUserBySessionId = function (sessionId) { return __awaiter(void 0, void 0, void 0, function () {
    var session;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, server_1.database)('sessions')
                    .select('userId')
                    .where({ sessionId: sessionId })
                    .first()];
            case 1:
                session = _a.sent();
                if (!session)
                    return [2 /*return*/];
                return [2 /*return*/, (0, server_1.database)('users')
                        .select()
                        .where({ id: session.userId })
                        .first()];
        }
    });
}); };
exports.findUserBySessionId = findUserBySessionId;
var createSession = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
    var sessionId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sessionId = (0, generateRandomIndex_1.generateRandomString)();
                return [4 /*yield*/, (0, server_1.database)('sessions').insert({
                        userId: userId,
                        sessionId: sessionId,
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/, sessionId];
        }
    });
}); };
exports.createSession = createSession;
var deleteSession = function (sessionId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, server_1.database)('sessions').where({ sessionId: sessionId }).delete()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.deleteSession = deleteSession;
var createHash = function (password) {
    var hash = crypto_1.default.createHash("sha256");
    return hash.update(password).digest("hex");
};
exports.createHash = createHash;
var updateCurrenciesTable = function (req, currency, value, amount, rate) { return __awaiter(void 0, void 0, void 0, function () {
    var currencies;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, server_1.database)('currencies')
                    .select()
                    .where({ userId: req.user.id })];
            case 1:
                currencies = (_a.sent())[0];
                if (!(currencies[currency] === 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, server_1.database)(currency)
                        .insert({
                        id: (0, generateRandomIndex_1.generateRandomString)(),
                        userId: req.user.id,
                        amount: server_1.database.raw(Number(amount)),
                        code: currency
                    })];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                currencies[currency] = value;
                return [4 /*yield*/, (0, server_1.database)('currencies')
                        .where({ userId: req.user.id })
                        .update(currencies)];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.updateCurrenciesTable = updateCurrenciesTable;
var fillCurrenciesWithData = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
    var currenciesQueries, currenciesCodes, currenciesWithValues, currenciesValues, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currenciesQueries = (0, generateInsertQueryForCurrencies_1.generateInsertQueryForCurrencies)(userId);
                currenciesCodes = ['AUD', 'BTC', 'BYR', 'CAD', 'CHF', 'CNH', 'ETH', 'EUR', 'GBP', 'HKD', 'JPY', 'NZD', 'RUB', 'UAH', 'USD'];
                return [4 /*yield*/, (0, server_1.database)('currencies').insert(currenciesQueries)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, server_1.database)('currencies')
                        .select()
                        .where({ userId: userId })];
            case 2:
                currenciesWithValues = (_a.sent())[0];
                delete currenciesWithValues.id;
                delete currenciesWithValues.userId;
                currenciesValues = Object.values(currenciesWithValues);
                i = 0;
                _a.label = 3;
            case 3:
                if (!(i < currenciesCodes.length)) return [3 /*break*/, 6];
                if (!(currenciesValues[i] !== 0)) return [3 /*break*/, 5];
                return [4 /*yield*/, (0, server_1.database)(currenciesCodes[i])
                        .insert({
                        id: (0, generateRandomIndex_1.generateRandomString)(),
                        userId: userId,
                        amount: (0, generateFiveDigitNumber_1.generateFiveDigitNumber)(),
                        code: currenciesCodes[i]
                    })];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5:
                i++;
                return [3 /*break*/, 3];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.fillCurrenciesWithData = fillCurrenciesWithData;
var getCurrenciesForUser = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
    var currenciesCodes, currencies, availableCurrencies, currenciesValues, i, currencyData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currenciesCodes = ['AUD', 'BTC', 'BYR', 'CAD', 'CHF', 'CNH', 'ETH', 'EUR', 'GBP', 'HKD', 'JPY', 'NZD', 'RUB', 'UAH', 'USD'];
                currencies = [];
                return [4 /*yield*/, (0, server_1.database)('currencies')
                        .select()
                        .where({ userId: userId })];
            case 1:
                availableCurrencies = (_a.sent())[0];
                delete availableCurrencies.id;
                delete availableCurrencies.userId;
                currenciesValues = Object.values(availableCurrencies);
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i < currenciesCodes.length)) return [3 /*break*/, 5];
                if (!(currenciesValues[i] !== 0)) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, server_1.database)(currenciesCodes[i])
                        .select()
                        .where({ userId: userId })];
            case 3:
                currencyData = (_a.sent())[0];
                delete currencyData.id;
                delete currencyData.userId;
                currencies.push(currencyData);
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/, currencies];
        }
    });
}); };
exports.getCurrenciesForUser = getCurrenciesForUser;


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInsertQueryForCurrencies = void 0;
var generateRandomIndex_1 = __webpack_require__(37);
var generateRandomTrueFalse_1 = __webpack_require__(314);
var generateInsertQueryForCurrencies = function (userId) {
    var currency = {
        id: (0, generateRandomIndex_1.generateRandomString)(),
        userId: userId,
        AUD: (0, generateRandomTrueFalse_1.generateRandomTrueFalse)(),
        BTC: (0, generateRandomTrueFalse_1.generateRandomTrueFalse)(),
        BYR: (0, generateRandomTrueFalse_1.generateRandomTrueFalse)(),
        CAD: (0, generateRandomTrueFalse_1.generateRandomTrueFalse)(),
        CHF: (0, generateRandomTrueFalse_1.generateRandomTrueFalse)(),
        CNH: (0, generateRandomTrueFalse_1.generateRandomTrueFalse)(),
        ETH: (0, generateRandomTrueFalse_1.generateRandomTrueFalse)(),
        EUR: (0, generateRandomTrueFalse_1.generateRandomTrueFalse)(),
        GBP: (0, generateRandomTrueFalse_1.generateRandomTrueFalse)(),
        HKD: (0, generateRandomTrueFalse_1.generateRandomTrueFalse)(),
        JPY: (0, generateRandomTrueFalse_1.generateRandomTrueFalse)(),
        NZD: (0, generateRandomTrueFalse_1.generateRandomTrueFalse)(),
        RUB: (0, generateRandomTrueFalse_1.generateRandomTrueFalse)(),
        UAH: (0, generateRandomTrueFalse_1.generateRandomTrueFalse)(),
        USD: (0, generateRandomTrueFalse_1.generateRandomTrueFalse)()
    };
    return currency;
};
exports.generateInsertQueryForCurrencies = generateInsertQueryForCurrencies;


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomTrueFalse = void 0;
var generateRandomTrueFalse = function () { return Math.random() < 0.5; };
exports.generateRandomTrueFalse = generateRandomTrueFalse;


/***/ }),
/* 315 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 316 */
/***/ (function(module, exports) {

module.exports = require("ws");

/***/ }),
/* 317 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 318 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 319 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 320 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 321 */
/***/ (function(module, exports) {

module.exports = require("knex");

/***/ })
/******/ ]);