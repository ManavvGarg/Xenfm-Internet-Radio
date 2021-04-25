const mongoose = require('mongoose');

const radioSchema = new mongoose.Schema({
    english: String,
    englishLofi: String,
    englishRap: String,
    englishElectro: String,
    lilPeep: String,
    hindi: String,
    hindiLofi: String,
    hindiRap: String,
    hindiOld: String,
    japanese: String,
    korean: String,
    anime: String,
    dmca: String,
    gaming: String,
    study: String,
    punjabi: String
});

module.exports = mongoose.model('Radio', radioSchema);