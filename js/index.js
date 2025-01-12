window.addEventListener("DOMContentLoaded",()=>{
        const elemento = document.querySelector(".barra-1__progreso");
        let width = 0;
        const main = setInterval(carga,50)
        function carga(){
            if(width >= 100){
                clearInterval(main)
            }else{
                width ++;
                elemento.style.width = width + "%";
                elemento.textContent = width + "%";
            }
        }

})