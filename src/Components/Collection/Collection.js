import React, { Component } from 'react';

class Collection extends Component {
  constructor(){
    super()
    this.state = {
      bot1: '',
      bot2: '',
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
    if(!this.state.bot1){
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
  // Fight(){
  //   let hp1 = 
  //   let hp2 =
  //     if(hp2>0){
  //      hp2 = hp2 - (atk1>def2 ? atk1-def2 : 1)
  //     }else{
  //       alert(`${this.state.bot1} Wins`)
  //     }
  //     if(hp1>0){
  //       hp1 = hp1 - (atk2>def1 ? atk2-def1 : 1)
  //     }else{
  //       alert(`${this.state.bot2} Wins`)
  //     }
  //   this.setState({
  //     bot1: '',
  //     bot2: ''
  //   })
  // }
  render() {

    const collectionDiv = this.state.dummybotarr.map( bot => {
      return <div className='SingleBot'>
        <h1>Name: {bot.name}</h1>
        <div>HP: {bot.hp}</div>
        <div>Atk: {bot.atk}</div>
        <div>Def: {bot.def}</div>
        <div className='BotButtonDiv'>
          <button onClick={() => this.AddToArena(bot.name)}>Add to Arena</button>
          <button>Delete</button>
        </div>
      </div>
    })
    return (
      <div className="Collection">
        <div className='BattleDiv'>
        
          <div>Bot #1: {this.state.bot1}</div> 
          <div>Bot #2: {this.state.bot2}</div>
          <div>
            <button>fight</button>
            <button onClick={() => this.ClearArena()}>clear</button>
          </div>
          
        </div>
         
          <div className='CollectionDiv'>{collectionDiv}</div>

      </div>
     
      
    );
  }
}

export default Collection;
