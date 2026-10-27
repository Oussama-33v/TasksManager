const titleBlok = document.getElementById('title');
const descriptionBlok = document.getElementById('description')

const statusBlok = document.getElementById('status')

const tasks = [
    {
        taskId: 12,
        title: 'data',
        description: "clean the data ...",
        status: 'Done'
    },
    {
        taskId: 2,
        title: 'dev',
        description: 'test the env',
        status: 'In progress'
    },
    {
        taskId: 22,
        title: 'sql',
        description: 'creat dtabase',
        status: 'To do'
    },
];

function titleVerify(title) {
    let titleTrimed = title.value.trim();
    if (titleTrimed == '') {
        title.value = '';
        return undefined;
    }
    title.value = '';
    return titleTrimed;
}

function getTaskDescription(description) {
    let descriptionTrimed = description.value.trim();
    console.log(descriptionTrimed);
    if (descriptionTrimed == '') {
        description.value = '';
        return undefined;
    }
    description.value = '';
    return descriptionTrimed;
}
tasksCounter = 1;
function generateTask(e) {
    e.preventDefault()
    const taskTitle = titleVerify(titleBlok);
    const taskDescription = getTaskDescription(descriptionBlok);
    if (!taskTitle || !taskDescription) {
        return;
    }
    let task = {
        taskId: tasksCounter,
        title: taskTitle,
        description: taskDescription,
        status: statusBlok.value
    }
    console.log(task);
    tasks.push(task);
    tasksCounter++;
    displayTasksInfos(tasks)
}

function displayTasksInfos(tasks) {
    const infosBlockCountainer = document.getElementById('task-list')
    tasks.forEach(task => {
        infosBlockCountainer.innerHTML += `
       <li class="bg-white rounded-lg shadow p-4 flex items-start justify-between gap-4" dara-id ="${task.taskId}">
        <div class="tasks-ifrmations">
            <h3 class="font-semibold">${task.title}</h3>
          <p class="text-sm text-slate-600 mt-1">${task.description}.</p>
          <span class="inline-block text-xs bg-slate-200 rounded-full px-2 py-1 mt-2">${task.status}</span>
        </div>
        <div class="flex flex-col items-end gap-2">
          <select class="border border-slate-300 rounded px-2 py-1 text-xs bg-white">
            <option value="To do">To do</option>
            <option value="In progress" selected>In progress</option>
            <option value="Done">Done</option>
          </select>
          <button class="text-sm text-red-600 hover:text-red-800 font-medium">
            Delete
          </button>
        </div>
      </li>
        `
    });
}

addTskBtn.addEventListener('click', generateTask)