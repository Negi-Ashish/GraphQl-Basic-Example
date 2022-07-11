import logo from './logo.svg';
import './App.css';
import {createClient} from "urql";
import {useEffect,useState} from "react";

const APIURL = "https://gateway.thegraph.com/api/a6f103117da5c7c8bb04b33254c7b6c5/subgraphs/id/8MxbjYK5kVYjV6aY947ZuPfwMHz3CDh4b3u7QxDLGBLS"

//const APIURL = "https://gateway.thegraph.com/api/540064f67791087737214d20f5982ccf/deployments/id/Qmb31DYo9MHj4JBW8fqDoXBK87Bgun4DZMaxyXmNH17Qj6"

const query = `
      query{
        approvals(first: 5) {
          id
          owner
          approved
          tokenId
        }
      }

`
// {
//   transfer(id:"0x9f22c94b0bcb404b1c3abc0bd12b8c9c38b1559a977d628bcea10a9db51a6fc9"){
//     id
//     from
//     to
//     tokenId
//   }
// }


const client = createClient({
  url:APIURL
});


function App() {
  useEffect(()=>{
  fetchData()
  },[]
  );

  async function fetchData(){
    // const response = await client.query(query).toPromise()
    const response = await client.query(query).toPromise()
    
    console.log('response',response)
    return response
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
