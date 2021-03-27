## Description
Mono Repository created based on Next.js, React Native and Express.This is a full stack MERN based repository in server based on express and clients(Next js and React Native with expo). Planning on converting server side to microservices based architecture

## Notes

### Root
* /server : Express server setup with EJS activated
* /common : Share common code among client and server.
Alias '@core/common'
  ```
  import { name } from '@core/common'
  ```
  Supports EJS modules
* /client
  * web: Next js project
  * mobile: React native project with expo
  * shared: Share common code amongs clients only. Alias '@core/shared'. Support EJS Modules
  ```
  import { name } from '@core/shared'
  ```

## Requirements
* Must have yarn v1.22.5 installed
* Use yarn if possible instead npm

## Stack
* Server
  * Express
* Clients
  * Next Js
  * React Native

---
## Commands
### Add Dependency to a workspace
```
yarn workspace <workspace_name> add <package_name>
```
### Remove Dependency from a workspace
```
yarn workspace <workspace_name> remove <package_name>
```
### Start Server
```
yarn start:server
```
### Start React Native
```
yarn start:mobile
```
### Start NEXT JS
Development Mode
```
yarn dev:web
```
Production Mode
```
yarn start:web
```

---
If file watch error happens run this:
```
    echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
