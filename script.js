const titleBlok = document.getElementById('title');
const descriptionBlok = document.getElementById('description')

const statusBlok = document.getElementById('status')

const tasks = [];

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

function displayTasksInfos (tasks) {
    const infosBlock = document.querySelector('.tasks-ifrmations')
    tasks.forEach(task => {
        infosBlock.innerHTML += `
        <h3 class="font-semibold">${task.title}</h3>
          <p class="text-sm text-slate-600 mt-1">${task.description}.</p>
          <span class="inline-block text-xs bg-slate-200 rounded-full px-2 py-1 mt-2">${task.status}</span>
        `
    });
}

addTskBtn.addEventListener('click', generateTask)