import React,{Component} from 'react'
import Twitter_Classe from './Twitter_Classe'
import Twitter_Hooks from './Twitter_Hooks'

class App extends Component{
  state={
    loading:false,
    actived:true
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        loading:true
      })
    },3000)
  }

  onRemove=()=>{
    this.setState({
      actived:false
    })
  }
  
  render(){

    const posts=[{
      title:'xpto',
      description:'foo'
    },{
      title:'xpto',
      description:'foo'
    }]

    return(
      <div>
        <button onClick={this.onRemove}>Remover component</button>
        {this.state.actived && (
          <Twitter_Hooks posts={posts} loading={this.state.loading}/>
        )}
      </div>
    )
  }
}

export default App