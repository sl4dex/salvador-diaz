const errorHandler = (err, req, res, next) => {
  if( err.name === 'ValidationError' ) {
    console.log(err)
    return res.status(400).send({ error: 'User already in database' })
  }
  else if ( err.message === 'data and salt arguments required' ) {
    return res.status(400).send({ error: 'bad request properties'})
  } else {
    return res.status(400).send({ error: err })
  }

  // eslint-disable-next-line no-unreachable
  next(err)
}

module.exports = errorHandler