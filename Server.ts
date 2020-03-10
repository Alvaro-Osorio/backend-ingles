import {App} from './App/App'

let server:App = new App();

const Port=3000;
server.app.listen(Port,()=>{
    console.log(`Listening on port ${Port}`);
})