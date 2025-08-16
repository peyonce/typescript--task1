"use strict";
const employee1 = {
    fullName: ["John", "Doe"],
    age: 30,
    department: "Engineering",
    skills: ["JavaScript", "Python", "c++"],
    isActive: true,
};
const employee2 = {
    fullName: ["Jane", "Smith"],
    age: 25,
    department: "Marketing",
    skills: ["SEO", "Social Media", "Content Creation"],
    isActive: false,
};
function logEmployee(employee) {
    console.log("\n--- Employee Details---");
    console.log('Name: ${employee.fullName[0]} ${employee.fullName[1]}');
    console.log('Age: ${employee.age}');
    console.log('Department: ${employee.department}');
    console.log('Skills: ${employee.skills.join(",")}');
    console.log('Active: ${employee.isActive ? "Yes" : "No"}');
    console.log("------------------\n");
}
;
logEmployee(employee1);
logEmployee(employee2);
