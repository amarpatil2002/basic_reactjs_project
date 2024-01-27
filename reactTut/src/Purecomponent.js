import React,{Component, PureComponent, useState} from 'react'

export default class PureComp extends PureComponent 
{
    constructor()
    {
        super();
        this.state = {
            count:1
        }
    }
    render()
    {
        console.log("count called");
        return(
            <>
              <h2>This is pure component {this.state.count}</h2>
              <button onClick={() => this.setState({count:1})}> Update count</button>
            </>
        )
    }
}