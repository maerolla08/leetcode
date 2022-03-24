///********* no intl code **************** */
// const formatPhone = function() {
//     let phoneNumberString = document.getElementById("phone").value;
//     var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
//     var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
//     console.log(cleaned);
//     console.log(match)
//     if (match) {
//         // return '(' + match[1] + ') ' + match[2] + '-' + match[3];
//         console.log('(' + match[1] + ') ' + match[2] + '-' + match[3]);
//     } else {
//         console.log('bad ph#');
//     }
//     // return null;
// };

///********* intl code allowed **************** */
// function formatPhoneNumber(phoneNumberString) {
//     var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
//     var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
//     if (match) {
//         var intlCode = (match[1] ? '+1 ' : '');
//         return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
//     }
//     return null;
// }
// formatPhoneNumber('+12345678900') // => "+1 (234) 567-8900"
// formatPhoneNumber('2345678900') // => "(234) 567-8900"

///************************* */

/// simple function to validate input

///************************* */

// const formatPhone = function(phone_number) {
//     phone_number = phone_number.toString();
//     phone_number = "(" + phone_number.substring(0, 3) + ")" + phone_number.substring(3, 6) + '-' + phone_number.substring(6);
//     return phone_number;
// };

// module.exports = formatPhone;

///************************* */
//////////// add brackets as you go ////////
///************************* */

// const input = document.querySelector('#phone');

// const formatPhone = function(e) {
//     let phoneNumberString = e.target.value;
//     console.log(e.target.value);
//     if (phoneNumberString.length === 3)
//         phoneNumberString = "(" + phoneNumberString + ")";
//     if (phoneNumberString.length === 8)
//         phoneNumberString = phoneNumberString + "-";
//     console.log(phoneNumberString);
//     document.getElementById("phone").value = phoneNumberString;
// };


// input.addEventListener('input', formatPhone);
///************************* */