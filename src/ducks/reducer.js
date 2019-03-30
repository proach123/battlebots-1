const initialState = {
  dummyArr: [
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