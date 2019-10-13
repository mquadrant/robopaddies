import React,{Component} from 'react';

export default class ErrorBoundry extends Component{
    state:any;
constructor(props:any){
    super(props);
    this.state = {
        hasError: false
    }
}
componentDidCatch(_error:any,_info:any){
this.setState({hasError:true})
}

render(){
    return (
        <>
        {this.state.hasError?(<h1 style={{textAlign:"center"}}>Oooops. That is not good</h1>):
            (this.props.children )}
    </>);
}
    
}