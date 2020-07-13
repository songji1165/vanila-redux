import { createStore } from "redux";

const handleAdd = document.getElementById("add");
const handleMinus = document.getElementById("minus");
const inputText = document.getElementById('inputText');

//action Type을 변수로 지정해놓으면, 버그를 줄일 수 있다.
const ADD = "ADD";
const MINUS = "MINUS";

//유일하게 data를 바꿀 수 있음 (reducer)
const countModifier = (state = 0, action ) => {
                    // state initiallize!!
  console.log("reduceer:",state, action);

  //action은 switch 권장
  //action의 type속성은 필수 ! 
  switch(action.type){
    case ADD :
      return state + 1;
    case MINUS :
      return state - 1;
    default :
      return state;
  };
};

const countStore = createStore(countModifier);

console.log("RETURN STORE :", countStore.getState());

const updateCount = () => {
  countStore.dispatch({type:ADD});
};

const minusCount = () => {
  countStore.dispatch({type:MINUS});
  
};

const onChange = () => {
  inputText.innerText = countStore.getState();
}

countStore.subscribe(onChange);


handleAdd.addEventListener("click",()=>{
  updateCount();
});

handleMinus.addEventListener("click",()=>{
  minusCount();
})


/*
// Vanilla JS Version

let count = 0;
inputText.innerText = count;

const updateCount = () => {
  count += 1;
  inputText.innerText = count;
}
const minusCount = () => {
  count -= 1;
  inputText.innerText = count;
}

handleAdd.addEventListener("click",()=>{
  updateCount();
});

handleMinus.addEventListener("click",()=>{
  minusCount();
})
*/