import React, { Component } from 'react';
import {connect} from 'react-redux'

class Collection extends Component {
  constructor(){
    super()
    this.state = {
      bot1: {},
      bot2: {},
      dummybotarr: [
        {
          name: 'Bob',
          hp: 10,
          atk: 5,
          def: 5
        },
        {
          name: 'Harry',
          hp: 20,
          atk: 5,
          def: 10
        },
        {
          name: 'Steve',
          hp: 20,
          atk: 10,
          def: 0
        },
      ]
    }
  }
  AddToArena(name){
    if(!this.state.bot1.name){
      this.setState({
        bot1: name
      })
    }else{ 
      this.setState({
        bot2: name
      })
    }
  }
  ClearArena(){
    this.setState({
      bot1: '',
      bot2: ''
    })
  }
  Fight(){
    let bot1 = this.state.bot1
    let bot2 = this.state.bot2
    console.log({bot1}, {bot2})
    if(bot2.hp>0){
      bot2.hp = bot2.hp - (bot1.atk>bot2.def ? bot1.atk-bot2.def : 1)
      console.log(bot2.hp)
    }else{
      alert(`${this.state.bot1.name} Wins`)
    }
    if(bot1.hp>0){
      bot1.hp = bot1.hp - (bot2.atk>bot1.def ? bot2.atk-bot1.def : 1)
    }else{
      alert(`${this.state.bot2.name} Wins`)
    }
    console.log({bot1}, {bot2})
    this.setState({
      bot1: bot1,
      bot2: bot2
    })
  }
  render() {
    console.log(this.props)
    const collectionDiv = this.props.dummyArr.map( bot => {
      return <div className='SingleBot'>
        <h1>Name: {bot.name}</h1>
        <div>HP: {bot.hp}</div>
        <div>Atk: {bot.atk}</div>
        <div>Def: {bot.def}</div>
        <div className='BotButtonDiv'>
          <button onClick={() => this.AddToArena(bot)}>Add to Arena</button>
          <button>Delete</button>
        </div>
      </div>
    })
    return (
      <div className="Collection">
        <div className='BattleDiv'>
        
          <div className='FightingBot'>
            <h4>Bot #1: {this.state.bot1.name} </h4>
            <h4>HP: {this.state.bot1.hp}</h4>
            <h4>Attack: {this.state.bot1.atk}</h4>
            <h4>Defense: {this.state.bot1.def}</h4>
          </div> 
            <button onClick={() => this.Fight()}>fight</button>
            <button onClick={() => this.ClearArena()}>clear</button>
          <div className='FightingBot'>
            <h4>Bot #2: {this.state.bot2.name}</h4>
            <h4>HP: {this.state.bot2.hp}</h4>
            <h4>Attack: {this.state.bot2.atk}</h4>
            <h4>Defense: {this.state.bot2.def}</h4>
          </div>
        <div>
          
          </div>
          
        </div>
         
          <div className='CollectionDiv'>{collectionDiv}</div>

      </div>
     
      
    );
  }
}

const mapStateToProps = (reduxState) => {
  console.log(11111, reduxState)
  return {
   dummyArr: reduxState.dummyArr
  }
}

export default connect (mapStateToProps)(Collection) 
