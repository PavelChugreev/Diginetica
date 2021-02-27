export default function filters(){
    const additionalBtn = document.querySelector(".filter-category__additional a");
    const categories = document.querySelectorAll(".filter-category__item");

    function minimize(){
        categories.forEach((item,i) => {
            if(i > 7){
                item.classList.toggle("hidden");
            }
            if( i == categories.length - 1 && item.classList.contains("hidden")){
                additionalBtn.innerText = "Еще 10 категорий..."
            } else {
                additionalBtn.innerText = "Скрыть 10 категорий..."
            }
        });
    }
    minimize();
    additionalBtn.addEventListener("click", minimize);

    
    const clearBoxBtn = document.querySelector(".filter-brands__clear");
    const checkBoxes = document.querySelectorAll(".filter-brands__item input[type='checkbox']");
    clearBoxBtn.addEventListener("click", () => {
        checkBoxes.forEach(item => item.checked = false);
    });
}
