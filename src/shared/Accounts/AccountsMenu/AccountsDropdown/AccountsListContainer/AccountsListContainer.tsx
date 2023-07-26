import React, {useEffect} from 'react';
import styles from './accountslistcontainer.css';
import { useDispatch, useSelector } from "react-redux";
import { IInitialState } from "../../../../../store/reducer";
import { setSortingItemSwitcher } from "../../../../../store/sortingItemSwitcher/sortingItemSwitcherActions";
import { setSortingType } from "../../../../../store/sortingType/sortingTypeActions";
import { AccountsList } from "./AccountsList";

export function AccountsListContainer() {
  const sortingItemSwitcher = useSelector<IInitialState, boolean>(state => state.sortingItemSwitcher.sortingItemSwitcher);
  const sortingType = useSelector<IInitialState, string>(state => state.sortingType.sortingType);
  const dispatch = useDispatch();

  const handleClick = (event: MouseEvent) => {
    const targetElement: Element = event.target as Element;
    const targetElementText = targetElement.textContent;

    if (sortingItemSwitcher && sortingType !== targetElementText) {
      return [
        dispatch(setSortingItemSwitcher(sortingItemSwitcher)),
        dispatch(setSortingType(targetElementText))
      ]
    }

    if (sortingItemSwitcher && sortingType === targetElementText) {
      return [
        dispatch(setSortingItemSwitcher(!sortingItemSwitcher)),
        dispatch(setSortingType(''))
      ]
    }

    dispatch(setSortingItemSwitcher(!sortingItemSwitcher));
    dispatch(setSortingType(targetElementText));
  }

  useEffect(() => {
    const items: NodeList = document.querySelectorAll('.sortItem');

    items.forEach((item) =>
      item.addEventListener('click', handleClick)
    );

    return () => {
      items.forEach((item) =>
        item.removeEventListener('click', handleClick)
      );
    }
  }, []);

  return (
    <AccountsList sortingItemSwitcher={sortingItemSwitcher} sortingType={sortingType} />
  );
}
