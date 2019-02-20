const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })

const dbTest = mongoose.connection
dbTest.on('error', console.error.bind(console, 'connection error:'));
dbTest.once('open', function() {
  // we're connected!
  console.log('lianjiechenggong')
});
module.exports = dbTest
// const Cat = mongoose.model('Cat', { name: String })

// const kitty = new Cat({ name: 'Zildjian' })
// kitty.save().then(() => console.log('meow'))
