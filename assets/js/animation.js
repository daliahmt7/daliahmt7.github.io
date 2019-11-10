var tl=new TimelineMax({repeat:2});
// tl.to(".st10",0.75,{opacity:0.1 ,ease: Power2.easeIn , repeatDelay:1,repeat:-1, yoyo:true})

var elements = document.getElementsByClassName('brownish').children;

for (var i=0; i < elements.length; i++) {
//   elements[i].getElementsByClassName("st10").opacity=0.5;

  tl.to(elements[i].firstElementChild.getElementsByClassName("st10").item,0.2,{opacity:0.1 ,ease: Power2.easeIn , repeatDelay:1,repeat:-1, yoyo:true})
}
