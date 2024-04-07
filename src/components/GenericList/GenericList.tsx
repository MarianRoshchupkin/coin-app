import React from 'react';
import styles from './genericlist.css';

export interface IItem {
  As?: 'a' | 'li' | 'button' | 'div';
  className?: string;
  id: string;
  text: string;
}

interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({As= 'div', text, className, id}) => (
        <As className={className} key={id} >
          {text}
        </As>
      ))}
    </>
  )
}
