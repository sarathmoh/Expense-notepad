import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
const [shown,setShown]=useState(false); 
  

  const getData=(data)=>{
   const recievedGetData={
    ...data,
    id:Math.random().toString()
   }
   console.log(recievedGetData);
   props.getFormData(recievedGetData);
  }
 
  const showForm=()=>{
  setShown(true);
  }
 
  const ChangeMode=()=>{
  setShown(false);  
  }
  
  
  return (
    <div className='new-expense'>
     {!shown &&<button onClick={showForm}>Add Expense</button>}
     {shown &&<ExpenseForm onCollectData={getData} OnCancel={ChangeMode} />}
    </div>
  )
}

export default NewExpense