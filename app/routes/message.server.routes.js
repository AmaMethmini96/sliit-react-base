const express = require('express');

const Router = express.Router();
const Todo = require('../DB/DBSchema');

Router.post('/add', (req, res) => {
	const todo = new Todo(req.body);

	todo
		.save()
		.then(() => {
			res.status(200).send({ message: 'Data Added' });
		})
		.catch((err) => {
			res.status(500).send({ message: err });
		});
});

Router.get('/get', (req, res) => {
	Todo.find()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(500).send({ message: err });
		});
});

Router.get('/:id', (req, res) => {
	Todo.findOne({ _id: req.params.id })
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(500).send({ message: err });
		});
});

// Router.put('/update/:id', (res, req) => {
// 	Todo.updateOne({ _id: req.params.id }, req.body)
// 		.then(() => {
// 			res.status(200).send({ message: 'Data Updated' });
// 		})
// 		.catch((err) => {
// 			res.status(500).send({ message: err });
// 		});
// });

Router.put('/update/:id', (req, res) => {
	Todo.updateOne({ _id: req.params.id }, req.body)
		.then((data) => {
			res.status(200).send({ message: 'data updated' });
		})
		.catch((err) => {
			res.status(500).send({ message: err });
		});
});

Router.delete('/delete/:id', (req, res) => {
	Todo.deleteOne({ _id: req.params.id })
		.then((data) => {
			res.status(200).send({ data: data });
		})
		.catch((err) => {
			res.status(500).send({ message: err });
		});
});

module.exports = Router;
