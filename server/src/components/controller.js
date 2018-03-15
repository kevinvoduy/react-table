// dummy data
import objects from './data/objects.json';
import metrics from './data/metrics.json';

export const getIds = async(req, res) => {
  try {
    const objects = objects;
    return res.status(200).send(objects)
  } catch(err) {
    throw new Error(err.message);
  }
}

export const getMetrics = async(req, res) => {
  try {
    const metrics = metrics;
    return res.status(200).send(metrics);
  } catch(err) {
    throw new Error(err.message);
  }
}