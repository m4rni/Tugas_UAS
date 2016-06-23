/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// memeriksa apakah semua elemen stringnya adalah angka saja
function isNumber (elem, helperMsg){
    var numericExpression = /^[0-9] +$/;
    if(elem.value.match (numericExpression)){
        return true;
       
    }else{
        alert(helperMsg);
        elem.focus();
        return false;
    }
}

//memeriksa apakah semua element stringnya adalah alfabet saja
function isAlphabet (elem, helperMsg){
    var alphaexp = /^[a-zA-Z] +$/;
    if(elem.value.match (alphaExp)){
        return true;
       
    }else{
        alert(helperMsg);
        elem.focus();
        return false;
    }
}

// memeriksa semua eleman stringnya adalah kombinasi angka atau alfabet saja
function isalphaNumeric (elem, helperMsg){
    var alphaExp = /^[0-9a-zA-Z] +$/;
    if(elem.value.match (numericExpression)){
        return true;
       
    }else{
        alert(helperMsg);
        elem.focus();
        return false;
    }
}

// if the element's string matches the regex allnumbers
function isNumber (elem, helperMsg){
    var numericExpression = /^[0-9] +$/;
    if(elem.value.match (numericExpression)){
        return true;
       
    }else{
        alert(helperMsg);
        elem.focus();
        return false;
    }
}

//memeriksa panjang string antara min sd max
function lengthRestriction (elem, min, max){
    var uInput = elem.value;
    if(uInput.length >= min && uInput.length <= max){
        return true;
       
    }else{
        alert("please enter " +min+ " to "+max+ " chars");
        elem.focus();
        return false;
    }
}