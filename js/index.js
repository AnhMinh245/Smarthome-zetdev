var timeElement = document.getElementById("time-value");
var currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

timeElement.innerHTML = currentTime;

document.addEventListener('DOMContentLoaded', function() {
const url = 'https://blynk.cloud/external/api/get?token=tsrdHDnvY0E-Bge4Sw7egZsVstklQPax&pin=v1';

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data); // In ra dữ liệu trả về để kiểm tra
    const valueElement = document.getElementById('tempurature-value');
    if (data && data[0] && data[0].value !== undefined) {
        valueElement.textContent = data;
    } else {
      valueElement.textContent = data+"℃";
    }
  })
  .catch(error => {
    console.error('Đã xảy ra lỗi:', error);
  });
});
document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://blynk.cloud/external/api/get?token=tsrdHDnvY0E-Bge4Sw7egZsVstklQPax&pin=v2';
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data); // In ra dữ liệu trả về để kiểm tra
        const valueElement = document.getElementById('humid-value');
        if (data && data[0] && data[0].value !== undefined) {
            valueElement.textContent = data;
        } else {
          valueElement.textContent = data+"%";
        }
      })
      .catch(error => {
        console.error('Đã xảy ra lỗi:', error);
      });
});
document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://blynk.cloud/external/api/get?token=tsrdHDnvY0E-Bge4Sw7egZsVstklQPax&pin=v2';
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data); // In ra dữ liệu trả về để kiểm tra
        const valueElement = document.getElementById('humid-value');
        if (data && data[0] && data[0].value !== undefined) {
            valueElement.textContent = data;
        } else {
          valueElement.textContent = data+"%";
        }
      })
      .catch(error => {
        console.error('Đã xảy ra lỗi:', error);
      });
});
//Gas
document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://blynk.cloud/external/api/get?token=tsrdHDnvY0E-Bge4Sw7egZsVstklQPax&pin=v8';
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data); // In ra dữ liệu trả về để kiểm tra
        const valueElement = document.getElementById('gas-value');
        if (data && data[0] && data[0].value !== undefined) {
            valueElement.textContent = data;
        } else {
          valueElement.textContent = data+"m³";
        }
      })
      .catch(error => {
        console.error('Đã xảy ra lỗi:', error);
      });
    });
//Cam bien chuyen dong V12
    document.addEventListener('DOMContentLoaded', function() {
      const url = 'https://blynk.cloud/external/api/get?token=tsrdHDnvY0E-Bge4Sw7egZsVstklQPax&pin=v12';
      
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data); // In ra dữ liệu trả về để kiểm tra
          const valueElement = document.getElementById('device4');
          if (data && data[0] && data[0].value !== undefined) {
              valueElement.textContent = data;
          } else {
            if(data==1){
              valueElement.textContent = 'Có chuyển động';
              data1=data;
              
            };
          }
        })
        .catch(error => {
          console.error('Đã xảy ra lỗi:', error);
        });
  });
