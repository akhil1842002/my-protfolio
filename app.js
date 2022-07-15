function reviewSlider(){

    let counter = 0
    const containerWidth = document.querySelector('.container').offsetWidth
    const reviewSectionList = document.querySelector('.review-sections-list')
    const reviewSections = reviewSectionList.querySelectorAll('.review-section')
    const prevBtn = document.querySelector('#prev')
    const nextBtn = document.querySelector('#next')

    counter = 0
    nextBtn.addEventListener('click',() => {
        if(counter < reviewSections.length-1){
            counter ++
            reviewSectionList.style.left = `-${counter * 630}px`
            reviewSectionList.style.transitionDuration =  "1s"
        }else{
            counter = 0
            reviewSectionList.style.left = `-${counter * 630}px`
        }
        if(counter === reviewSections.length){
            counter = 0
            console.log(counter,reviewSections.length);
            reviewSectionList.style.left = `-${counter * 630}px`
            reviewSectionList.style.transitionDuration =  "1s"
        }
    })

    prevBtn.addEventListener('click',() => {
        if(reviewSections.length > 1){
            if(counter === 0){
                counter = 1
            }
            counter --
            reviewSectionList.style.left = `-${counter * 630}px`
            reviewSectionList.style.transitionDuration =  "1s"
        }
    })

}

reviewSlider()


function showAndHiddeLinkContainer(){

    const menuContainer = document.querySelector('.menu-btn-links-container')
    const menuBtns = document.querySelector('.menu-btns')
    const closeBtn = menuBtns.querySelector('#close-btn')
    const openBtn = menuBtns.querySelector('#open-btn')

    menuContainer.style.transform = "translateY(-450px)"
    
    openBtn.addEventListener('click',(e) => {
        menuContainer.style.display = "flex"
        menuContainer.style.transition = "all 1s ease-in-out"
        menuContainer.style.transform = "translateY(-0px)"
        openBtn.style.display = "none"
        closeBtn.style.display = "block"

    })

    closeBtn.addEventListener('click',() => {
        menuContainer.style.transform = "translateY(-450px)"
        openBtn.style.display = "block"
        closeBtn.style.display = "none"
    })
    
}

showAndHiddeLinkContainer()

