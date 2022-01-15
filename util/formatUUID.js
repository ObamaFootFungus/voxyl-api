module.exports = (uuid) => {
    let formattedUUID = uuid
    if (formattedUUID.length == 32) {
        formattedUUID = uuid.slice(0, 8) + '-' + uuid.slice(8, 12) + '-' + uuid.slice(12, 16) + '-' + uuid.slice(16, 20) + '-' + uuid.slice(20, 32)
    }
    return formattedUUID
}