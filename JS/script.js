let url = 'https://fakestoreapi.com/users'

let resp = await fetch(url)

let data = await resp.json()

let linhas = document.querySelectorAll('tr')
console.log(linhas[0].children)

for (let i = 0; i < 10; i++) {
    let filhos = linhas[i+1].children
    filhos[0].innerHTML = data[i].id
    filhos[1].innerHTML = data[i].username
    filhos[2].innerHTML = data[i].email
    filhos[3].innerHTML = data[i].password
    console.log(data[i])
}