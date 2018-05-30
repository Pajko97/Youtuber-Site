import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar.js';
import Kanal from './Kanal';
import Turniri from './Turniri';
import Uskoro from './Uskoro';
import Pocetna from './Pocetna';
import Greska from './Greska';

class App extends Component {
    render() {
     return(
       <BrowserRouter>
            <div className="aaaz">
        
             <Navbar />
                <Switch>
                    <Route path="/" component={Pocetna} exact />
                    <Route path="/kanal" component={Kanal} />
                    <Route path="/turniri" component={Turniri} />
                    <Route path="/uskoro" component={Uskoro} />
                    <Route component={Greska} />
                </Switch>
            </div>
            </BrowserRouter>
     );
    }
};

export default App;
