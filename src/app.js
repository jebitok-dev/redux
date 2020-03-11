import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
        <div> 
            This is from my dashboard page
        </div>
)

const AddExpensePage = () => (
    <div> 
        This is from my add expense component
    </div>
)

const EditExpensePage = () => (
    <div> 
        This is from my edit expense component
    </div>
)

const HelpPage = () => (
    <div> 
        This is from my help component
    </div>
)

const NotFoundPage = () => (
    <div>
        404 Not Found
    </div>
)
const routes = (
    <BrowserRouter>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/> {/*exact matches*/}
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
    </BrowserRouter>
)


ReactDOM.render(routes, document.getElementById('app'));
