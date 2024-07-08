const express = require('express')
const taskController = require('./controllers/taskController')
router = express.Router()

//home page
router.get('/',(req,res)=> res.render('index'))
//app
router.get('/app', taskController.app)

router.get('/app/nova-lista', taskController.create)

router.get('/app/:id',taskController.show)

router.post('/app/:id/nova-tarefa', taskController.addTask)

router.post('/app/nova-lista',taskController.save)

router.post('/app/:listId/completar/:taskId', taskController.completeTask)
router.post('/app/:listId/desfazer/:taskId', taskController.undoTask)

router.post('/app/:id/excluir', taskController.delete)
module.exports = router