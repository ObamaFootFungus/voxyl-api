const path = require('path')
const centra = require('centra')

const getUUID = require(path.join(__dirname, '..', 'util', 'getUUID.js'))

const baseURL = 'https://api.voxyl.net/'


/**
 * Main Client class.
 */
class Client {
    /**
     * Create a new API client.
     * @param {string} key - A valid Voxyl API key
     */
    constructor (key) {
        if (!key) {
            throw new Error('No API Key was provided')
        }
        this.key = key
    }

	/**
	* Get a player's basic info.
	* @param {string} [targetType=uuid] - Target type. 'name' or 'uuid'
	* @param {string} identifier - Identifier for the target. (Either a name or UUID, based on targetType.)
	*/
    async getPlayerInfo(targetType, identifier) {
        let uuid = await getUUID(targetType, identifier)

        const res = await centra(baseURL).path(`/player/info/${uuid}`).query({
            'api': this.key
        }).send()

        const parsed = await res.json()

        if (parsed.success) {
            return parsed
        }
        else throw new Error(parsed.reason)
    }

    
    /**
	* Get a player's overall stats.
	* @param {string} [targetType=uuid] - Target type. 'name' or 'uuid'
	* @param {string} identifier - Identifier for the target. (Either a name or UUID, based on targetType.)
	*/
    async getPlayerOverallStats(targetType, identifier) {
        let uuid = await getUUID(targetType, identifier)

        const res = await centra(baseURL).path(`/player/stats/overall/${uuid}`).query({
            'api': this.key
        }).send()

        const parsed = await res.json()

        if (parsed.success) {
            return parsed
        }
        else throw new Error(parsed.reason)
    }


    /**
	* Get a player's game stats.
	* @param {string} [targetType=uuid] - Target type. 'name' or 'uuid'
	* @param {string} identifier - Identifier for the target. (Either a name or UUID, based on targetType.)
	*/
    async getPlayerGameStats(targetType, identifier) {
        let uuid = await getUUID(targetType, identifier)

        const res = await centra(baseURL).path(`/player/stats/game/${uuid}`).query({
            'api': this.key
        }).send()

        const parsed = await res.json()

        if (parsed.success) {
            return parsed
        }
        else throw new Error(parsed.reason)
    }


    /**
	* Get info about a guild.
	* @param {string} identifier - The tag of the guild
	*/
    async getGuildInfo(identifier) {

        const res = await centra(baseURL).path(`/guild/info/${identifier}`).query({
            'api': this.key
        }).send()

        const parsed = await res.json()

        if (parsed.success) {
            return parsed
        }
        else throw new Error(parsed.reason)
    }


    /**
	* Get the members of a guild
    * @param {string} [targetType=tag] - Target type. 'tag' or 'id'
	* @param {string} identifier - Identifier for the target. (Either a tag or id, based on targetType.)
	*/
    async getGuildMembers(targetType, identifier) {
        identifier = targetType !== 'id' ? identifier : '-' + identifier
        const res = await centra(baseURL).path(`/guild/members/${identifier}`).query({
            'api': this.key
        }).send()

        const parsed = await res.json()

        if (parsed.success) {
            return parsed
        }
        else throw new Error(parsed.reason)
    }


    /**
	* Get the top guilds
    * @param {number} [number=1] - The amount of guilds to return. Maximum of 100
	*/
    async getTopGuilds(number) {

        const res = await centra(baseURL).path(`/guild/top`).query({
            'api': this.key,
            'num': number
        }).send()

        const parsed = await res.json()

        if (parsed.success) {
            return parsed
        }
        else throw new Error(parsed.reason)
    }


    /**
	* Get the current announcements
	*/
    async getAnnouncements() {

        const res = await centra(baseURL).path(`/announcement/all`).query({
            'api': this.key
        }).send()

        const parsed = await res.json()

        if (parsed.success) {
            return parsed
        }
        else throw new Error(parsed.reason)
    }


}


module.exports = Client