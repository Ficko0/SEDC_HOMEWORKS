function filterStudents () {
    return fetch ('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
        .then (data => data.json())
            .then (res => {
                let studentsAbove20 = res.filter (student => student.age > 20);
                let studentWithHighestAvgGrade = 0;
                let test = studentsAbove20.map(student => student.averageGrade)
                for (let i = 0; i < test.length; i++) {
                    if (test[i] > studentWithHighestAvgGrade ) {
                        studentWithHighestAvgGrade = test[i];
                    }
                }
                console.log(studentWithHighestAvgGrade)

                let sum = 0;
                test.forEach(element => { sum += element});
                console.log(sum/test.length)

                let avgAge = studentsAbove20.map(student => student.age)
                let sum1 = 0
                avgAge.forEach(element => { sum1 += element});

                console.log(sum1/avgAge.length)


            })
}

filterStudents();