const { agoraStatesDiscussions } = require("../repository/discussions");
let discussionsData = agoraStatesDiscussions;

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
    const newData = req.body;
    discussionsData.unshift(newData); // 맨 처음에 새로운 데이터 추가

    return res.status(201).json(newData);
  },
  deleteDiscussion: (req, res) => {
    const idx = discussionsData.findIndex(
      (data) => data.id === Number(req.params.id)
    ); // 파라미터의 id 와 일치하는 데이터의 인덱스 찾기

    if (idx !== -1) {
      // 인덱스가 있으면 = 삭제해야할 데이터가 존재하면
      discussionsData.splice(idx, 1); // 데이터 배열에서 인덱스번째에서 1개 요소 제거 = 인덱스번째의 요소 제거
      return res.status(204).send("resource deleted successfuly");
    } else {
      // 삭제해야할 데이터가 없으면 404 리턴
      return res.status(404).send("Not found");
    }
  },
  updateDiscussion: (req, res) => {
    const idx = discussionsData.findIndex(
      (data) => data.id === Number(req.params.id)
    );
    const updatedData = {
      ...discussionsData[idx],
      ...req.body,
    };

    if (idx !== -1) {
      discussionsData.splice(idx, 1, updatedData);
    }

    return res.status(200).send("resource updated successfuly");
  },
};

module.exports = {
  discussionsController,
};
