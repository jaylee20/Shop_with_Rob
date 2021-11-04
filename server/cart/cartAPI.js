const axios = require('axios');
// eslint-disable-next-line import/extensions
const { TOKEN } = require('../../config/config.js');

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart';

module.exports = {
  getCartItems: (callback) => {
    const options = {
      url,
      headers: {
        Authorization: TOKEN,
      },
    };

    axios(options)
      .then((results) => {
        callback(null, results.data);
      })
      .catch((err) => {
        callback(err);
      });
  },
  addToCart: (data, callback) => {
    const options = {
      method: 'post',
      url: `${url}/`,
      headers: {
        Authorization: TOKEN,
      },
      data,
    };

    axios(options)
      .then((results) => {
        callback(null, results.data);
      })
      .catch((err) => {
        callback(err);
      });
  },
};
