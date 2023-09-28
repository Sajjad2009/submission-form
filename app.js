const studentName=document.getElementById("name");
const courseName=document.getElementById("course");
const courseAmount=document.getElementById("amount");
const addBtn=document.querySelector(".btn");
const studentList=document.getElementById("student-list");

    addBtn.addEventListener("click", function(event){
    event.preventDefault();
    if(studentName.value=="" || courseName.value==""||courseAmount.value==""){
        alert("Please fill up the Blank Section")
    }
    else {
        const newRow=document.createElement("tr");

        // creating Student Name data
        const newStudentName=document.createElement("td");
        newStudentName.innerHTML=studentName.value;
        newRow.appendChild(newStudentName);

        // creating Course Name data
        const newCourseName=document.createElement("td");
        newCourseName.innerHTML=courseName.value;
        newRow.appendChild(newCourseName);

        // creating Course Amount data
        const newCourseAmount=document.createElement("td");
        newCourseAmount.innerHTML=courseAmount.value;
        newRow.appendChild(newCourseAmount);



        studentList.appendChild(newRow);
    }
})
