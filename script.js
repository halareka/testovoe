
//общая инфа
const sub = document.getElementById("submit");
const cat = document.getElementById("cat_img");
let ht_src = "https://http.cat/"
let code,a = 0;
let array_code = [];
//апдейт и тд
sub.addEventListener("click", ()=>{update(code);})
function update(e){
    e = document.getElementById("num").value;
    cat.src = link_conv(ht_src,e);
    save(e);
    text();
}
// тут крч через массив будем делать
const save = function(e){
    if(array_code.length < 5){
        array_code[a] = e;
        a++;
    }else{
        array_code.unshift(e);
        array_code.pop();
    }
    localStorage.clear('last');
    localStorage.setItem('last',e);
    localStorage.setItem('lastcode', array_code);
}
const link_conv = (src ,code) => src + code;
//TEXT
function text(){
    document.getElementById("text").innerHTML = 
    `Последнии 5 кодов ошибки которые вы загружали: ${localStorage.getItem("lastcode")}`
}
//виндоус он лоад
if(localStorage.getItem('last') > 0){
    cat.src = link_conv(ht_src,localStorage.getItem('last')); 
}
