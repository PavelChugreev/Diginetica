export default function search(){
    const searchForm = document.querySelector("#search-form");
    const clearBtn = document.querySelector(".search-form__field span" );
    const searchField = document.querySelector(".search-form__field input[type='search']");
  
    clearBtn.addEventListener("click", () => searchField.value = "");
    
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Success");
    })
}