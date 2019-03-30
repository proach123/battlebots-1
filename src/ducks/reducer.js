const initialState = {
  dummyArr: [
    {
      name: 'Bob',
      hp: 10,
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
    {
      name: 'Bob2',
      hp: 1,
      atk: 1,
      def: 2,
      speed: 4,
      ulti: 'atk',
    },
  ]
 
}

// const UPDATE_DUMMY_ARR = 'UPDATE_DUMMY_ARR'



// export function updateDummyArr(newBot){
//   console.log(111, newBot)
//   return {
//     type: UPDATE_DUMMY_ARR,
//     payload: newBot
//   }
  
// }


export default function reducer( state = initialState, action){
  const {type, payload} = action
  switch(type){
    // case UPDATE_DUMMY_ARR: {
    //   return{...state, payload}}
 
    default:
      return state
    }
  }