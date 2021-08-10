const config = {
  env: "NODE_ENV",
  port: 3000,
  mongooseDebug: '',
  jwtSecret:'0a6b944d-d2fb-46fc-a85e-0295c986cd9y',
  frontend: 'http:localhost:4200' || 'angular',
  mongo: {
    host: 'mongodb+srv://ilearnhub-premium:Dragon102824@ilearn-store.3al69.mongodb.net/sample_store?retryWrites=true&w=majority',
  },
  
};

module.exports = config;
