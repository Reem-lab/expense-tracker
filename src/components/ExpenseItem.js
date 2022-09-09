import { useState } from 'react';
import ExpenseData from './ExpenseData';
import './ExpenseItem.css';
const ExpenseItem = (props) => {
 const [title, setTtile] = useState(props.title);

const titleHandler = () => {
     setTtile('Updated!');
}

  return (
    <div className='expense-item'>
      <ExpenseData date={props.date} />
      <div className='expense-item__description'>
      <h2>{title}</h2>
      <div className='expense-item__price'>{props.amount}</div>
      </div>
      <button onClick={titleHandler}>Change title</button>
    </div>
  )
}

export default ExpenseItem;
