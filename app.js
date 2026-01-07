let inputBox = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(button => {
    button.addEventListener('click', (b) => {

        if (b.target.innerText === '=') {
            string = string === '' ? '0' : string;
            try {
                string = String(eval(string));
                inputBox.value = string;
            } catch {
                inputBox.value = "Error (Press AC)";
            }
        }

        else if (b.target.innerText === 'AC') {
            string = '';
            inputBox.value = '0';
        }

        else if (b.target.innerText === 'DEL') {
            string = string.slice(0, -1);
            inputBox.value = string || '0';
        }

        else if (b.target.innerText === '+/-') {
            string = String(-Number(string || 0));
            inputBox.value = string;
        }

        else {
            string += b.target.innerText;
            inputBox.value = string;
        }
    });
});
