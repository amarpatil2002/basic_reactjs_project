import React, { Component } from "react";
import Willmount from './Willmount'
// export default class Lifecyclemethod extends React.Component 
// {
//     constructor()
//     {
//         super();
//         console.log("Constructing Lifecycle");
//     }
//     render()
//     {
//         console.log("rendering...");
//         return(
//             <>
//              <h3>Life Cycle Methods : constructor</h3>
//             </>
//         )
//     }
// }

// componentDidMount method
// export default class Didmount extends React.Component 
// {

//     constructor()
//     {
//         super()
//         this.state = {
//             name:"Amar"
//         }
//         // console.warn("Constructor called");
//     }

//     componentDidMount()
//     {
//         console.warn("ComponentDidMount called");
//     }
//     render()
//     {
//         console.warn("render called");
//         return(
//             <div>
//                 <h2>component DidMount {this.state.name}</h2>
//                 <button onClick={() => this.setState({name:"Ram"})}>Update Name</button>
//             </div>
//         )
//     }
// }

// componentDidupdate method
// export default class Didupdate extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count : 0
//         }

//         console.log("construct");
//     }

//     componentDidUpdate(preprops , prestate , snapshot)
//     {
//         if(this.state.count < 10)
//         {
//             this.setState({count : this.state.count + 1});
//             console.log("didUpdate" , prestate.count);
//         }
//     }

//     render() {
//         console.log("rendering...");
//         return (
//             <div>
//                 <h2>Component Didupdate method {this.state.count}</h2>
//                 <button onClick={() => this.setState({count:1})}>Didupdate</button>
//             </div>
//         )
//     }
// }

// ShouldcomponentUpdate method
// export default class ShouldcomponentUpdate extends React.Component 
// {
//     constructor()
//     {
//         super();
//         this.state = {
//             count:0
//         }
//     }

//     shouldComponentUpdate()
//     {
//         console.log("shouldComponentUpdate" , this.state.count);
//         if(this.state.count > 5 && this.state.count < 10)
//         {
//             return true;
//         }
        
//     }

//     render()
//     {
//         return(
//             <div>
//                 <h2>ShouldcomponentUpdate method {this.state.count}</h2>
//                 <button onClick={() => this.setState({count:this.state.count + 1})}>ShouldcomponentUpdate</button>
//             </div>
//         )
//     }
// }

// ComponentWillmount method
// export default class WillmountComponent extends Component
// {
//     constructor()
//     {
//         super()
//         this.state ={
//            show : true
//         }    
//     }
//    render()
//    {
//     return(
//         <div>
//             { this.state.show ? <Willmount /> : <h3>Remove the component</h3>}
//             <button onClick={() => {this.setState({show:!this.state.show})}}>WillmountComponent</button>
//         </div>
//     )
//    }
// }

