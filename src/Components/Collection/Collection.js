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
          atk: 1,
          def: 2,
          speed: 4,
          ulti: 'atk',
        },
        {
          name: 'Bob2',
          hp: 1,
          atk: 1,
          def: 2,
          speed: 4,
          ulti: 'atk',
        },
        {
          name: 'Harry',
          hp: 15,
          atk: 4,
          def: 0,
          speed: 1,
          ulti: 'atk',
        },
        {
          name: 'Steve',
          hp: 10,
          atk: 1,
          def: 7,
          speed: 1,
          ulti: 'atk',
        },
      ],
      hp1:0,
      hp2: 0,
      oldhp1: 0,
      oldhp2: 0,
      bot1Charge: 0,
      bot2Charge: 0
    }
  }
  AddToArena(bot){
    if(!this.state.bot1.name){
      this.setState({
        bot1: bot,
        hp1: bot.hp,
        bot1Charge:0,
        oldhp1: bot.hp
      })
    }else{ 
      this.setState({
        bot2: bot,
        hp2: bot.hp,
        bot2charge: 0,
        oldhp2: bot.hp
      })
    }
  }
  ClearArena(){
    this.setState({
      bot1: '',
      bot2: '',
      hp1:0,
      hp2: 0,
      oldhp1: 0,
      oldhp2: 0,
      bot1Charge: 0,
      bot2Charge: 0
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
  Special(power, attackingbot, defbot){
    if (power==='atk'){
      defbot.hp = defbot.hp - 3
      alert(`${this.state[attackingbot].name} specialed all over ${this.state[defbot].name} for 3 extra damage`)
    }
    if (power==='heal'){
      attackingbot.hp = attackingbot.hp + 4
      alert(`${attackingbot.name} healed hisself for 4`)
    }
  }
  // //////////////FightFunction ///////////////////
  Fight(){
    let {hp1, hp2} = this.state
    let bot1 = this.state.bot1
    let bot2 = this.state.bot2

    ////////Attack bot 2 /////////////////
    if(bot2.hp>0){
      //ManageSpecialChargebot1
      if(this.state.bot1Charge >= 5){
        this.setState({
          bot1Charge: this.state.bot1Charge - 5
        })
        this.Special(bot1.ulti, bot1, bot2)
      }else{
        this.setState({
          bot1Charge: this.state.bot1Charge + bot1.speed
        })
      }
      
      this.state.oldhp2 = this.state.bot2.hp
      bot2.hp = bot2.hp - (this.randomAtk1()*bot1.atk>bot2.def ? bot1.atk-bot2.def : 1)
    }else{
      bot1.hp = hp1
      bot2.hp = hp2
      alert(`${this.state.bot1.name} Wins`)
      this.setState({
        bot1: bot1,
        bot2: bot2,
        oldhp1: 0,
        oldhp2: 0,
        bot1Charge: 0,
        bot2Charge: 0
      })
    return
    }
    ///AttackBot1
    if(bot1.hp>0){
      //ManageSpecialChargebot2
      if(this.state.bot2Charge>=5){
       this.setState({
         bot2Charge: this.state.bot2Charge - 5
       })
       this.Special(bot2.ulti, bot2, bot1)
     }else{
       this.setState({
         bot2Charge: this.state.bot2Charge + bot2.speed
       })
     }

      this.state.oldhp1 = this.state.bot1.hp
      bot1.hp = bot1.hp - (this.randomAtk2()*bot2.atk>bot1.def ? bot2.atk-bot1.def : 1)
    }else{
      bot1.hp = hp1
      bot2.hp = hp2
      alert(`${this.state.bot2.name} Wins`)
      this.setState({
        bot1: bot1,
        bot2: bot2,
        oldhp1: 0,
        oldhp2: 0,
        bot1Charge: 0,
        bot2Charge: 0
      })
      return
    }
    /////////////////////////////////////

  //   this.setState({
  //     bot1: {},
  //     bot2: {},
  //  })
    
  }
  render() {
  
    const collectionDiv = this.props.dummyArr.map( bot => {
      return <div className='SingleBot'>
        <h1>Name: {bot.name}</h1>
        <div>HP: {bot.hp}</div>
        <div>Atk: {bot.atk}</div>
        <div>Def: {bot.def}</div>
        <div>Speed: {bot.speed}</div>
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

            <p>Bot #1: {this.state.bot1.name} </p>
            <h3>HP: {this.state.bot1.hp}</h3>
            <p>Old HP: {this.state.oldhp1} </p>
            <p>Attack: {this.state.bot1.atk}</p>
            <p>Defense: {this.state.bot1.def}</p>
            <p>Speed: {this.state.bot1.speed}</p>
            <p>Charge: {this.state.bot1Charge}</p>
          </div> 
            <button onClick={() => this.Fight()}>fight</button>
            <button onClick={() => this.ClearArena()}>clear</button>
          <div className='FightingBot'>
            <p>Bot #2: {this.state.bot2.name}</p>
            <h3>HP: {this.state.bot2.hp}</h3>
            <p>Old HP: {this.state.oldhp2} </p>
            <p>Attack: {this.state.bot2.atk}</p>
            <p>Defense: {this.state.bot2.def}</p>
            <p>Speed: {this.state.bot2.speed}</p>
            <p>Charge: {this.state.bot2Charge}</p>
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
