// dummy data
const objects = require('./dummy-data/objects.json');
const metrics = require('./dummy-data/metrics.json');

// this controller gets IDs
const getIds = async(req, res) => {
  try {
    const objectIds = await objects;
    return res.status(200).send(objectIds);
  } catch(err) {
    throw new Error(err.message);
  }
};

// this controller gets Metrics
const getMetrics = async(req, res) => {
  try {
    const metricsData = await metrics;
    return res.status(200).send(metricsData);
  } catch(err) {
    throw new Error(err.message);
  }
};

module.exports = { getIds: getIds, getMetrics: getMetrics }