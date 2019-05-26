import React from 'react';
import axios from 'axios'
import { backendUri } from './config'

class App extends React.Component {
  state = {
    mensaje: null
  }
  componentDidMount = async () => {
    const url = backendUri
    const route = '/foro'
    const {data: resp} = await axios.get(`${url}${route}`);
    this.setState({
      mensaje: resp.user
    })
  }
  render(){
    const { mensaje } = this.state;
    return (
      <div className="App">
        {mensaje}
      </div>
    );
  }
}

export default App;
