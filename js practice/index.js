// function calculate() {
//     // Get input values
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);
//     const operation = document.getElementById('operation').value;    let result;    // Perform calculation based on the selected operation
//     switch (operation) {
//         case 'add':
//             result = num1 + num2;
//             break;
//         case 'subtract':
//             result = num1 - num2;
//             break;
//         case 'multiply':
//             result = num1 * num2;
//             break;
//         case 'divide':
//             if (num2 === 0) {
//                 result = 'Error: Division by zero';
//             } else {
//                 result = num1 / num2;
//             }
//             break;
//         default:
//             result = 'Invalid operation';
//     }    // Check if the result is a number
//     if (typeof result === 'number') {
//         // Check if result is even or odd
//         const evenOdd = (result % 2 === 0) ? 'Even' : 'Odd';
//         document.getElementById('result').innerText = `Result: ${result} (${evenOdd})`;
//     } else {
//         document.getElementById('result').innerText = result;
//     }
// }