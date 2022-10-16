//База пользователей

//1


const users = {}

for(let i = 1; i <=2; i++){
    let name = prompt ('Введите свое имя')
    let age = +prompt('Введите свой возраст')

    users[i] = {
            name: name ,
            age: age
        }
    }


for (const key in users ) {
    console.log(`Пользователь ${key}` );
    for(const newKey in users[key]) {
        console.log(newKey == 'name' ? `Имя: ${users[key][newKey]} ` : `Возраст:  ${users[key][newKey]}`);
    }

}

console.log(users);


//Корзина товаров

//2

const cart = receipt()
let delivery = 9000
let order = ' Вы заказали '


for (const key in cart){
   order = order + ` ${key}`

    for (const newKey in cart[key]) {
    order = newKey == ' info' ? order + `${cart[key][newKey]}` : order

    delivery = newKey == ' price' ? delivery + cart[key][newKey] : delivery
}
}

console.log(`${order} | Стоимость доставки:  ${delivery}`);
