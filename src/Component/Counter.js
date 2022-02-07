import React from "react"

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count : 0,
            inp : ''
        }
        console.log('1 Initialisation')
    }
    increment=(a)=> this.setState({count : this.state.count + a})
    decrement=()=> this.state.count > 0 && this.setState({count : this.state.count - 1})
    componentDidMount(){
        console.log('3 Mount')
        document.title = 'HI'
    }
    componentDidUpdate(){
        console.log('4 Update')
        document.title = this.state.count
    }
    componentWillUnmount(){
        console.log('5 Unmount')
        document.title = 'Bye'
    }
    render(){
        console.log('2 Render')
        const {textH} = this.props
        return(
            <div>
                <h2>{textH}</h2>
                <h2>Counter Component</h2>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={()=>this.increment(5)}>+</button>
                <input onChange={(e)=> this.setState({inp : e.target.value})}/>
                <h2>{this.state.inp}</h2>

            </div>
        )
    }
}

export default Counter