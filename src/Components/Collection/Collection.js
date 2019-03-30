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
          atk: 10,
          def: 10
        },
        {
          name: 'Harry',
          hp: 15,
          atk: 10,
          def: 5
        },
        {
          name: 'Steve',
          hp: 10,
          atk: 15,
          def: 15
        },
      ],
      hp1:0,
      hp2: 0
    }
  }
  AddToArena(bot){
    if(!this.state.bot1.name){
      this.setState({
        bot1: bot,
        hp1: bot.hp
      })
    }else{ 
      this.setState({
        bot2: bot,
        hp2: bot.hp
      })
    }
  }
  ClearArena(){
    this.setState({
      bot1: '',
      bot2: ''
    })
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  randomAtk1(){
    let num = this.getRandomInt(3)
    if(num===0){
      alert(`Bot 1's attack wasn't very effective`)
    }else if(num===2){alert(`Bot 1 scored a critical hit!!`)}
    else{alert(` Bot 1 attacks.....`)}
    return num
  }
  randomAtk2(){
    let num = this.getRandomInt(3)
    if(num===0){
      alert(`Bot 2's attack wasn't very effective`)
    }else if(num===2){alert(`Bot 2 scored a critical hit!!`)}
    else{alert(` Bot 2 attacks.....`)}
    return num
  }
  Fight(){
    let {hp1, hp2} =this.state
    let bot1 = this.state.bot1
    let bot2 = this.state.bot2
  
    console.log(hp2, hp1)
    if(bot2.hp>0){
      bot2.hp = bot2.hp - (this.randomAtk1()*bot1.atk>bot2.def ? bot1.atk-bot2.def : 1)
    }else{
      bot1.hp = hp1
      bot2.hp = hp2
      this.setState({
        bot1: bot1,
        bot2: bot2
      })
      alert(`${this.state.bot1.name} Wins`)
    }
    if(bot1.hp>0){
      bot1.hp = bot1.hp - (this.randomAtk2()*bot2.atk>bot1.def ? bot2.atk-bot1.def : 1)
    }else{
      bot1.hp = hp1
      bot2.hp = hp2
      this.setState({
        bot1: bot1,
        bot2: bot2
      })
      alert(`${this.state.bot2.name} Wins`)
    }

    this.setState({
      bot1: bot1,
      bot2: bot2
    })
  }
  render() {
  
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
  return {
   dummyArr: reduxState.dummyArr
  }
}

export default connect (mapStateToProps)(Collection) 
