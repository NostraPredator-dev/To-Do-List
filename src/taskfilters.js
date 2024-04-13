const filterTasks = (tasks, filter) => {
  switch (filter) {
    case "today":
      return tasks.filter((task) => {
        const taskDeadline = new Date(task.date);
        const today = new Date();
        return (
          taskDeadline.getFullYear() === today.getFullYear() &&
          taskDeadline.getMonth() === today.getMonth() &&
          taskDeadline.getDate() === today.getDate()
        );
      });
    case "next7days":
      return tasks.filter((task) => {
        const taskDeadline = new Date(task.date);
        const today = new Date();
        const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        return taskDeadline > today && taskDeadline <= nextWeek;
      });
    case "important":
      return tasks.filter((task) => task.isImp);
    default:
      return tasks;
  }
};

export default filterTasks;
