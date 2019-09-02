import React, { Component } from 'react'
import SubC1 from './SubC1'
export default class SubC extends Component {
    render() {
        const {albums}=this.props
        return (
            <div>
                <ul>
                    {albums.map(album=>
                        <SubC1 key={album.id} album={album}></SubC1>
                    )}
                </ul>
            </div>
        )
    }
}
