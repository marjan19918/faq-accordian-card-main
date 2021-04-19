
 let toggle1=false;
function showtoggle() {
    const arro1=document.getElementById('arro1')
const ques1=document.getElementById('ques1')
const ans1=document.getElementById('answer1')
    if (toggle1===false) {
        arro1.style.transform='rotate(180deg)';
        ques1.style.fontWeight='bold';
        ans1.style.display='block';  
    }
    else{
        arro1.style.transform='rotate(360deg)';
        ques1.style.fontWeight='normal';
        ans1.style.display='none';
    }
toggle1=!toggle1
}
let toggle2=false
function showtoggle2(params) {
    const answer2=document.getElementById('answer2')
    const arro2=document.getElementById('arro2')
    const ques2=document.getElementById('ques2')

 if (toggle2===false) {
    answer2.style.display='block';
    arro2.style.transform='rotate(180deg)';
    ques2.style.fontWeight='bold';
     
 } else {
   
    answer2.style.display='none';
   arro2.style.transform='rotate(360deg)';
   ques2.style.fontWeight='normal';
 }
 toggle2=!toggle2
}
let toggle3=false;
function showtoggle3(params) {
   const answer3=document.getElementById('answer3');
   const arro3= document.getElementById('arro3');
  const ques3 = document.getElementById('ques3');
  if (toggle3===false) {
      answer3.style.display='block';
      arro3.style.transform='rotate(180deg)';
      ques3.style.fontWeight='bold';

  } else {
    answer3.style.display='none';
    arro3.style.transform='rotate(360deg)';
    ques3.style.fontWeight='normal';
  }
  toggle3 =!toggle3
}
let toggle4=false;
function showtoggle4(params) {
   const answer4=document.getElementById('answer4');
   const arro4= document.getElementById('arro4');
  const ques4 = document.getElementById('ques4');
  if (toggle4===false) {
      answer4.style.display='block';
      arro4.style.transform='rotate(180deg)';
      ques4.style.fontWeight='bold';

  } else {
    answer4.style.display='none';
    arro4.style.transform='rotate(360deg)';
    ques4.style.fontWeight='normal';
  }
  toggle4 =!toggle4
}
let toggle5=false;
function showtoggle5(params) {
   const answer5=document.getElementById('answer5');
   const arro5= document.getElementById('arro5');
  const ques5 = document.getElementById('ques5');
  if (toggle5===false) {
      answer5.style.display='block';
      arro5.style.transform='rotate(180deg)';
      ques5.style.fontWeight='bold';

  } else {
    answer5.style.display='none';
    arro5.style.transform='rotate(360deg)';
    ques5.style.fontWeight='normal';
  }
  toggle5 =!toggle5
}





