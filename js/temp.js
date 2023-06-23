// const authToken = 'tsrdHDnvY0E-Bge4Sw7egZsVstklQPax';
// const widgetPin = 'V1';

// // const url = `http://blynk.cloud/${authToken}/get/${widgetPin}`;
// const url = 'http://blynk.cloud/tsrdHDnvY0E-Bge4Sw7egZsVstklQPax/get/V1';


// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     const valueElement = document.getElementById("tempurature-value");
//     valueElement.textContent = data[0];
//   })
//   .catch(error => {
//     console.error('Đã xảy ra lỗi:', error);
//   });
// const url = "http://blynk-cloud.com/tsrdHDnvY0E-Bge4Sw7egZsVstklQPax/get/V1";

// fetch(url)
//   .then(response => response.text())
//   .then(data => {
//     let result = '';
//     for (let i = 0; i < data.length; i++) {
//       const character = data.charAt(i);
//       if (character.match(/[a-zA-Z0-9]/)) {
//         result += character;
//       }
//     }
//     const valueElement = document.getElementById("tempurature-value");
//     valueElement.textContent = result;
//   })
//   .catch(error => {
//     console.error('Đã xảy ra lỗi:', error);
//   });

