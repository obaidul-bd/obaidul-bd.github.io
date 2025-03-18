function updateCounter(){
    var apiUrl = "https://ucarecdn.com/c4bba5bb-6424-4b24-bdcd-60b870fdf1c9/executeapi.euwest2 ";
    fetch(apiUrl)
    .then(() => fetch("https://ucarecdn.com/c4bba5bb-6424-4b24-bdcd-60b870fdf1c9/executeapi.euwest2"))
    .then(response => response.json())
    .then(data =>{
        document.getElementById('hits').innerHTML = data
    console.log(data)});
    }