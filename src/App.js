import React from 'react';
import './App.css';
import axios from 'axios'
import config from './config'

class App extends React.Component {
  state = {
    mensaje: null
  }
  componentDidMount = async () => {
    const url = config.server.http.getUri()
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
