# Track
This is a react native application 


## ngrok
While testing application in development environment with localhost 'ngrok' should be used.
It will create a temporary link to your localhost that can be access on different environment.
### steps to run ngrok
* Open a terminal window 
* Run localhost server with has rest api implementation
* Open another terminal window and run following commands
```bash
# Install ngrok globally on your system
> npm install -g ngrok

# Run ngrok which will locate localhost server running on port 3001
> ngrok http 3001
```
**NOTE** ngrok url expires in 8 hours if you are using free version of it.

## React native elements library
This library provide pre-build [react native elements](https://react-native-elements.github.io/react-native-elements/docs/overview.html)
```base
> npm install react-native-elements
```

## React Navigation Fix for v4
As react navigation v5 released with breaking changes, we are using stable version of v4

```bash
> npm install react-navigation

> expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

> npm install react-navigation-stack @react-native-community/masked-view

> npm install react-navigation-tabs

# start app and clear cache with 
> npm start -c
```

### Error
If there is an error with the about solution try following

```bash
> rm -r node_module  

> rm package-lock.json

> expo upgrade

> npm start -c
```