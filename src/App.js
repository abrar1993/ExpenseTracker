import React,{useState,useEffect} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

let DUMMY_EXPENSE=[
  {
    id:'e1',
    title:'School Fee',
    amount:250,
    date:new Date(2022,6,10)
  },
  {
    id:'e2',
    title:'Health Insurance',
    amount:500,
    date:new Date(2022,6,5)
  },
  {
    id:'e3',
    title:'House Rent',
    amount:1000,
    date:new Date(2022,6,1)
  },
  {
    id:'e4',
    title:'Food',
    amount:1250,
    date:new Date(2022,6,15)
  }
];
const App=()=> {
  
const [expenses,setExpenses]=useState(DUMMY_EXPENSE);

useEffect(()=>{
  fetch('https://techgun.website/sample/api/read.php').then(
      response => {
          return response.json();
      }
  ).then(
      data => {
          // console.log(data);
          setExpenses(data);
      }
  );


},[]);
const addExpenseHandler=(expense)=>{
  const updatedExpense=[expense,...expenses];
  setExpenses(updatedExpense);
}

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}/>
      
    </div>
  );
}

export default App;
