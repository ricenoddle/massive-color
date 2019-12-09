import React from 'react';
import styles from './styles/MiniPaletteStyle';
import {withStyles} from '@material-ui/styles';

function MiniPalette(props){
    const {classes, paletteName, emoji, colors} = props;
    const miniColorBoxes = colors.map(color => (
        <div key={color.name} className={classes.miniColor} style={{backgroundColor: color.color}}></div>
    ));
    
    return (
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>
                {paletteName} 
                <span className="classes.emoji">{emoji}</span>
            </h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);