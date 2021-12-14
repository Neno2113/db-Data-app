import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
// import { Employee } from './components/Employee'
import { store } from './store/store';
import './assets/bootstrap.min.css';
import './assets/signin.css';

export const BdData = () => {
    return (
        <div>
            <Provider store={ store }>
                <AppRouter />

            </Provider>
        </div>
    )
}
