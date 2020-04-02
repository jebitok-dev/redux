import React from "react"

const ExpenseListItem = props => {
    return (
        <div>
            <Link to ={`/edit/${prop.id}`}> 
            <h3>{props.description}</h3>
            </Link>
            <p>
                {props.amount} = {props.createdAt}
            </p>
        </div>
    )
}

export default ExpenseListItem;
