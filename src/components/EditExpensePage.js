import React from 'react'
//use curly braces when using return
//react-router-dom gives us the object(props),match,params & id 
const EditExpensePage = (props) => {
    console.log(props);
    return ( 
    <div> 
        Editing the expense with id of {props.match.params.id} 
    </div>
    )
}

export default EditExpensePage;