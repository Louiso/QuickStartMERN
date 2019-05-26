import ModelServer from '../../src/helpers/ModelServer'
const config = {
  client : {
    http: new ModelServer({
      protocol: process.env.CLIENT_HTTP_PROTOCOL,
      host: process.env.CLIENT_HOST,
      port: process.env.CLIENT_PORT,
      route: process.env.CLIENT_ROUTE
    })
  }
}

export default config;