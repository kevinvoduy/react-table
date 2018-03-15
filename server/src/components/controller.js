import axios from 'axios';

export const getIds = async(req, res) => {
  try {
    // const id = await axios.get();
    return res.status(200).send('ids hit')
  } catch(err) {
    throw new Error(err.message);
  }
}

export const getMetrics = async(req, res) => {
  try {
    // const metrics = await axios.get();
    return res.status(200).send('metrics hit');
  } catch(err) {
    throw new Error(err.message);
  }
}