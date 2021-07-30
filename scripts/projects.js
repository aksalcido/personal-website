const projectListItems = Array.prototype.slice.call(document.getElementsByClassName("project-li"));
const projectContainers = Array.prototype.slice.call(document.getElementsByClassName("project-container"));

let activeProjectLI = document.querySelector(".active-project");
let activeProjectContainer = document.querySelector(".active-project-container");


projectListItems.forEach(proj => {
    proj.addEventListener('click', () => {
        // Take Project Index
        let projectIndex = parseInt(proj.dataset.index);

        // Grab corresponding container for project tab
        let projectContainer = projectContainers[projectIndex];

        // Make this Project Tab Active
        proj.classList.add('active-project');
        activeProjectLI.classList.remove('active-project'); // Remove the active project from the previous active tab
        activeProjectLI = proj;

        // Make corresponding project container active
        projectContainer.classList.add('active-project-container');
        activeProjectContainer.classList.remove('active-project-container');
        activeProjectContainer = projectContainer;
    }); 
});

