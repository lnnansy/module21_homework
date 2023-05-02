const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
const parse = new DOMParser();
const xmlDOM = parse.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelectorAll("student");

let Arr = [];

listNode.forEach(student => {
  let list = new Object();
  const age1 = student.querySelector("age").textContent;
  const prof1 = student.querySelector("prof").textContent;
  const name1 = student.querySelector("first").textContent + " " + student.querySelector("second").textContent;
  //console.log(age1, prof1, name1);
  const langAttr1 = student.querySelector("name").getAttribute("lang");
  list.name = name1;
  list.prof = prof1;
  list.age = age1;
  list.lang = langAttr1;
  Arr.push(list);
});

let ArrObj = {};
ArrObj.list = Arr;
console.log(ArrObj);
