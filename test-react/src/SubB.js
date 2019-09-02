import React, { Component } from 'react'

export default class SubB extends Component {

    render() {
        const {onRateX}=this.props
        return (
            <div>
              <button btn-test="thumb-up" onClick={onRateX(5)} ></button>
            </div>
        )
    }
}
 // 