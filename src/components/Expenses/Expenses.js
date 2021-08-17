import React from 'react';
import "./Expenses.css";
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from "react";


const Expenses = (props) => {

    const [filteredYear , setFilteredYear] = useState("2020");

    const filterChangeHandler =  (selectedYear) => {
        console.log("In Expenses.js");
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    return (
        <div>
        <Card className = "expenses">
            <ExpenseFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}></ExpenseFilter>
            <ExpenseItem title = {props.myArray[0].title}  amount = {props.myArray[0].amount} date = {props.myArray[0].date}></ExpenseItem>
            <ExpenseItem title = {props.myArray[1].title}  amount = {props.myArray[1].amount} date = {props.myArray[1].date}></ExpenseItem>
            <ExpenseItem title = {props.myArray[2].title}  amount = {props.myArray[2].amount} date = {props.myArray[2].date}></ExpenseItem>
            <ExpenseItem title = {props.myArray[3].title}  amount = {props.myArray[3].amount} date = {props.myArray[3].date}></ExpenseItem>
        </Card>
        </div>
    );
}

export default Expenses;