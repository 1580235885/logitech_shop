var footer = document.getElementsByClassName("x-foot-list");
for(var i=0; i<footer.length; i++) {
    footer[i].onclick = function() {
        for(var j=0;j<footer.length;j++){        
            footer[j].classList.remove('x-active');
        }
        this.classList.add('x-active');
    }
}