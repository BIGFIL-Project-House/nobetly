const router = require('express').Router();
let Rules = require('../models/rules.model');

const title = 'Kurallar';

// get all items
router.route('/').get((req, res, next) => {
  Rules.find()
    .then((data) => res.json(data))
    .catch((err) =>
      res.json({
        messagge: 'Error: ' + err,
        variant: 'error',
      })
    );
});

// post new items
router.route('/add').post((req, res, next) => {
  new Rules(req.body)
    .save()
    .then(() =>
      res.json({
        messagge: title + ' Added',
        variant: 'success',
      })
    )
    .catch((err) =>
      res.json({
        messagge: 'Error: ' + err,
        variant: 'error',
      })
    );
});

// fetch data by id
router.route('/:id').get((req, res, next) => {
  Rules.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(400).json({
        messagge: 'Error: ' + err,
        variant: 'error',
      })
    );
});

// delete data by id
router.route('/:id').delete((req, res) => {
  Rules.findByIdAndDelete(req.params.id)
    .then((data) =>
      res.json({
        messagge: title + ' Deleted',
        variant: 'info',
      })
    )
    .catch((err) =>
      res.status(400).json({
        messagge: 'Error: ' + err,
        variant: 'error',
      })
    );
});

// update data by id
router.route('/:id').post((req, res, next) => {
  //Posts collection group_id update by id

  //PostsGroup update
  Rules.findByIdAndUpdate(req.params.id, req.body)
    .then(() =>
      res.json({
        messagge: title + ' Updated',
        variant: 'success',
      })
    )
    .catch((err) =>
      res.status(400).json({
        messagge: 'Error: ' + err,
        variant: 'error',
      })
    );
});

module.exports = router;
