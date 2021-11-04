const axios = require('axios');
// eslint-disable-next-line import/extensions
const { TOKEN } = require('../../config/config.js');

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/interactions';

module.exports = {
  createInteraction: (data, callback) => {
    const options = {
      method: 'post',
      url: `${url}`,
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
