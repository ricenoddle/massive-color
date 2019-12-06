import React, {Component} from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import {withStyles} from '@material-ui/styles';
import styles from './styles/PaletteStyle';
import './Palette.css';

class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {
            level: 500,
            format: "hex"
        };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level){
        this.setState({
            level
        })
    }

    changeFormat(val){
        this.setState({
            format: val
        })
    }

    render(){
        const {colors, paletteName, emoji, id} = this.props.palette;
        const {classes} = this.props;
        const {level, format} = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox key={color.id} 
                      background={color[format]} 
                      name={color.name} 
                      id={color.id} 
                      paletteId={id} 
                      showingFullPalette={true}
            />
        ))
        return (
            <div className={classes.palette}>
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showSlider={true}/>
                {/* Navbar goes here */}
                <div className={classes.colors}>
                    {/* bunch of color boxes */}
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
                {/* footer eventually */}
            </div>
        )
    }
}

export default withStyles(styles)(Palette);