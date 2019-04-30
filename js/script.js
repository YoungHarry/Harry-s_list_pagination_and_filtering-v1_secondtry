/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



// starting variables//
const studentList = document.getElementsByClassName('student-item');
//displaying number of students//
const studentsToShowPerPage = 10;




// showPage Function//
const showPage= (list,page) => {
  const startIndex = page * studentsToShowPerPage - studentsToShowPerPage;
  const endIndex = page * studentsToShowPerPage -1;
  for(let i= 0; i < list.length; i++){
      if(i >= startIndex && i  <= endIndex  ){
        list[i].style.display= 'block';
      }else{
        list[i].style.display = 'none';

      }


  }

}


// the appendPage function//
const appendPageLinks = list =>{
  const totalNumberOfPages = Math.ceil(list.length/studentsToShowPerPage);
  const studentPage = document.getElementsByClassName('page')[0];
  const studentDiv = document.createElement('DIV');
//creating the pagination classnation for the div//
    studentDiv.className= 'pagination';
  studentPage.appendChild(studentDiv);// attaching it to div class 'page'//

  let ul= document.createElement('ul');
  studentDiv.appendChild(ul);
//creating an if statement just in case//
  if (totalNumberOfPages > 0){
  for (let i = 1; i <= totalNumberOfPages; i++) {
    //creating the li and a elements//
      let newLi = document.createElement('LI');
      let a = document.createElement('A');
      a.href = '#';


      a.textContent = i;
      //appending both newly created elements//
      ul.appendChild(newLi);
      newLi.appendChild(a);
    }

    const nox = document.querySelectorAll('.pagination a');
    nox[0].className = 'active';

    for (let i = 0; i < nox.length; i++)  {
      nox[i].addEventListener('click', (event) => {
        const finished = event.target.textContent;
        for (let x = 0; x < nox.length; x++) {
          nox[x].className = '';
        }
        event.target.className = 'active';

        showPage(list , finished);


})
}

}
}
showPage(studentList, 1);
appendPageLinks(studentList);
//end of code//
