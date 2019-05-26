class ModelServer{
  constructor({protocol = '',port = '', host = '', route = ''}){
    this.protocol = protocol;
    this.port = port;
    this.host = host;
    this.route = route;
  }
  getUri(){
    const { protocol, port , host , route } = this;
    if(route === '/') return `${protocol}://${host}:${port}`
    return `${protocol}://${host}:${port}${route}`
  }
}
export default ModelServer;