let url = 'https://fakestoreapi.com/carts'

let resp = await fetch(url)

let data = await resp.json()

let linhas = document.querySelectorAll('tr')
console.log(linhas[0].children)

for (let i = 0; i < 7; i++) {
    let filhos = linhas[i+1].children
    filhos[0].innerHTML = data[i].id
    filhos[1].innerHTML = data[i].userId
    filhos[2].innerHTML = data[i].date
    filhos[3].innerHTML = data[i].products[0].productId
    filhos[4].innerHTML = data[i].products[0].quantity
    console.log(data[i])
}