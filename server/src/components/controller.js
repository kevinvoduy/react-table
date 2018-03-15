// dummy data
const objects = require('./data/objects.json');
const metrics = require('./data/metrics.json');

export const getIds = (req, res) => {
  try {
    const objectIds = objects;
    return res.status(200).send(objectIds);
  } catch(err) {
    throw new Error(err.message);
  }
};

export const getMetrics = (req, res) => {
  try {
    const metricsData = metrics;
    return res.status(200).send(metricsData);
  } catch(err) {
    throw new Error(err.message);
  }
};