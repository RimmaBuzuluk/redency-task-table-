function number() {
  let n_ativ = elemList.length; //кількість тасків в актівних завданнях
  let n_archive = elemListArhiv.length; // кількість тасків в архіве
  let active_task = 0; //кількість активніх таск
  // console.log(n_ativ);
  // console.log(n_archive);

  function task_random() {
    for (i = 0; i < elemList.length; i++) {
      let contest = elemList[i].contest;
      if (contest == "Task") {
        active_task += 1;
      }
    }
    console.log("active_task", active_task);
    return active_task;
  }

  // console.log(task_random());

  ///////////////////вказати кількість актівних  тасків в осовній таблиці
  const activeTask = document.getElementById("active_task");
  const text_activeTask = activeTask.innerHTML;
  activeTask.innerHTML = task_random();
}

number();
