import { takeEvery } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
//. We take all actions of type ADD_MESSAGE and when this action occurs, we send a message to the WebSocket, passing the action and some details.
// The chat message sent by our user can be dispatched to all connected clients by the server.
const handleNewMessage = function* handleNewMessage(params){
    yield takeEvery(types.ADD_MESSAGE, (action) =>{
        action.author = params.username
        params.socket.send(JSON.stringify(action))
    })
}

export default handleNewMessage;