import React, { Component } from "react";

export class Header extends Component {
    render() {
        return(
            <div style={{textAlign : "center"}}>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default Header;