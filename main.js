  // `
  // ##### four houres to five every day remember very well

 

  // let mya=document.querySelectorAll("ul li");
  // let mydiv=document.querySelector(".test");
  // console.log(mydiv);
  //  if(window.localStorage.getItem("color")){
  //   mydiv.style.backgroundColor=window.localStorage.getItem("color");
  //   for(let j=0;j<mya.length;j++){
  //     mya[j].classList.remove("active");
  //   }
  //  }
  // for(let i=0;i<mya.length;i++){
  //   mya[i].addEventListener("click",function(e){
  //     // console.log(e.currentTarget.dataset.color);
  //     for(let j=0;j<mya.length;j++){
  //       mya[j].classList.remove("active");
  //     }
      
  //     e.currentTarget.classList.add("active");
  //     window.localStorage.setItem("color",e.currentTarget.dataset.color);
  //     mydiv.style.backgroundColor=e.currentTarget.dataset.color;
  //   });
  // }
  //#########

  let myimg= Array.from(document.querySelectorAll(".slider-container img"));
  //get button brex and next
   let next=document.querySelector(".next");
   let prev=document.querySelector(".prev");
  curentslide=1;
  
  let slidelengh=myimg.length;
    let myul=document.createElement("ul");
    myul.setAttribute("id","pagination-ul");

 //create the li
 for(let i=1;i<=myimg.length;i++){

    // create li 
    let myli=document.createElement("li");
    let textforli=document.createTextNode(i);
    myli.appendChild(textforli);
    myli.setAttribute("data-index",i);
    myul.appendChild(myli);
 }
 //append the ul to document
  let spanul= document.getElementById("indicators");
  spanul.append(myul);
//####

let arrfromlis=Array.from(document.querySelectorAll('li'));

//loop into lis
arrfromlis.forEach(function (li) {

  li.addEventListener("click",function () {
    
    // access for curentslide
    curentslide=parseInt(this.getAttribute("data-index"));
    console.log(curentslide)

    if(curentslide == 5){

       next.classList.add("disabled");
       next.style.pointerEvents="none";

    }else if(curentslide === 1 ){

       prev.classList.add("disabled");
       prev.style.pointerEvents="none";

    }else{

      // for button prev 
      prev.classList.remove("disabled");
      prev.style.pointerEvents="initial";

      // for button next 
      next.classList.remove("disabled");
      next.style.pointerEvents="initial";
    }
    //access for slide-number
    document.querySelector("#slide-number").innerHTML=curentslide;

    //loop and remove active from all li
    arrfromlis.forEach(element =>element.classList.remove("active"));
    this.classList.add("active");

    // remove active from all images and add active to right image
    myimg.forEach(ele=>ele.classList.remove("active"));
    myimg[curentslide-1].classList.add("active");
  }) 
});


//##
next.onclick=function () {

  // remove disabled class from prev button
    prev.classList.remove("disabled");
    prev.style.pointerEvents="initial";

  
    curentslide++;
    
    // remove active from all images and add active to right image
   myimg.forEach(ele=>ele.classList.remove("active"));
   myimg[curentslide-1].classList.add("active");

   // remove active from all li and add active to right li
   arrfromlis.forEach(ele=>ele.classList.remove("active"));
  arrfromlis[curentslide-1].classList.add("active");

  //access for slide-number
  document.querySelector("#slide-number").innerHTML=curentslide;

  if(curentslide === 5){
      //add desabled class to btn next
      this.classList.add("disabled");
      this.style.pointerEvents="none";
  }else{
    //add desabled class to btn next
    this.classList.remove("disabled");
    this.style.pointerEvents="initial";
  }

   
}
// access for prev
prev.onclick=function () {

  // remove disabled class from next button
  next.classList.remove("disabled");
  next.style.pointerEvents="initial";

    curentslide--;
    //console.log(curentslide)
    // remove active from all images and add active to right image
   myimg.forEach(ele=>ele.classList.remove("active"));
   myimg[curentslide-1].classList.add("active");

   // remove active from all li and add active to right li
   arrfromlis.forEach(ele=>ele.classList.remove("active"));
  arrfromlis[curentslide-1].classList.add("active");

  //access for slide-number
  document.querySelector("#slide-number").innerHTML=curentslide;
  if(curentslide ==1){
    this.classList.add("disabled");
    prev.style.pointerEvents="none";
    }else{
      //add desabled class to btn next
      this.classList.remove("disabled");
      this.style.pointerEvents="initial";
    }
  
}

function thedefault() {
  arrfromlis[curentslide-1].classList.add("active");
}
 thedefault();

 //for the popup
 window.onload=function () {

    //access for slide-number
  document.querySelector("#slide-number").innerHTML=curentslide;

  // check if current is iqual 1 add class disabled to button prev 
  if(curentslide ==1){
    prev.classList.add("disabled");
    prev.style.pointerEvents="none";
    }else{
      prev.classList.remove("disabled");
    prev.style.pointerEvents="initial";
    }

  setTimeout(function () {
    document.querySelector(".popup").style.display="block";
  },2000);
  removePopup();
 } 
//create function popup
function removePopup() {
  document.querySelector(".thebest").onclick=function () {
    document.querySelector(".popup").style.display="none";
  }
}
 
//for edabit `
