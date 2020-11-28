import React from 'react'

export default class Alert extends React.Component{
    render(){
        return (
            <div style= {{color: "red"}} >{this.props.count > 60 ? "Peligro! la cantidad de segundos ha excedido el limite!!!" : ""}</div>
        );
    }
}