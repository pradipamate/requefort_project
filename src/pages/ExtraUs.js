import React, { Component} from 'react';


const Extraus = mycomponent => {
  class Extraus extends Component {
    constructor(props) {
        super(props);
          this.state = { 
            user: sessionStorage.getItem("user"),
          }
    }
    // componentDidMount() {
    //     alert();
    //     console.log(this.state.localStorageAvailable);
    // }
    render() { 
        return (
            <div>
                <mycomponent
                user={this.state.user} {...this.props} />
                console.log(this.state.user);
            </div>  
        );
    }
 }
   return Extraus;
}

export default Extraus;


   
  
//     componentDidMount() {
//        this.checkLocalStorageExists();
//     }
  
//     checkLocalStorageExists() {
//       const testKey = 'test';

//       try {
//           localStorage.setItem(testKey, testKey);
//           localStorage.removeItem(testKey);
//           this.setState({ localStorageAvailable: true });
//       } catch(e) {
//           this.setState({ localStorageAvailable: false });
//       } 
//     }
  
//     load = (key) => {
//       if (this.state.localStorageAvailable) {
//         return localStorage.getItem(key); 
//       }
      
//       return null;
//     }
    
//     save = (key, data) => {
//       if (this.state.localStorageAvailable) {
//         localStorage.setItem(key, data);
//       }
//     }
    
//     remove = (key) => {
//       if (this.state.localStorageAvailable) {
//         localStorage.removeItem(key);
//       }
//     }
    
//     render() {
//       return (
//         <WrappedComponent
//           load={this.load}
//           save={this.save}
//           remove={this.remove}
//           {...this.props}
//         />
//       );
//     }
//   }
    
//   return HOC; 


