module.exports = {
  loadTasks: loadTasks
}

function loadTasks(){
  return function(dispatch,getState){
    // dispatch(toggleLoading(true))
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/tasks', true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText)
        dispatch(tasksLoaded(data))
      }
      // dispatch(toggleLoading(false))
    }
    setTimeout(function(){
      request.send()
    }, 2000)

  }
}

function tasksLoaded(tasks){
  return {type:'TASKS_LOADED',data:tasks}
}
