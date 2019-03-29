import React, { Component } from 'react';


class Create extends Component {
  constructor(){
    super()
    this.state ={
      name: '',
      hp: 0,
      atk: 0,
      def: 0,
      money: 30
    }
  }

  CreateBot = () => {
    console.log(this.state)

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
  IncreaseStat(stat){
    if(this.state.money>0){this.setState({
  [stat]: ++this.state[stat],
  money: --this.state.money
})}
  
  }
  render() {
    return (
      <div className="Create">
        <div className='CreateBotBoxDiv'>
        <h1>Create Your Nodemon</h1>
        <div className='InputDivBox'>
          <div>
            Name:
            {/* <input type="text" className='InputDiv' onChange={e => this.updateName(e.target.value,'name')}/> */}
            {this.state.name}
          </div>
          <br/>
          <div>
            HP:
            {/* <input type="integer" placeholder='name' className='InputDiv' onChange={e => this.updateState(e.target.value,'hp')}/> */}
         
            <button onClick={() => this.IncreaseStat('hp')}>Add HP</button>
            {this.state.hp}
          </div>
          <br/>
          <div>
            Attack
            {/* <input type="integer" placeholder='atk' className='InputDiv' onChange={e => this.updateState(e.target.value,'atk')}/> */}
            <button onClick={() => this.IncreaseStat('atk')}>Add atk</button>
            {this.state.atk}
          </div>
          <br/>
          <div>
            Defense:
            {/* <input type="integer" placeholder='def' className='InputDiv' onChange={e => this.updateState(e.target.value,'def')}/> */}
            <button onClick={() => this.IncreaseStat('def')}>Add Def</button>
            {this.state.def}
            
          </div>
          <br/>
        </div>
          

          <h3>{this.state.money}</h3>
          <div><button onClick={() => this.CreateBot()}>Create</button></div>
          <div><button onClick={() => this.ClearState()}>Clear</button></div>
        </div>
     
      </div>
    );
  }
}

export default Create;