//chanV6
document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://blynk.cloud/external/api/get?token=tsrdHDnvY0E-Bge4Sw7egZsVstklQPax&pin=v6';
    const url2 = 'https://blynk.cloud/external/api/get?token=tsrdHDnvY0E-Bge4Sw7egZsVstklQPax&pin=v10';
    const url3 = 'https://blynk.cloud/external/api/get?token=tsrdHDnvY0E-Bge4Sw7egZsVstklQPax&pin=v11';
    let data1,data2,data3;
    
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data); // In ra dữ liệu trả về để kiểm tra
        const valueElement = document.getElementById('device1');
        const status = document.getElementById('status');
        if (data && data[0] && data[0].value !== undefined) {
            valueElement.textContent = data;
        } else {
          if(data==1){
            valueElement.textContent = 'Bật';
            status.textContent='Trạng thái:Cảnh báo'
            data1=data;
            
          };
        }
      })
      .catch(error => {
        console.error('Đã xảy ra lỗi:', error);
      });
    fetch(url2)
        .then(response => response.json())
        .then(data => {
        console.log(data); // In ra dữ liệu trả về để kiểm tra
        const valueElement = document.getElementById('device2');
        const status = document.getElementById('status');
        if (data && data[0] && data[0].value !== undefined) {
            valueElement.textContent = data;
            
        } else {
          if(data==1){
            valueElement.textContent = 'Bật';
            status.textContent='Trạng thái:Cảnh báo'
            data2=data;
          };
        }
      })
      .catch(error => {
        console.error('Đã xảy ra lỗi:', error);
      });
      fetch(url3)
      .then(response => response.json())
      .then(data => {
        console.log(data); // In ra dữ liệu trả về để kiểm tra
        const valueElement = document.getElementById('device3');
        const status = document.getElementById('status');
        if (data && data[0] && data[0].value !== undefined) {
            valueElement.textContent = data;
        } else {
          if(data==1){
            valueElement.textContent = 'Bật';
            status.textContent='Trạng thái:Cảnh báo'
            data3=data;
          };
        }
      })
      .catch(error => {
        console.error('Đã xảy ra lỗi:', error);
      });
});
// document.addEventListener('DOMContentLoaded', function() {
//     const url = 'https://blynk.cloud/external/api/get?token=tsrdHDnvY0E-Bge4Sw7egZsVstklQPax&pin=v10';
    
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data); // In ra dữ liệu trả về để kiểm tra
//         const valueElement = document.getElementById('warning');
//         if (data && data[0] && data[0].value !== undefined) {
//             valueElement.textContent = data;
//         } else {
//           if(data==1){
//             valueElement.textContent = 'Cảnh báo Khí Gas vượt ngưỡng';
//           };
//         }
//       })
//       .catch(error => {
//         console.error('Đã xảy ra lỗi:', error);
//       });
// });
// document.addEventListener('DOMContentLoaded', function() {
//     const url = 'https://blynk.cloud/external/api/get?token=tsrdHDnvY0E-Bge4Sw7egZsVstklQPax&pin=v11';
    
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data); // In ra dữ liệu trả về để kiểm tra
//         const valueElement = document.getElementById('warning');
//         if (data && data[0] && data[0].value !== undefined) {
//             valueElement.textContent = data;
//         } else {
//           if(data==0){
//             valueElement.textContent = 'Phòng rất ẩm';
//           };
//         }
//       })
//       .catch(error => {
//         console.error('Đã xảy ra lỗi:', error);
//       });
// });


//Doc gia tri thoi tiet
fetch('https://api.openweathermap.org/data/2.5/weather?lat=21.0245&lon=105.8412&appid=2226c20f90b94d18d5787534061ddc78')
document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=21.0245&lon=105.8412&appid=2226c20f90b94d18d5787534061ddc78';
    
    // Gọi API thời tiết và lấy dữ liệu
fetch(url)
.then(response => response.json())
.then(weatherData => {
  // Lấy các thẻ HTML bằng ID
  var cityNameElement = document.getElementById("city-name");
  var temperatureElement = document.getElementById("temperature");
  var feelsLikeElement = document.getElementById("feels-like");
  var humidityElement = document.getElementById("humidity");
  var windSpeedElement = document.getElementById("wind-speed");
  weatherStatusElement = document.getElementById("weather-status");

  var temperatureC = weatherData.main.temp - 273.15;
  var feelsLikeC = weatherData.main.feels_like - 273.15;
  var weatherStatus = weatherData.weather[0].main;

  // Gán giá trị từ dữ liệu thời tiết vào các thẻ HTML
  cityNameElement.innerText = weatherData.name;
  temperatureElement.innerText = "" + temperatureC.toFixed(2) + " °C";
  feelsLikeElement.innerText = "" + feelsLikeC.toFixed(2) + " °C";
  humidityElement.innerText = "" + weatherData.main.humidity + "%";
  windSpeedElement.innerText = "" + weatherData.wind.speed + " m/s";
  weatherStatusElement.innerText = "" + weatherStatus;
})
.catch(error => {
  console.log("Error fetching weather data:", error);
});

});







