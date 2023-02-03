


//박스 호버시 이미지 변동
let attr_img = document.querySelectorAll('.attr_img');
let attr_content_box =document.querySelectorAll('.attr_content_box')

for(let i=0; i<attr_content_box.length; i++){
  attr_content_box[i].addEventListener("mouseover", function(){
    attr_img[i].classList.add('active');
  })
  attr_content_box[i].addEventListener("mouseleave", function(){
    attr_img[i].classList.remove('active');

  })
}

//카테고리별 클릭
let attr_total = document.querySelector('#attr_total');
let attr_nature = document.querySelector('#attr_nature');
let attr_exhibi = document.querySelector('#attr_exhibi');
let attr_beach = document.querySelector('#attr_beach');
let attr_park = document.querySelector('#attr_park');
let attr_li = document.querySelectorAll('.attr_li')
let attr_cate = document.querySelectorAll('.attr_cate');
let attr_content_wrap = document.querySelectorAll('.attr_content_wrap');

//전체
attr_total.addEventListener('click', ()=>{
  for(let i=0; i<attr_cate.length; i++){
    if(attr_cate[i].innerText == ``){
      attr_content_wrap[i].style.display = 'none'
    }else{
      attr_content_wrap[i].style.display = 'block'
    }

  }


})
//자연/사찰
attr_nature.addEventListener('click', ()=>{

  
  for(let i=0; i<attr_cate.length; i++){
    if(attr_cate[i].innerText == `자연/사찰`){
      attr_content_wrap[i].style.display = 'block'
    }else{
      attr_content_wrap[i].style.display = 'none'
    }}

})
//전시/관람
attr_exhibi.addEventListener('click', ()=>{
  for(let i=0; i<attr_cate.length; i++){
    if(attr_cate[i].innerText == `전시/관람`){
      attr_content_wrap[i].style.display = 'block'
    }else{
      attr_content_wrap[i].style.display = 'none'
    }
  }
})
//해수욕장/항구
attr_beach.addEventListener('click', ()=>{
  for(let i=0; i<attr_cate.length; i++){
    if(attr_cate[i].innerText == `해수욕장/항구`){
      attr_content_wrap[i].style.display = 'block'
    }else{
      attr_content_wrap[i].style.display = 'none'
    }
  }
})
//공원/시설
attr_park.addEventListener('click', ()=>{
  for(let i=0; i<attr_cate.length; i++){
    if(attr_cate[i].innerText == `공원/시설`){
      attr_content_wrap[i].style.display = 'block'
    }else{
      attr_content_wrap[i].style.display = 'none'
    }
  }
})


attr_menu = document.querySelectorAll('.attr_menu>ul>li')


  // for(let i=0; i<attr_menu.length; i++){
  //   attr_menu[i].addEventListener('click', (e) =>{
  //     attr_menu.classList.replace(' color','');
  //     // console.log(attr_menu[i])
  //   })
  //   attr_menu[i].classList.add('color');
       

  //   };
  
//카테고리 설정시 색깔 변경

