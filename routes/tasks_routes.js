const express = require('express')
const controller = require('../controllers/tasks_controllers')
const router = express.Router()
router.get('/tasks')//list tasks
router.post('/task')//regist tasks
router.put('/tasks')//atualize tasks
router.delete('/tasks')//delete tasks
