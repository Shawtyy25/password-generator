// Generáló gomb működtetése:
document.getElementById("generateBtn").onclick = handleClick;
const lowerCase = 'abcdefghijklmnopqrstvwxyz'
const upperCase = 'ABCDEFGHIJKLMNOPQRSTVWXYZ'
const numbers = '0123456789'
const specials = '$@<>([])%!/{};,.-'
const passwd = [];

function handleClick() {
    const values = getInputValue();
    createdPasswd(values)
    console.log(values);
    
}
// Üzenetet küldő eljárás:
function sendMessage(message) {
    alert(message);
}

// Értékek kinyerése. Ha hiányzik érték az inputból, akkor üzenetet küldünk, input-ra helyezzük a fókszt, és null-t adunk vissza.
function getInputValue() {
    const inputElements = document.querySelectorAll("input");
    const values = {}

    if (inputElements.length > 0) {
        for (let index in inputElements) {
            if (inputElements[index].value === '') {
                sendMessage('Minden mezőt ki kell tölteni.')
                inputElements[index].focus()
                return {}
            }  
            values[inputElements[index].id] = inputElements[index].value
            
        }

        return values // TODO értékek listája
        
    }
}

function createPasswdPart(count, collection) {
    for (let i = 0; i < count; i++) {
        passwd.push(collection[Math.floor(Math.random() * collection.length)])

    }
    
}

function createdPasswd(values) {
    const donePasswd = []
    for (let key in values.keys)
}
