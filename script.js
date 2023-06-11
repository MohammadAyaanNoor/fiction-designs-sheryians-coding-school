var tl = gsap.timeline();
    gsap.to("#page3>#text",{
    scrollTrigger:{
        trigger:"#page3>#text",
        scroller:"body",
        
        start:"top 50%",
        end:"bottom 50%",        
        scrub:1,
        },
        left:"0%",
        duration:3,
        ease:Expo.easeInOut,

   })
   gsap.to("#main #page2 #r1 #vd",{
    scrollTrigger:{
        trigger:"#main #page2 #r1 #vd",
        scroller:"body",
        
        start:"top 100%",
        end:"bottom 95%",        
        scrub:1,
        },
        right:"0%",
        duration:1,
        ease:Expo.easeInOut,

   })
   gsap.to("#main #page3 #vid2",{
    scrollTrigger:{
        trigger:"#main #page3 #vid2",
        scroller:"body",
        
        start:"top 100%",
        end:"bottom 95%",        
        scrub:1,
        },
        scale:1,
        duration:1,
        ease:Expo.easeInOut,

   })
   gsap.to("#page4 #right",{
    scrollTrigger:{
        trigger:"#page4 #right",
        scroller:"body",
        
        start:"top 100%",
        end:"bottom 95%",        
        scrub:1,
        },
        left:"35%",
        duration:0.5,
        ease:Expo.easeInOut,

   })
   gsap.to("#page4 #buttons",{
    scrollTrigger:{
        trigger:"#page4 #buttons",
        scroller:"body",
        
        start:"top 100%",
        end:"bottom 95%",        
        scrub:1,
        },
        right:"-14%",
        duration:0.6,
        ease:Expo.easeInOut,

   })
   gsap.to("#main #page5 h1",{
    scrollTrigger:{
        trigger:"#main #page5 h1",
        scroller:"body",
        
        start:"top 90%",
        end:"bottom 95%",        
        scrub:1,
        },
        scale:1,
        duration:1,
        ease:Expo.easeInOut,

   })
   

   
tl
    .to("#hero h3",{
        top:0,
        stagger:2,
        ease:Expo.easeInOut
   },'a')
   .to("#hero h3",{
    top:"-100%",
    ease:Expo.easeInOut,
    stagger:2,
    delay:2,
   },'a')
   .to("#loader",{
    top:"-100%",
    delay:5.6,
    duration:1.3,
    ease:Expo.easeInOut,
   },'a')
   .from("#main>#page1>#nav",{
    top:"-100%",
    duration:1,
    ease:Expo.easeInOut,
   },'b')
   .from("#main>#page1>#head",{
    left:"-10%",
    scale:1.3,
    opacity:0,
    duration:1,
    ease:Expo.easeIn,
   },'b')
   
   .from("#main>#page1>#para>p",{
    opacity:0,
    duration:1,
   },'b')
   .from("#vid",{
    scale:0.1,
    opacity:0,
    duration:1,
    ease:Expo.easeIn,

   },'b')

//    onStart:function(){
//     $("#page3>h1").textillate({
//          in: { effect: 'fadeInUp',
//         callback:function(){
//             $("#page3>h1").textillate('out');
//         } },
//          out:{effect:'fadeOutUp'}
//          });
// }

   
