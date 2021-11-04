const axios = require('axios');
// eslint-disable-next-line import/extensions
const { TOKEN } = require('../../config/config');

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews';

module.exports = {
  getReviews: (query, callback) => {
    const { product_id } = query;
    const count = !query.count ? 0 : query.count;
    const options = {
      url: `${url}/`,
      headers: {
        Authorization: TOKEN,
      },
      params: query,
    };
    axios(options)
      .then((results) => {
        callback(null, results.data);
      })
      .catch((err) => {
        callback(err);
      });
  },
  getMeta: (query, callback) => {
    const options = {
      url: `${url}/meta/`,
      headers: {
        Authorization: TOKEN,
      },
      params: query,
    };
    axios(options)
      .then((results) => {
        callback(null, results.data);
      })
      .catch((err) => {
        callback(err);
      });
  },
  addReview: (data, callback) => {
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
  markHelpful: (review_id, callback) => {
    const options = {
      method: 'put',
      url: `${url}/${review_id}/helpful`,
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
  markReport: (review_id, callback) => {
    const options = {
      method: 'put',
      url: `${url}/${review_id}/report`,
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
};
