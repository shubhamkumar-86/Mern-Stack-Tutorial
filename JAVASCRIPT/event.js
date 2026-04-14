// Not preferred this method

// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Your Name is Shubham Tiwari";
// }

// 2nd method. 

// const element = document.getElementById("first");
// element.onclick = function handleClick(){
//     element.textContent = "Your name is Shubham Tiwari"
// }

// is method ko bhi hum prefer nhi karte, kyuki kayi bar hum ek hi element par multiple event lgana chahte HTMLDetailsElement, to isme hota kya hai hai ki jo bhi event last me apply karte hai wo event pahle se apply hue event ko overwrite kar deta hai. 

// 3rd method 

