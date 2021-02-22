// Yes. All this code only for a button that takes you to the top
(function(){
    try{
        const top = document.getElementById("top");
        function scrollToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        top.addEventListener("click", scrollToTop);
    }catch(err){
        const topError = document.getElementById("topError");
        topError.textContent = err
    }
}())