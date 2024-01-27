import React from 'react'

export default class WillmountComponent extends React.Component
{
    componentWillUnmount()
    {
        alert("WillmountComponent")
    }
   render()
   {
    return(
        <div>
            <h2>WillmountComponent</h2>
        </div>
    )
   }
}