const centra = require('centra')
const path = require('path')
const formatUUID = require(path.join(__dirname, '..', 'util', 'formatUUID.js'))

module.exports = async (targetType, identifier) => {
	const targetType = (identifier ? targetType : 'uuid')
	const identifier = (identifier ? identifier : targetType)

	let targetUUID = (targetType === 'uuid' ? identifier : null)

	if (targetType === 'name') {
		let playerResolution = await centra('https://api.mojang.com/profiles/minecraft', 'POST').body([identifier]).send()

		if (playerResolution.statusCode === 200) {
			let body
			try {
				body = JSON.parse(playerResolution.body)

				if (!Array.isArray(body)) throw 'Not array'
			}
			catch (err) {
				throw new Error('Invalid response recieved from Mojang UUID resolution endpoint.')
			}

			if (body.length > 0) {
				targetUUID = body[0].id
			}
			else {
				throw new Error('Player does not exist.')
			}
		}
		else {
			throw new Error('Unexpected HTTP status code from Mojang UUID resolution endpoint.')
		}
	}

	return formatUUID(targetUUID)
}