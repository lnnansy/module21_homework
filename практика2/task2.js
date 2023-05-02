const jsonString = `
{
    "name":"Anton",
    "age":36,
    "skills":["Javascript","HTML","CSS"],
    "salary":80000
}
`;
const data = JSON.parse(jsonString);

const array = {};
array.name = data.name;
array.skills = data.skills;
array.salary = data.salary;
//console.log(array.skills);




console.log(JSON.stringify(array));
