document.addEventListener('DOMContentLoaded', () => {
    const prince = document.querySelector('.character')
    let bottom = 0
    let gravity = 0.9
    let isJumping = false

    function jump() {
        if (isJumping) return

        let timerUpId = setInterval(function() {
            if (bottom > 250) {
                clearInterval(timerUpId)
                let timerDownId = setInterval(function() {
                    if (bottom < 0) {
                        clearInterval(timerDownId)
                        isJumping = false
                    }
                    bottom -= 5
                    prince.style.bottom = bottom + 'px'
                }, 20)
            }
            isJumping = true
            bottom += 30
            bottom *= gravity
            prince.style.bottom = bottom + 'px'
        }, 20)
    }
    
    function control(e) {
        if (e.keyCode === 38) { // UP-ARROW
            jump()
        }
    }

    document.addEventListener('keydown', control)
})