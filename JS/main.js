let userEmail = document.querySelector("#useremail")
let userPass = document.querySelector("#userpass")
let logbtn = document.querySelector("#logbtn")
let errMess = document.querySelector("#errMess")
let succMess = document.querySelector("#succMess")
let form = document.querySelector("form")
let QuestionsNum = document.querySelector("#questionsNum")
let strTestBtn = document.querySelector("#strTestBtn")
let testScreen = document.querySelector("#testScreen")
let testSection = document.querySelector("#test")
let submitBtn = document.querySelector("#submitBtn")
let logoutBtn = document.querySelector("#logoutBtn")
let scoreDiv = document.querySelector("#score")
let correctAnswer = [] 
let cartona = ''
// local storage 

if (localStorage.getItem("Islogin") === "True") {

    GoToTestPage()
}


logbtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(userEmail.value, userPass.value);



    if (userEmail.value != "aa@" || userPass.value != "1234") {
        errMess.classList.replace("d-none", "d-block")
    }
    else {
        errMess.classList.replace("d-block", "d-none")

        succMess.classList.replace("d-none", "d-block")

        localStorage.setItem("Islogin", "True")
        setTimeout(GoToTestPage,
            1000
        )
    }


})

function GoToTestPage() {
    testSection.classList.replace("d-none", "d-block")
    form.classList.add("d-none")
}

// strTestBtn.addEventListener("click", (e) => {
//     e.preventDefault()
//     let num = QuestionsNum.value
//     for (let i = 1; i <= num; i++) {
//         let num1 = Math.floor(Math.random() * 10)
//         let num2 = Math.floor(Math.random() * 10)
//                 correctAnswer.push(num1 + num2)
//         let opertation = "+"
//         cartona += `${i})   <label>  ${num1} + ${num2} = </label>
//         <input class='form-control'>    
//     `
//     }
//     testScreen.innerHTML = cartona
// })
strTestBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let num = Number(QuestionsNum.value)
    cartona = ''           // إعادة تعيين cartona
    correctAnswer = []
    scoreDiv.innerHTML = ''  // إعادة تعيين النتيجة القديمة
    for (let i = 1; i <= num; i++) {
        let num1 = Math.floor(Math.random() * 10)
        let num2 = Math.floor(Math.random() * 10)

        // حفظ الإجابة الصحيحة
        correctAnswer.push(num1 + num2)

        // توليد HTML للأسئلة
        cartona += `
            <div class="mb-3">
                <label>${i}) ${num1} + ${num2} = </label>
                <input class='form-control answer'>
            </div>
        `
    }

    testScreen.innerHTML = cartona
})
// زر Logout
logoutBtn.addEventListener("click", () => {
    testSection.classList.replace("d-block", "d-none")
    form.classList.remove("d-none")
    succMess.classList.replace("d-block", "d-none")
    
    // إعادة تعيين القيم
    userEmail.value = ''
    userPass.value = ''
    QuestionsNum.value = ''
    testScreen.innerHTML = ''
    cartona = ''
    correctAnswer = []
    scoreDiv.innerHTML = ''

    localStorage.removeItem("Islogin")
})

submitBtn.addEventListener("click", function(){
    let inputs = document.querySelectorAll(".answer")
    let score = 0

    inputs.forEach(function(input, index){
        if(Number(input.value) === correctAnswer[index]){
            score++
        }
    })

    scoreDiv.innerHTML = `Your score: ${score} / ${correctAnswer.length}`
})