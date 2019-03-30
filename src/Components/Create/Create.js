import React, { Component } from 'react';
import {connect} from 'react-redux'



class Create extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      hp: 0,
      atk: 0,
      def: 0,
      money: 30
    }
  }

componentDidMount(){

}
  CreateBot = async() => {
    await this.props.dummyArr.push(this.state)
      this.props.history.push('/Collection')
  }
  updateState(value, key){
    this.setState({
      [key]: value,
      money: this.state.money - value
    })
  }
  updateState(value, key){
    this.setState({
      [key]: value,
      money: this.state.money - value
    })
  }
  ClearState(){
    this.setState({
      name: '',
      hp: 0,
      atk: 0,
      def: 0,
      money: 30
    })
  }
  updateName(value, key){
    this.setState({
      [key]: value
    })
  }
  IncreaseHP(stat){
    if(this.state.money>0){
      this.setState({
        [stat]: ++this.state[stat],
        money: --this.state.money
      })
    }
  }
  DecreaseHP(stat){
    if(this.state[stat]>0){
      this.setState({
        [stat]: --this.state[stat],
        money: ++this.state.money
      })
    }
  }
  IncreaseStat(stat){
    if(this.state.money>0){
      this.setState({
        [stat]: this.state[stat]+2,
        money: this.state.money-2
      })
    }
  }
  DecreaseStat(stat){
    if(this.state[stat]>0){
      this.setState({
        [stat]: this.state[stat]-2,
        money: this.state.money+2
      })
    }
  }
  render() {
    return (
      <div className="Create">
        <div className='CreateBotBoxDiv'>
        <h1>Create Your Nodemon</h1>
        <div className='InputDivBox'>
          <div>
            Name:
            <input type="text" className='InputDiv' onChange={e => this.updateName(e.target.value,'name')}/>
            {this.state.name}
          </div>
          <br/>
          <div>
            HP:
            {/* <input type="integer" placeholder='name' className='InputDiv' onChange={e => this.updateState(e.target.value,'hp')}/> */}
         
            <button onClick={() => this.IncreaseHP('hp')}>+ HP</button>
            <button onClick={() => this.DecreaseHP('hp')}>- HP</button>
            {this.state.hp}  (Costs 1)
          </div>
          <br/>
          <div>
            Attack
            {/* <input type="integer" placeholder='atk' className='InputDiv' onChange={e => this.updateState(e.target.value,'atk')}/> */}
            <button onClick={() => this.IncreaseStat('atk')}>+ atk</button>
            <button onClick={() => this.DecreaseStat('atk')}>- atk</button>
            {this.state.atk}  (Costs 2)
          </div>
          <br/>
          <div>
            Defense:
            {/* <input type="integer" placeholder='def' className='InputDiv' onChange={e => this.updateState(e.target.value,'def')}/> */}
            <button onClick={() => this.IncreaseStat('def')}>+ Def</button>
            <button onClick={() => this.DecreaseStat('def')}>- Def</button>
            {this.state.def}(Costs 2)
            
          </div>
          <br/>
        </div>
          <h3>Money:{this.state.money}</h3>
          <div><button onClick= {() => this.CreateBot()}>Create</button></div>
          <div><button onClick={() => this.ClearState()}>Clear</button></div>
        </div>
     
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
   dummyArr: reduxState.dummyArr
  }
}

const mapDispatchToProps = {
  
}

export default connect (mapStateToProps, mapDispatchToProps)(Create)


