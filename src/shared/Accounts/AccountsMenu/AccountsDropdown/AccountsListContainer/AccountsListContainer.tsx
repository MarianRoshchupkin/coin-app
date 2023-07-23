import React, {useEffect} from 'react';
import styles from './accountslistcontainer.css';
import { useDispatch, useSelector } from "react-redux";
import { IInitialState } from "../../../../../store/reducer";
import { setSwitcher } from "../../../../../store/switcher/switcherActions";
import { setSortingType } from "../../../../../store/sortingType/sortingTypeActions";
import { AccountsList } from "./AccountsList";

export function AccountsListContainer() {
  const switcher = useSelector<IInitialState, boolean>(state => state.switcher.switcher);
  const sortingKind = useSelector<IInitialState, string>(state => state.sortingType.sortingType);
  const dispatch = useDispatch();

  const handleClick = (event: MouseEvent) => {
    const targetElement: Element = event.target as Element;
    const targetElementText = targetElement.textContent;

    if (switcher && sortingKind !== targetElementText) {
      return [
        dispatch(setSwitcher(switcher)),
        dispatch(setSortingType(targetElementText))
      ]
    }

    if (switcher && sortingKind === targetElementText) {
      return [
        dispatch(setSwitcher(!switcher)),
        dispatch(setSortingType(''))
      ]
    }

    dispatch(setSwitcher(!switcher));
    dispatch(setSortingType(targetElementText));
  }

  useEffect(() => {
    const liElements: NodeList = document.querySelectorAll('.sortItem');

    liElements.forEach((liElement) =>
      liElement.addEventListener('click', handleClick)
    );

    return () => {
      liElements.forEach((liElement) =>
        liElement.removeEventListener('click', handleClick)
      );
    }
  }, []);

  return (
    <AccountsList switcher={switcher} sortingKind={sortingKind} />
  );
}
