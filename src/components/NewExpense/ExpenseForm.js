import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [title,setTitle]=useState("");
  const [amount,setAmount]=useState("");
  const [date,setDate]=useState("");
 

  const titleHandler=(event)=>{
   setTitle(event.target.value);
  }

  const amountHandler=(event)=>{
    setAmount(event.target.value);
   }

   const dateHandler=(event)=>{
    setDate(event.target.value);
   }
   
   const submitHandler=(event)=>{
    event.preventDefault();
    const formData={
      title:title,
      amount: +amount,
      date:new Date(date)

    }
    props.onCollectData(formData)
    props.OnCancel();

    setTitle('');
    setAmount('');
    setDate('');
   }
  return (
    <form onSubmit={submitHandler}> 
    <div className='new-expense__controls'>
    <div className='new-expense__control'>
     <label >Title</label>   
     <input type='text' onChange={titleHandler} value={title}/>
    </div>
   <div className='new-expense__control'>
     <label>Amount</label>   
     <input type='number' min="0.01" step="0.01" onChange={amountHandler} value={amount}/>
     </div>
   <div className='new-expense__control'>
     <label>Date</label>   
     <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateHandler} value={date}/>

   </div>
   </div>

   <div className='new-expense__actions'>
   <button type='submit'>Add Expense</button>
   <button type='button' onClick={props.OnCancel}>cancel</button>
   </div>
</form>
  )
}

export default ExpenseForm