// config 리덕스 설정 관련 폴더
// configStore 중앙 State 관리소 => state설정코드 
// module 생성 후, rootReducer에 추가해줘야 
// index에서 데이터를 받아서 사용할 수 있다. 

// moduels는 state(data)의 그룹이 모여있는 폴더
// moduels 안에 파일은 각 컴포넌트의 데이터를 모아두는 곳

import { combineReducers, createStore } from "redux";
// module 추가
import md_counter from "../modules/md_counter";
import md_todo from "../../../src/redux/modules/md_todo";

const rootReducer = combineReducers({
  // module추가시 여기에 추가
  md_counter : md_counter,
  md_todo : md_todo , 
})
const store = createStore(rootReducer);


// store를 export해서 index로 넘겨준다
// index에서는 <Provide>로 store와 연결해서 
// App에서 사용할 수 있게 한다.
export default store; 