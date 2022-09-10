import React, { useState } from 'react'
import './ExpenseForm.css';

const ExpenseForm = ( props ) => {
     const [title, setTitle] = useState('');
     const [amount, setAmount] = useState('');
     const [date, setDate] = useState('');

     const changeTitle =  ( event ) => {
        setTitle(event.target.value);
     }

     const changeAmount =  ( event ) => {
      setAmount(event.target.value);
   }

   const changeDate =  ( event ) => {
    setDate(event.target.value);
 }

 const submitFormInputs = ( event ) => {
  event.preventDefault();

     const expense = {
      title: title,
      amount: amount,
      date: new Date(date)
     }

     console.log(expense);
     props.onSaveExpenseData(expense);
     setTitle('');
     setAmount('');
     setDate('');
 }

  return (
    <form onSubmit={submitFormInputs}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
        <label>Title</label>
        <input type="text"  value={title} onChange={changeTitle}/>
        </div>
        <div className='new-expense__control'>
        <label>Amount</label>
        <input type="number" min="0.01" value={amount} step="0.01" onChange={changeAmount}/>
        </div>
        <div className='new-expense__control'>
        <label>Date</label>
        <input type="date" value={date} onChange={changeDate} />
        </div>
        <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm
