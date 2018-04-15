# TravelBrite Reviews Microservice
Worked on existing code base to scale their database structure to be able to query at avg 1.6ms reads per second. This is one microservice server meant to work in conjunction with other microservices in a proxy server. Proxy server found here: github.com/jqywang/TravelBrite-proxy-server

TravelBrite Tech Stack:
  * Express.js
  * React.js
  * MongoDB
  * Webpack
  * New Relic
  * Redis
  * Artillery.io
  * PostgreSQL (for comparison)

### Installing
Have a node version greater than v7.6.0

```
node -v
```
install dependancies

```
npm install
```
seed database (depending on system could take up to 20 minutes)
```
node ./database/seedMongo.js
```
run tests
```
npm test
```
start server
```
npm start
```

## Authors

 **Jeffrey Wang**
 
## License

This project is licensed under the MIT License 
