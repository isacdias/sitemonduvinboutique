<!-- JS -->
<script>
  window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('.selector', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 'screenWidth/2', 'screenWidth'],
        ]
      }
    })
  }
</script>



























//select elements in DOM
// const images = document.querySelectorAll('.anim')


// observer = new IntersectionObserver((entries)=>{

//     entries.forEach(entry=>{

//         if(entry.intersectionRatio > 0){
//             entry.target.style.animation = `anim1 1s ${entry.target.dataset.delay} forwards ease-out`
//         }
//         else {
//          entry.target.style.animation = `none`
//         }

//     })

  
// })

// images.forEach(images => {
//     observer.observe(images)
// })

