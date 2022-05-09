
let op1=document.getElementById("op1")
let op2=document.getElementById("op2")
let op3=document.getElementById("op3")
let op4=document.getElementById("op4")
let question=document.getElementById("question")
let resultHtml = document.getElementById("result")
let sum=0
let id=0
let hasChosen=false
let messageEl=document.getElementById("message-el")
let varResult =""
let Questions=[{
    id:0,
    q: "When did India become independent?",
    a: ["1947","1948","1950","1945"],
    correct:1
    },
    {
    id:1,
    q: "Which of the following is a consulting company?",
    a:["Morgan Stanley","Microsoft","Mckinsey","Piramal"],
    correct:3
    },
    {id:2,
     q: "Which is the oldest IIT?",
     a: ["IIT Kharagpur","IIT Bombay","IIT Delhi","IIT Kanpur"],
     correct:1
    }   
    ]
    const NumQues= Questions.length
    var answerarr= Array(NumQues).fill('none')

    
    function execute(id){
        question.textContent=Questions[id].q
        op1.textContent=Questions[id].a[0]
        op2.textContent=Questions[id].a[1]
        op3.textContent=Questions[id].a[2]
        op4.textContent=Questions[id].a[3]
    }
    function start(){
        message="All the best for the quiz"
        messageEl.textContent=message
        sum=0
        execute(0)
        clearRadio()
        document.getElementById("save-btn").disabled = true


    }
    function previous(){
        if(id>0){
        id--
        execute(id)
        }
        clearRadio()
    }

    
    function next(){
        if(id<2){
        id++
        execute(id)
        }
        clearRadio()
        
    }
    function saveNext(){
        storeAns(id)
        next()  
    }
    function submit(){
        message="Thank you for attempting the quiz"
        messageEl.textContent=message
        
        display()
        Score()
        document.getElementById("submit").disabled = true
        
    }
    function Score(){
        let scoreEl=document.getElementById("score-el")
        scoreEl.textContent=sum
    }
    function checkAnswer(){
        
    }
    function clearRadio(){
        var el=document.getElementsByName("choice")
        for(var i=0;i<el.length;i++)
        el[i].checked=false
    }
    
    function storeAns(id){
        answerarr.splice(id,1,(1+parseInt(document.querySelector('input[name="choice"]:checked').value)))

        
    }

    function display(){
        for(let n=0;n<NumQues;n++){if(Questions[n].correct===answerarr[n]){
            sum+=2
            varResult +=  `
           <li style="color: yellow">
             Your answer  is correct!
           </li>`
       }
       else if(answerarr[n]==="none"){
           varResult +=  `
           <li style="color: green">
             You have not attempted!
           </li>`
       }
       else{sum-=0.5
           varResult +=  `
           <li style="color: red">
             Your answer  is incorrect!
           </li>`
           
       }

    }
       resultHtml.innerHTML = varResult
    }
   // function option(){
     //   hasChosen=Questions[id].a[]
    //}
    