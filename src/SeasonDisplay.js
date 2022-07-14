import './SeasonDisplay.css';
import React from 'react';

const seasonConfig={
    summer:{
        text:'lets hit the beach',
        iconName:'sun',
    },
    winter:{
        text:'burr, it is chilly',
        iconName:'snowflake'
    }

}
const getSeason=(lat,month)=>{
     if(month>2 && month<9){
     return lat>0?'summer':'winter';
    }
     else{
     return lat<0?'winter':'summer';
     }

 }
const SeasonDisplay = props => {
    const season = getSeason(props.let,new Date().getDate());
    console.log(season);
    const {text, iconName}=seasonConfig[season];
    return (
        <div className={`season-display ${season}` }>
            <i className={`icon-left massive ${iconName} icon` }/>
            <h1>{text}</h1>
            <i className={`massive icon-right ${iconName} icon` }/>

        </div>
    )
}

export default SeasonDisplay;
