import React, {Component} from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

import './SingleColorPalette.css';
import Palette from './Palette';

class SingleColorPalette extends Component{
    constructor(props){
        super(props);
        this.state = {
            format: "hex"
        }
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeFormat(val){
        this.setState({
            format: val
        })
    }

    gatherShades(palette, colorToFilterBy){
        let shades = [];
        let allColors = palette.colors;
        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }
        //return all shades of given color
        return shades.slice(1);
    }
    render(){
        const {paletteName, emoji} = this.props.palette;
        const {format} = this.state;
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.name} 
                      name={color.name} 
                      background={color[format]} 
                      showLink={false}
                      single={true}/>
        ));
        return(
            <div className="Palette">
                <Navbar handleChange={this.changeFormat} showSlider={false}/>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default SingleColorPalette;