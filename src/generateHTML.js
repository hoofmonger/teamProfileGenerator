const generateHTML = (questions) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
 ${generateManager(questions)}
</body>
</html>`;



const generateManager = (questions) => {
  //console.log(questions.manager[0])
  questions.forEach( => {
   return `<div>
<h1>${questions.name}</h1>
<h2>${questions.employeeRole}</h2>
<ul>
    <li>${questions.id};</li>
    <li>${questions.email}</li>
    <li>${questions.officeNumber}</li>
</ul>
</div>`
  });

}

module.exports=generateHTML