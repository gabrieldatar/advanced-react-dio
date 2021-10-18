import React,{Component} from 'react'
import ErrorImg from './error.jpg'

class ErrorBoudary extends Component{

     constructor(props){
          super(props)
          this.state={
               hasError:false
          }
     }

     componentDidCatch(error,errorInfo){
          console.log('error',error)
          console.log('errorInfo',errorInfo)
          this.setStage({
               hasError:true
          })
     }

     render(){
          if(this.state.hasError){
               return <img src={ErrorImg}/>
          }
          return this.props.children
     }
}

export default ErrorBoudary