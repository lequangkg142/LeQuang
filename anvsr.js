const hightlight = document.getElementById('hightlight');
console.log(hightlight);

const messages = [
    "HELLO!! Cả nhà",
    "Con mới viết cái Web Kkk",
    "Ngày 17 con về__",
    "<3 <3 <3 <3",
];
let messlength = messages.length;
let messIndex = 0;
let charIndex = 0;

function typing(messIndex){
    let currentMess = messages[messIndex];
    if(charIndex < currentMess.length){
        let currentChar = currentMess.substring(0, charIndex + 1);
        hightlight.textContent = currentChar;
        charIndex ++;
    }else{
        if(messIndex < messlength - 1){
        messIndex ++;
    }else{
        messIndex = 0;
    }
        charIndex = 0;
    }
    console.log(currentMess);
    setTimeout(typing, 200, messIndex);
}
typing(0);