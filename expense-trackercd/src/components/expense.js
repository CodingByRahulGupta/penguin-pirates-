import React,{useState} from "react";
import "./expense.css";

export default function Expense(){
    const [transactions,setTransactions]=useState([]);
    const[amount,setAmount]=useState("");
    const[description,setDescription]=useState("");
    const[total,setTotal]=useState(0);

    // add a new transaction 
    const addTransaction=()=>{
        if(description.trim() && amount.trim()){
            const newTransaction={
                description,
                amount:parseFloat(amount),
                id:Date.now(),
            };
            setTransactions([...transactions,newTransaction]);
            setTotal(total+parseFloat(amount));
            setAmount("");
            setDescription("");

        }
    };

    const removeTransaction=(id,amount)=>{
        setTransactions(transactions.filter((transaction)=>transaction.id!==id));
        setTotal(total-amount);
    }

    return(
        <div className="expense-tracker">
            <h1> Expense Tracker</h1>
            <div classname="tracker-form">
                <input 
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)}

                />
                <button onClick={addTransaction}>Add Transaction</button>

            </div>
            <div className="tracker-summary">
                <h2>Total:Rs {total.toFixed(2)}</h2>
            </div>
            <ul className="transaction-list">
                {transactions.map((transaction)=>(
                    <li key={transaction.id} className="transaction-item">
                        <span>{transaction.description}</span>
                        <span>${transaction.amount.toFixed(2)}</span>
                        <button
                        className="delete-btn"
                        onClick={()=>removeTransaction(transaction.id,transaction.amount)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}
