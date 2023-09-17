
let designcl = ['Work','Personal','Cleaning','Others']
           //creating class for implementing design to different category 

var today,options,timeZ,CurrTime;
  function displayCurrentTime() {
   today = new Date();
   timeZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
   options = { timeZone: timeZ, month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric' };
   CurrTime = today.toLocaleString('en-US', options);
  //  dte = eastCoastTime.toUTCString();
  // alert(CurrTime);
}

const st = $('.single_task');

let stLen=st.length;
$("#task number").text(stLen);
$(document).ready(function(){
// alert(const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;);

var TimeGreet = $('#TmeGreet');
var GreetMess = $('#GreetMess');
var Day =$('#Day');
var Dat=$('#Date');


//  alert(dte);
displayCurrentTime()
//jquery me innerText kaam ni krega
//Greeting Message

    if (today.getHours() >= 0 && today.getHours() <= 6) {
    TimeGreet.text("Good Night");
    GreetMess.text("Abhi Tak Jage Ho! Chalo Kal ka ToDo bana lo");
  } else if (today.getHours() <= 12) {
    TimeGreet.text("Good Morning");
    GreetMess.text("Jag gye! Chalo Aaj ka din fodne ko tyaar ho");
  } else if (today.getHours() <= 16) {
    TimeGreet.text("Good Afternoon");
    GreetMess.text("Late Late! Jaldi Banao aur Lag jaao");
  } else if (today.getHours() <= 19) {
    TimeGreet.text("Good Evening");
    GreetMess.text("You are Lucky! that this time I am giving you to write");
  } else {
    TimeGreet.text("Good Night");
    GreetMess.text("Have some Preparations!");
  }
   var text;
   switch(today.getDay())
   {
      case 1:text='Monday'
      break;
      case 2:text='Tuesday'
      break;
      case 3:text='Wednesday'
      break;
      case 4:text='Thrusday'
      break;
      case 5:text='Friday'
      break;
      case 6:text='Saturday'
      break;
      default:text='Sunday'

   }
   Day.text("Today's  "+text);

   Dat.text( CurrTime.slice(0, 13));










// Setting Background start
       var Background = {
                Work: "#9CECFE",
                Personal: "#FFF970",
                Cleaning: "#61E294",
                Others:"#F2CEE6"
                };

for (let i = 0; i < stLen; i++) {
  var stt = st[i].innerHTML;
  let tempDiv = document.createElement('div');
  tempDiv.innerHTML = stt;
  // Use jQuery to find elements with class "catesec" inside the temporary div
  let c = $(tempDiv).find('.catesec');
  var category = c.html().trim();
  console.log(Background[category]);
  // Set the background color based on the category using the Background object
  $(st[i]).css('background-color', Background[category]);
}
     //Background end
    //about percetage cmopleted
//you can add src.js easliy ,i had just diffrentiated them
   























    let categorys = document.getElementsByClassName('catesec'); // getting all the class name category 
        for(let i=0;i<categorys.length;i++){ // looping in the  categorys to find the which categry class belongs and implement according sesign check home.css to get the color of eact section
            if(categorys[i].innerHTML.trim()=='Work'){ 
               categorys[i].classList.add(designcl[0])
               categorys[i].classList.add('commonClass')
            }
            else if(categorys[i].innerHTML.trim()=='Personal'){
                categorys[i].classList.add(designcl[1])
                categorys[i].classList.add('commonClass')
            }else if(categorys[i].innerHTML.trim()=='Claeaning'){
                categorys[i].classList.add(designcl[2])
                categorys[i].classList.add('commonClass')
            }else if(categorys[i].innerHTML.trim()=='Otheres'){
                categorys[i].classList.add(designcl[3])
                categorys[i].classList.add('commonClass')
            }
        }
});


// this in responsible for making  making cross line when the idem is  checked for deleting
function checkedOrNot(){ 
    let cb = document.querySelectorAll('.delechack'); // getting all the check-box class 
    let descdisp = document.querySelectorAll('.dispdsc'); // gettong all the class where descripting of TODO is defined
    let ddsp = document.querySelectorAll('.dueDate'); // getting all the class for dueDate
    for(let i=0;i<descdisp.length;i++){
        let dueDate = ddsp[i].innerHTML;
        // checking if checkbox is checked  if checked a line will pass through the text(-) else if it is unchecked no line will pass through date and description
            if(cb[i].checked == true){ 
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'line-through'
            document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration  = 'line-through'
            $(cb[i].getAttribute('uid'))
            }
            else if(cb[i].checked == false){
            document.getElementById(cb[i].getAttribute('uid')).style.textDecoration = 'none'
            document.getElementById(cb[i].getAttribute('uid')+dueDate).style.textDecoration  = 'none'
        }
       
    } 
   
}

// this addEventListener  come into action when we clicked on delete button after we checked which list of items need to be deleted
document.getElementById('deleteButton').addEventListener('click',function(){
    let checedvaluew = document.querySelectorAll('.delechack:checked') // getting only checked vale
    let arrcheck = []  // creating the lsit of checked array
    for(let i of checedvaluew){
        let gg=''
       gg= i.getAttribute('uid')    // getting unique id from and pushing into array
        console.log(gg)
        arrcheck.push(gg);
    }
    if(arrcheck.length===0){ // checking if array is null the 
        console.log('no item is checked')
        swal("No item is checked!!", "please select item to remove!", "error"); // using show alert to show if there is no items in the array
        return;
    }
    //here we are making delete request with the help of Ajax request 
    $.ajax({
        type: 'post',
        url: '/delete_todo/?id='+arrcheck,
        success: function(){ // on ajax sunnces i.e when data is delete
            swal("Item is deleted ", "click ok to go back Home ", "success") // using sweet alert to show the data is delete
            .then(redir => {
                window.location = '/';
            })
           
        },
        error: function(err){ 
            console.log(err);
        }

    });
})
                                                    

$(".createbuttn").click(function(){
  $(".AddTask").css("display","block");             
});
$(".submitButton").click(function(){
   $(".AddTask").css("display","none");
   
});
$("#board").click(function(){
  $("#task").removeClass("hghlght");
  $("#board").addClass("hghlght");
})

