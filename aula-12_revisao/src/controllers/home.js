exports.home = async function (req, res) {
  res.render('index')
}

exports.banner = async function (req, res) {
  res.send('Banner Hero')
}
