// set initial count
let count = 0

// select value and buttons

const value = document.querySelector("#value")

const btns = document.querySelectorAll(".btn")

console.log(btns)


btns.forEach(function(btn) {
    //console.log(btn)
    btn.addEventListener('click', function(e){
        //e.currentTarget.classList[1] == 'increase' // was thinking of doing this way
        const classStyle = e.currentTarget.classList
        if (classStyle.contains('increase')){
            // increase value
            count++;
            value.textContent = count
        }
        else if (classStyle.contains('decrease')){
            // decrease value
            count--;
            value.textContent = count

        }
        else if(classStyle.contains('reset')){
            //reset value to 0
            count = 0;
            value.textContent = count

        }

        if (count > 0){
            value.style.color = "green"
            document.body.style.backgroundColor = "PaleGreen"
        }
        else if (count < 0){
            value.style.color = "red"
            document.body.style.backgroundColor = "LightCoral"
        }
        else if (count == 0){
            value.style.color = "black" 
            document.body.style.backgroundColor = "white"
        }

        //console.log(e.currentTarget.classList[1])
    })
})