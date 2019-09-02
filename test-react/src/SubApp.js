/*

const SubApp=({album})=>(
    <div>
        <h1 data-test="title" >{album.title}</h1>
        <h2>{album.artist.join('-')}</h2>
        <img src={album.coverUrl} alt=''/>
        <button value={"aa"} onClick={onRate}></button>
    </div>
)
export default  SubApp
*/

import React, { Component } from 'react'
import SubB from './SubB'

export default class SubApp extends Component {
    
    render() {
        const {album}=this.props
        const {onRate}=this.props
        const {onRateX}=this.props
        return (
            <div>
                <h1 data-test="title" >{album.title}</h1>
                <h2>{album.artist.join('-')}</h2>
                <img src={album.coverUrl} alt=''/>
                <button onClick={onRate}></button>
                <SubB onRateX={onRateX}/>
                     
            </div>
        )
    }
}
