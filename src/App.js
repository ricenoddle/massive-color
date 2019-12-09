import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import {generatePalette} from './colorHelpers';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      palettes: seedColors
    }
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }
  findPalette(id){
    return this.state.palettes.find(palette => palette.id === id);
  }
  savePalette(newPalette){
    this.setState({
      palettes: [...this.state.palettes, newPalette]
    })
  }
  render(){
    return (
      <Switch>
        <Route exact 
               path="/" 
               render={(routeProps) => <PaletteList palettes={this.state.palettes} {...routeProps} />}
        />
        <Route exact
               path="/palette/new"
               render={(routeProps) => <NewPaletteForm savePalette={this.savePalette} {...routeProps}/>} 
        />
        <Route exact 
               path="/palette/:id" 
               render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />}
        />
        <Route exact 
               path="/palette/:paletteId/:colorId" 
               render={(routeProps) => 
               <SingleColorPalette 
                palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
                colorId={routeProps.match.params.colorId} />}
        />
        <Route render={() => <h1>404 Not Found! </h1>}/>
      </Switch>
    );
  }
}

export default App;
