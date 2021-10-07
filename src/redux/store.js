import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk";

import { loadLocalLoginInfo } from "@/utils/localStorageManager"
import reducers from "@/redux/reducers"
import { userChange } from "@/redux/actions"

const store = createStore(reducers, applyMiddleware(thunk))
store.dispatch(userChange(loadLocalLoginInfo()))
export default store
