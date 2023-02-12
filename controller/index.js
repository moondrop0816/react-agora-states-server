const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    return res.status(200).json(discussionsData);
  },
  findById: (req, res) => {
    const { id } = req.params;

    const filtered = discussionsData.filter((el) => el.id === Number(id));

    if (filtered.length === 0) {
      return res.status(404).send("No Data");
    } else {
      return res.status(200).json(...filtered);
    }
  },
  addDiscussion: (req, res) => {
    const { newData } = req.body;
    discussionsData.unshift(newData); // 맨 처음에 새로운 데이터 추가

    return res.status(201).json(newData);
  },
};

module.exports = {
  discussionsController,
};
