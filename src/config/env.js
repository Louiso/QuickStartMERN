import ModelServer from '../helpers/ModelServer'
console.log(process.env)
const env = {
  server: {
    http: new ModelServer({
      protocol: process.env.REACT_APP_BACKEND_HTTP_PROTOCOL,
      port: process.env.REACT_APP_BACKEND_PORT,
      host: process.env.REACT_APP_BACKEND_HOST,
      route: process.env.REACT_APP_BACKEND_ROUTE
    }),
    ws: new ModelServer({
      protocol: process.env.BACKEND_WS_PROTOCOL,
      port: process.env.BACKEND_WS_PORT,
      host: process.env.BACKEND_WS_HOST,
      route: process.env.BACKEND_WS_ROUTE
    }),
  }
}

export default env;