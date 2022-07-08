import { ActiveModelSerializer, createServer } from 'miragejs'

export const makeServer = ({ environment = 'test' } = {}) => {
  const server = createServer({
    serializers: { ActiveModelSerializer },
    environment,

    models: {},

    factories: {},

    seeds(server) {
      return null
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.namespace = ''
      this.passthrough()
    },
  })

  return server
}
