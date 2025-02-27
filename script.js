function adjustSize() {
    let size = Math.min(window.innerWidth, window.innerHeight) * 0.5;

    size = Math.max(300, Math.min(size, 600)); 

    document.body.style.width = size + "px";
    document.body.style.height = size + "px";
}

window.addEventListener("resize", adjustSize);
window.addEventListener("load", adjustSize);


// פונקציה שמתאימה את גודל ה-body ל-50% מהצד הקטן של החלון, בגבולות 300px-600px  
// מתבצעת בטעינת הדף ובשינוי גודל חלון
