function getStudentNames () {
    return fetch ('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
        .then (data => data.json())
            .then (res => {
                res.map (student => console.log(`${student.firstName} ${student.lastName}`));
            })
}

function getDocs () {
    return fetch ('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json')
        .then (data => data.json())
            .then (res => {
                console.log(`sort`);
                res.sort((x, y) => x.size - y.size).map (docs => console.log(`${docs.name}`))
            })
}

setTimeout(() => {
    getStudentNames()
    setTimeout(() => {
        getDocs()
    }, 5000)
}, 5000)

