import React, { Component } from 'react'

export default class SubC1 extends Component {
    render() {
        const {album}=this.props
        return (
            <li>
                <h3>{album.id}</h3>
                
            </li>
        )
    }
}
