function changeColor() {
    const choise = document.getElementById("clr").value;
    localStorage.setItem("colorName", choise);
    applyBackground(choise);
}
function applyBackground(color) {
    const section3 = document.querySelectorAll('.section3');
    section3.forEach(section3 => {
        section3.style.backgroundColor = color;
    });

    const section4 = document.querySelectorAll('.section4');
    section4.forEach(section4 => {
        section4.style.backgroundColor = color;
    });
    const inp1 = document.querySelectorAll('.inp1');
    inp1.forEach(inp1 => {
        inp1.style.backgroundColor = color;
    });
    const img1 = document.querySelectorAll('.first');
    img1.forEach(img1=>{
        img1.style.borderColor=color;
    });
    const img2 = document.querySelectorAll('.img2');
    img2.forEach(img2=>{
        img2.style.borderColor=color;
    });
    const icns = document.querySelectorAll('.Micons .icons i');
    icns.forEach(icns=>{
        icns.style.borderColor=color;
    });
    const lst = document.querySelectorAll('.last');
    lst.forEach(lst=>{
        lst.style.color=color;
    });
}

window.onload = function() {
    const savedColor = localStorage.getItem("colorName");
    if (savedColor) {
        applyBackground(savedColor);
        document.getElementById("clr").value = savedColor;
    }
};