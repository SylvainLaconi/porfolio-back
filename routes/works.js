/* eslint-disable camelcase */
const express = require('express');
const connection = require('../Config');

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * FROM works', (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err });
    } else {
      res.status(200).json(result);
    }
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM works WHERE id=?';
  connection.query(sql, id, (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err });
    } else {
      res.status(200).json(result);
    }
  });
});

router.post('/', (req, res) => {
  const {
    title,
    date,
    category,
    short_description,
    techs,
    front_picture,
    picture1,
    picture2,
    content,
    url_app,
    url_github,
  } = req.body;
  const sql =
    'INSERT INTO works (title, date, category, short_description, techs, front_picture, picture1, picture2, content, url_app, url_github) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(
    sql,
    [
      title,
      date,
      category,
      short_description,
      techs,
      front_picture,
      picture1,
      picture2,
      content,
      url_app,
      url_github,
    ],
    (err, result) => {
      if (err) {
        res.status(500).json({ errorMessage: err });
      } else {
        res.status(201).json(result);
      }
    }
  );
});

router.delete('/:id', (req, res) => {
  const workId = req.params.id;
  const sql = 'DELETE FROM works WHERE id=?';
  connection.query(sql, [workId], (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err });
    } else {
      res.status(200).json(result);
    }
  });
});

router.put('/:id', (req, res) => {
  const workId = req.params.id;
  const workPropsToUpdate = req.body;
  const sql = 'UPDATE works SET ? WHERE id=?';
  connection.query(sql, [workPropsToUpdate, workId], (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err });
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
