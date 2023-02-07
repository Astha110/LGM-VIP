let btn = document.getElementById('btn');
let Mytodo = document.getElementById('Mytodo');
let inputField = document.getElementById('IF');

btn.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    Mytodo.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick',function(){
        Mytodo.removeChild(paragraph);
    })
    

})