import React,{useState} from 'react';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';
const Expenses = (props) => {
const [enteredDate,setEnteredDate]=useState('2020');
const needDate=(pickedDate)=>{
setEnteredDate(pickedDate);
}

const filterYear=props.item.filter((item)=>{
return item.date.getFullYear().toString()===enteredDate;
})


  return (
    <>
    <Card className='expenses'>
    <ExpensesFilter selectedDate={needDate} selected={enteredDate}/>
     <ExpenseChart expenses={filterYear}/>
    <ExpensesList items={filterYear}/>
    </Card>
    </>
  )}
  

export default Expenses