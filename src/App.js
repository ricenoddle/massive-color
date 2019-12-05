import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalette} from './colorHelpers';

class App extends Component{
  findPalette(id){
    return seedColors.find(palette => palette.id === id);
  }
  render(){
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>dfdfdf</h1>}/>
        <Route exact path="/palette/:id" 
               render={(routeProps) => 
                <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />}
        />
        <Route render={() => <h1>404 Not Found! </h1>}/>
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])}/>
      // </div>
    );
  }
}

export default App;
