import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './asssets/site.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import { AppContextProvider, initialAppState } from './context/AppContext';
import HomeIndex from './containers/home/HomeIndex';
import Login from './containers/identity/Login';
import Page404 from './containers/Page404';
import Register from './containers/identity/Register';
import TransportNeedsIndex from './containers/transportneeds/TransportNeedsIndex';
import TransportNeedDetail from './containers/transportneeds/TransportNeedDetail';
import TransportNeedEdit from './containers/transportneeds/TransportNeedEdit';
import TransportNeedDelete from './containers/transportneeds/TransportNeedDelete';
import TransportNeedCreate from './containers/transportneeds/TransportNeedsCreate';

function App() {
    const setAuthInfo = (token: string | null, firstname: string, lastname: string): void => {
        console.log('setAuthInfo');
        setAppState({...appState, token, firstname, lastname});
    }
    const [appState, setAppState] = useState({...initialAppState, setAuthInfo});
    return (
        <>
            <AppContextProvider value={appState}>
                <Header />
                <div className="container">
                    <main role="main" className="pb-3">
                        <Switch>
                            <Route exact path="/" component={HomeIndex} />
                            <Route path="/identity/login" component={Login} />
                            <Route path="/identity/register" component={Register} />

                            <Route path="/transportneeds/create" component={TransportNeedCreate} />
                            <Route path="/transportneeds/edit/:id" component={TransportNeedEdit} />
                            <Route path="/transportneeds/delete/:id" component={TransportNeedDelete} />
                            <Route path="/transportneeds/:id" component={TransportNeedDetail} />
                            <Route path="/transportneeds" component={TransportNeedsIndex} />
                            <Route component={Page404} />
                        </Switch>
                    </main>
                </div>
                <Footer />
            </AppContextProvider>
        </>
    );
}

export default App;
