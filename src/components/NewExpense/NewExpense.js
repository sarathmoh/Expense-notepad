import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const getData=(data)=>{
   const recievedGetData={
    ...data,
    id:Math.random().toString()
   }
   console.log(recievedGetData);
   props.getFormData(recievedGetData);
  }
  
  return (
    <div className='new-expense'>
    <ExpenseForm onCollectData={getData}/>
    </div>
  )
}

export default NewExpense