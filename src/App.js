import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Kanal from './components/Kanal';
import Turniri from './components/Turniri';


class App extends Component {
    render() {
     return(
        <BrowserRouter>
            <div>
             <Navbar />
                <Switch>
                    <Route path="/" Component={Pocetna} exact />
                    <Route path="/kanal" Component={Kanal} />
                    <Route path="/turniri" Component={Turniri} />
                    <Route path="/" />
                </Switch>
            </div>
        </BrowserRouter>
     )};
}

export default App;