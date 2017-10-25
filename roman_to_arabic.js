let i = 0, str1 = "", str2 = "", str3 = "", str4 = "", num = 0, pre = 0, curr = 0;
let btn1 = document.getElementById("convert");
let map_arabic = ["&\#1632;","&\#1633;","&\#1634;","&\#1635;","&\#1636;","&\#1637;","&\#1638;","&\#1639;","&\#1640;","&\#1641;"];

function getArabicNumbers(str3)
{

    str4 = "";
    str3 = String(str3);

    for(i=0; i<str3.length; i++)
    {
        str4 += map_arabic[parseInt(str3.charAt(i))];
    }

    return str4;

}

function char_to_int(a){

    switch (a){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }

}

function roman_to_Int(str1){

    if(str1 == null){
        return -1;
    }
    
    num = char_to_int(str1.charAt(0));
    
    for(i=1; i<str1.length; i++){
        curr = char_to_int(str1.charAt(i));
        pre = char_to_int(str1.charAt(i-1));
    
        if(curr <= pre){
            num += curr;
        } else {
            num = num - pre*2 + curr;
        }
    }
    return num;
}

btn1.addEventListener('click', function( event ){

    str1 = document.getElementById("roman").value;
    str1 = str1.toUpperCase();
    str2 = roman_to_Int(str1);

    document.getElementById("number").innerHTML = "Roman numeric input: "+ str1;
    document.getElementById("arabic").innerHTML = "Converted Arabic number: "+ getArabicNumbers(str2);

});