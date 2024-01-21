const btn = document.querySelector('.btn');

function print (academy) {
    const academyName = academy;

    document.body.innerHTML += `
    <div>
        <h1>Name of the academy: ${academyName}</h1>
    </div>
    `
}

btn.addEventListener('click', () => {
    fetch("https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json")
        .then(data => data.json())
            .then(res => {
                print(res.academy);
                document.body.innerHTML += `
                <div>
                    <h1>Name of trainer: ${res.trainer}</h1>
                </div>`

                // for (let student of res.students) {
                //     document.body.innerHTML += `
                //     <div>
                //         <h3>Name of student: ${student}</h3>
                //     </div>
                //     `
                // }

                for (let i = 0; i < res.students.length; i++) {
                    document.body.innerHTML += `
                    <div>
                        <h3>Name of student ${[i+1]}: ${res.students[i]}</h3>
                    </div>
                    `
                }
                document.body.innerHTML += `<h2>Name of assistant: ${res.assistant}</h2>`
            })
})