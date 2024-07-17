const joke = document.getElementById('joke');
const btn = document.getElementById('btn');
const spinner = document.getElementById('spinner');



btn.addEventListener('click',getJokes);

async function getJokes(){
     const config = {
         headers:{
             accept:'application/json'
         }
     }
     spinner.style.display = 'block';
    const res = await fetch('https://icanhazdadjoke.com/',config)
    const data = await res.json();
    spinner.style.display = 'none';
    joke.innerText = data.joke;
}
// function getJokes(){
//     const config = {
//         headers:{
//             accept:'application/json'
//         }
//     };
//    fetch('https://icanhazdadjoke.com/',config)
//    .then(res => res.json())
//    .then(data => {
//        const info = data.joke;
//        joke.innerText = info;
//    });
  
// }
