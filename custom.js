let output = "";
let encString = "";
let encVal

$(document).ready(function () {
    $("#btn-encode").click(function () {
        let str = document.getElementById('enc').value;
        str = str.toLowerCase()

        const strArr = str.split('').reverse().join('')
        console.log(strArr, '<<--reverse')

        let array = [];
        let originalStr = [];
        for (let i = 0; i < strArr.length; i++) {
            if (strArr[i] != " ") {
                originalStr.push(strArr.charCodeAt(i))
                if (strArr[i] == "x") {
                    array.push(("a".charCodeAt(i)))
                }
                else if (strArr[i] == "y") {
                    array.push(("b".charCodeAt(i)))
                } else if (strArr[i] == "z") {
                    array.push(("c".charCodeAt()))
                } else {
                    array.push((strArr.charCodeAt(i) + 3))
                }
            }
            else {
                array.push(" ");
                originalStr.push(" ")
            }

        }
        let finalStr = ''
        for (let i = 0; i < array.length; i++) {
            if (String.fromCharCode(array[i]) != " ") {
                finalStr += String.fromCharCode(array[i])
            }
        }
        console.log(finalStr, '<<-- encoding')
        document.getElementById('encVal').innerText = finalStr.replace(/[^\w\s]/gi, ' ')
        output = originalStr;
        encString = finalStr;
    });

    $("#btn-decode").click(() => {
        let showStr = encString;
        let str = output;
        document.getElementById('dec').placeholder = showStr.replace(/[^\w\s]/gi, ' ');
        let finalStr = '';
        const strArr = str.reverse()
        for (let i = 0; i < strArr.length; i++) {
            finalStr += String.fromCharCode(strArr[i])
        }
        console.log(finalStr, '<<-- decoding')
        document.getElementById('decVal').innerText = finalStr.replace(/[^\w\s]/gi, ' ')
    })

    $("#a-direct-decode").click(() => {
        let showStr = encString;
        let str = output;
        document.getElementById('enc').placeholder = showStr.replace(/[^\w\s]/gi, ' ');
        $("#inp-encoded").val(encString)
        let finalStr = '';
        const strArr = str.reverse()
        for (let i = 0; i < strArr.length; i++) {
            finalStr += String.fromCharCode(strArr[i])
        }
        console.log(finalStr, '<<-- decoding')
        document.getElementById('decVal').innerText = finalStr.replace(/[^\w\s]/gi, ' ')
    })
});
