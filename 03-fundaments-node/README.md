# Learning about initialization with node

## Package Installation

run the next command line to execute

```shell
npm init
```

to install dependencies:
```shell
npm install colors
```

to install development dependencies:
```shell
npm install nodemon --save-dev
```

to uninstall dependencies:
```shell
npm uninstall nodemon
```

to install an specific version of a package:
```shell
npm i colors@1.0.0
```

to install updates:
```shell
npm updates
```
*warning*: this command updates your dependencies and it could break the app, it is recommended to update manually.

## dependencies to create CLI apps

```shell
npm install yargs
```

run app built with yargs
```shell
node app -b 5
```

## commands

To know the available commands run the next instruction:
```shell
node app --help
```
**Note**: do not forget to be located in the local directorory of this file `03-fundaments-node`