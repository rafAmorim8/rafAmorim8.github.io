// Data object with skills data
const data = {
  skills: [
    {
      name: "Html5",
      percentage: 80
    },
    {
      name: "Git",
      percentage: 70
    },
    {
      name: "Css3",
      percentage: 70
    },
    {
      name: "JavaScript",
      percentage: 70
    },
    {
      name: "ReactJs",
      percentage: 50
    },
    {
      name: "Python",
      percentage: 40
    },
    {
      name: "Java",
      percentage: 40
    }
  ]
};

// Creates new array with all the skill names
const skillNames = data.skills.map(a => a.name);
// Creates new array with all the percentages
const skillPercentages = data.skills.map(a => a.percentage);

// Function that creates buttons
const renderElement = (name, percentage) => {
  // Finds the div where the buttons should be placed
  let skillsContainer = document.getElementById("buttons");
  let skillBox = document.createElement("div");
  // Iterates trough each element of the array and creates a custom div with
  // the name of the skill, a graphical representation of the percentage of
  // knowledge and the percentage number
  skillNames.forEach((name, i) => {
    skillBox.classList.add("skill-box");
    let skillItem = document.createElement("div");
    skillItem.classList.add("skill-item");
    let skillName = document.createElement("h3");
    let skillText = document.createTextNode(name);
    let skillLines = document.createElement("div");
    skillLines.classList.add("skill-lines");
    skillName.appendChild(skillText);
    skillItem.appendChild(skillName);
    skillBox.appendChild(skillItem);
    skillItem.appendChild(skillLines);

    // iterates through all the items, gets its percentage and creates
    // divs based on that percentage
    for (x = 0; x < 10; x++) {
      if (x + 1 <= skillPercentages[i] / 10) {
        let lineFull = document.createElement("div");
        lineFull.classList.add("line-full");
        skillLines.appendChild(lineFull);
      } else {
        let lineEmpty = document.createElement("div");
        lineEmpty.classList.add("line-empty");
        skillLines.appendChild(lineEmpty);
      }
    }

    let skillPercent = document.createElement("p");
    let percentText = document.createTextNode(skillPercentages[i] + "%");
    skillPercent.appendChild(percentText);
    skillItem.appendChild(skillPercent);
    skillsContainer.appendChild(skillBox);
  });
};
