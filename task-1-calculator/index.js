let input = document.querySelector("#inputbox");
let buttons = document.querySelectorAll('button');


let string = '';
let arr = Array.from(buttons);
arr.forEach((button) =>{
    button.addEventListener('click',(e) =>{
        let btn_value = e.target.innerHTML;

        if (btn_value == '=') {
            string = eval(string);
            input.value = string;
        }

        else if (btn_value == 'AC') {
            string = '';
            input.value = string;
        }
        
        else if (btn_value == 'Del') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else{
            string += btn_value;
            input.value = string;
        }
    })
})


