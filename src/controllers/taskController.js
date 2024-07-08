const taskListModel = require("../models/taskModels");

//get para exibir o formulario
//post para ler o formulario
/**
 get sempre vem antes para renderizar o view e através do post você 
 lê o que está dentro do formulário pegando as informações que são passadas através dele você cria um post e nese post você estará lendo
 */

module.exports = {
  //get/app
  app: (req, res) => {
    const taskLists = taskListModel.getAllTaskLists();
    res.render("app", { taskLists });
  },

  //get/app/nova-lista
  create: (req, res) => {
    res.render("create.ejs");
  },
  delete: (req,res)=>{
    const { id } = req.params
    const deleteList = taskListModel.deleleList(id)
    res.redirect('/app')
  },
  //post/app/nova-lista
  save: (req, res) => {
    const { title } = req.body;
    if(!title) throw new Error('adicione um titulo a aplicação');
    const newList = taskListModel.createList(title);
    taskListModel.saveList(newList);

    res.redirect("/app");
  },
  //get/app/:id
  show: (req, res) => {
    //req params pois o id vai ser buscado no vetor e não dentro do formb
    const { id } = req.params
    if(!id) throw new Error('lista de tarefas não encontrada!')
    const taskList = taskListModel.getTaskById(id)
    res.render('show',{taskList})
  },
  //post/app/:ListId/excluir

  //post/app/:ListId/nova-tarefa
  addTask: (req,res)=>{
    const { id } = req.params
    const { title } = req.params
    if(!title) throw new Error('Adicione um título a tarefa')
    taskListModel.addTask(id,title)
    res.redirect(`/app/:${id}`)
  },

  //post//app/:ListId/completar/:taskId
  completeTask: (req,res)=>{
    const {listId, taskId} = req.params
    taskListModel.completeTask(listId,taskId)
    res.redirect(`/app/${listId}`)
  },
  //post//app/:ListId/desfazer/:taskId
  undoTask: (req,res)=>{
    const {listId, taskId} = req.params
    taskListModel.undoTask(listId,taskId)
    res.redirect(`/app/${listId}`)
  },
};
