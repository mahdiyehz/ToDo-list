$(document).ready(function(){

  //showing todoList 
  tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks) {
    tasks.forEach(function(todoList){
      $(".list-group").append("<li class='list-group-item d-flex justify-content-between'>" + todoList +  "<i class='fas fa-times text-danger mr-auto delete-item'></i>"+"</li>")
    })
  }


  //add tasks
  $('.btn-add').on('click', function(){
    input_task = $('#task').val()
    if(input_task == ''){
      alert("please add a task")
    }else{
      let tasks;
      tasks = [];

      if(localStorage.getItem('tasks') === null) {

        tasks = [];

      } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
      }

      tasks.push(input_task);

      localStorage.setItem('tasks', JSON.stringify(tasks));


      $('.list-group').append("<li class='list-group-item d-flex justify-content-between'>" + input_task + "<i class='fas fa-times text-danger mr-auto delete-item'></i>" + "</li>")
       
    }
  
  });

  //clear all tasks
  $('.clear-tasks').on('click', function(){
    show = confirm('sure?!')
    if(show){
      $("ul li").remove();
      localStorage.removeItem('tasks');

    }

  })

  //clear each task with icon
  $('.delete-item').on('click', function(){
    let selectedItem = $(this).parent().text()
    $(this).parent().remove();
    //clear from taskList
    tasks.splice(tasks.indexOf(selectedItem), 1);
    remainingTasks = tasks
    //clear all tasks from localStorage
    localStorage.removeItem('tasks');
    //add remainingTasks to localStorage
    localStorage.setItem('tasks', JSON.stringify(remainingTasks));

  });

  
});
