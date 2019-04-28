if(process.env.NODE_ENV === 'production') {
    module.exports = {mongoURI: 'mongodb://beeerod:cowboysjordan23@ds151614.mlab.com:51614/vidjot'}
} else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}