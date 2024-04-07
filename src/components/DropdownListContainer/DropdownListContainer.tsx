import React, {ReactElement, useEffect} from 'react';
import styles from './dropdownlistcontainer.css';
import { useDispatch } from "react-redux";

interface IDropdownListContainerProps {
  targetElementClass: string;
  itemSwitcher: boolean;
  type: string;
  setItemSwitcher: (itemSwitcher: boolean) => void;
  setType: (type: string) => void;
  renderList: () => ReactElement
}

export function DropdownListContainer(props: IDropdownListContainerProps) {
  const dropdownList = props.renderList();
  const dispatch = useDispatch();

  const handleClick = (event: MouseEvent) => {
    const targetElement: Element = event.target as Element;
    const targetElementText = targetElement.textContent;

    if (props.itemSwitcher && props.type !== targetElementText) {
      return [
        dispatch(props.setItemSwitcher(props.itemSwitcher)),
        dispatch(props.setType(targetElementText))
      ]
    }

    if (props.itemSwitcher && props.type === targetElementText) {
      return [
        dispatch(props.setItemSwitcher(!props.itemSwitcher)),
        dispatch(props.setType(''))
      ]
    }

    dispatch(props.setItemSwitcher(!props.itemSwitcher));
    dispatch(props.setType(targetElementText));
  }

  useEffect(() => {
    const items: NodeList = document.querySelectorAll(`.${props.targetElementClass}`);

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
    <div>
      {dropdownList}
    </div>
  );
}
