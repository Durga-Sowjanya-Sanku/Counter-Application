document.addEventListener('DOMContentLoaded', () => {
    //Checking..
    console.log("Documented Loaded...!");
    
    const counterValue = document.getElementById("counter-value");

    const increaseBtn = document.getElementById("increase-btn");
    const decreaseBtn = document.getElementById("decrease-btn");
    const resetBtn = document.getElementById("reset-btn");

    console.log(counterValue);

    let value = 0;

    increaseBtn.addEventListener("click", ()=>{
        value++;
        updateCount();
    });

    decreaseBtn.addEventListener("click", ()=>{
        value--;
        updateCount();
    });

    resetBtn.addEventListener('click', ()=>{
        value = 0;
        updateCount();
    });

    function updateCount() {
        counterValue.textContent = value;
    }
})