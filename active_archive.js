function number() {
  let n_ativ = elemList.length; //кількість тасків в актівних завданнях
  let n_archive = elemListArhiv.length; // кількість тасків в архіве
  let active_task = 0; //кількість активніх тасків "task"
  let arhiv_task = 0; //кількість архівованих тасків "task"

  function task_activ() {
    for (i = 0; i < n_ativ; i++) {
      let contest = elemList[i].contest;
      if (contest == "Task") {
        active_task += 1;
      }
    }
    return active_task;
  }

  function task_archived() {
    for (j = 0; j < n_archive; j++) {
      let contest_archive = elemListArhiv[j].contest;
      if (contest_archive == "Task") {
        arhiv_task += 1;
      }
    }

    return arhiv_task;
  }

  //   console.log("task_archived", task_archived());

  ///////////////////вказати кількість актівних  тасків зі значенням "Task"
  const activeTask = document.getElementById("active_task");
  activeTask.innerHTML = task_activ();

  ///////////////////вказати кількість актівних без значення "Task"
  const random_activeTask = document.getElementById("random_task_active");
  random_activeTask.innerHTML = n_ativ - activeTask.innerHTML;

  ///////////////////вказати кількість архівованих  тасків зі значенням "Task"
  const archiveTask = document.getElementById("archive_task");
  archiveTask.innerHTML = task_archived();

  ///////////////////вказати кількість архівованих  тасків зі значенням "Task"
  const random_archiveTask = document.getElementById("random_task_archive");
  random_archiveTask.innerHTML = n_archive - archiveTask.innerHTML;
}

number();
