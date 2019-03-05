const mongoose = require('mongoose')
mongoose.connect('mongodb://132.232.53.14:27017/goods', { useNewUrlParser: true })

const dbTest = mongoose.connection
dbTest.on('error', console.error.bind(console, 'connection error:'))
dbTest.once('open', function() {
  // we're connected!
  console.log('lianjiechenggong')
})
module.exports = dbTest
// const Cat = mongoose.model('Cat', { name: String })

// const kitty = new Cat({ name: 'Zildjian' })
// kitty.save().then(() => console.log('meow'))
