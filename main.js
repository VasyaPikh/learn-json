async function getResponse () {
     let response = await fetch ('users.json');
     let content = await response.json();

     let list = document.querySelector('.posts')

     let key;

     for (key in content) {

        list.innerHTML += `
        <li class="post">
           <h4> ${content[key].tittle}</h4>
           <img src="${content[key].url}" width="300">
           </li>
        `
     }
}

getResponse()