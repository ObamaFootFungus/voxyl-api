## A Voxyl API Client for Node

[GitHub](https://github.com/ObamaFootFungus/voxyl-api) | [NPM](https://www.npmjs.com/package/voxyl-api)

## Installation

```shell
npm install --save voxyl-api
```

## Usage

### Getting player information

```javascript
const VoxylAPI = require('voxyl-api')

const client = new VoxylAPI('API-key')

client.getPlayerInfo('name', 'ObamaFootFungus').then((player) => {
	console.log(player)
}).catch((err) => {
	console.error('Error: ' + err)
})
```

### Getting overall player stats

```javascript
client.getPlayerOverallStats('name', 'ObamaFootFungus').then((player) => {
	console.log(player)
}).catch((err) => {
	console.error('Error: ' + err)
})
```

### Getting player game stats

```javascript
client.getPlayerGameStats('name', 'ObamaFootFungus').then((player) => {
	console.log(player)
}).catch((err) => {
	console.error('Error: ' + err)
})
```

### Getting info about a guild

```javascript
client.getGuildInfo('Guild-Tag').then((guild) => {
	console.log(guild)
}).catch((err) => {
	console.error('Error: ' + err)
})
```

### Getting the members of a guild

```javascript
client.getGuildMembers('Guild-Tag/ID').then((guild) => {
	console.log(guild)
}).catch((err) => {
	console.error('Error: ' + err)
})
```

### Getting the top guilds

```javascript
// number is the amount of guilds
client.getTopGuilds(number).then((guilds) => {
	console.log(guilds)
}).catch((err) => {
	console.error('Error: ' + err)
})
```

### Getting announcements

```javascript
client.getAnnouncements().then((announcements) => {
	console.log(announcements)
}).catch((err) => {
	console.error('Error: ' + err)
})
```