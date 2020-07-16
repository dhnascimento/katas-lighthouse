const organizeInstructors = function(instructors) {
  let organizedCourses = {};
  for(let i = 0; i < instructors.length; i++) {
    if (organizedCourses[instructors[i].course] !== undefined) {
      organizedCourses[instructors[i].course].push(instructors[i].name);
    } else {
      organizedCourses[instructors[i].course] = []
      organizedCourses[instructors[i].course].push(instructors[i].name);
    }    
  } return organizedCourses;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));