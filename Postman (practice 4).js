// Отправить запрос (метод GET)
// http://162.55.220.72:5005/object_info_4

// Создать в окружении переменные name, age, salary
pm.environment.set("name", "Galina");
pm.environment.set("age", 29);
pm.environment.set("salary", 1000)

// Спарсить response body в json
let jsonData = pm.response.json()

// Спарсить request
let req = pm.request.url.query.toObject()

// Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200)
})

// Проверить, что name в ответе равно name из request (name забрать из request)
pm.test("Name", function () {
    pm.expect(jsonData.name).to.eql(req.name)
})

// Проверить, что age в ответе равно age из request (age забрать из request)
pm.test("Age", function () {
    pm.expect(String(jsonData.age)).to.eql(req.age)
})

// Вывести в консоль параметр salary из request
console.log("Salary from request:", req.salary)

// Вывести в консоль параметр salary из response
console.log("Salary from response:", jsonData.salary)

// Вывести в консоль 0-й элемент параметра salary из response
console.log("0th element of Salary from response:", jsonData.salary[0])

// Вывести в консоль 1-й элемент параметра salary из response
console.log("1th element of Salary from response:", jsonData.salary[1])

// Вывести в консоль 2-й элемент параметра salary из response
console.log("2th element of Salary from response:", jsonData.salary[2])

// Проверить, что 0-й элемент параметра salary равен salary из request (salary забрать из request)
pm.test("0th element of Salary is equal", function () {
    pm.expect(String(jsonData.salary[0])).to.eql(req.salary)
})

// Проверить, что 1-й элемент параметра salary равен salary*2 из request (salary забрать из request)
pm.test("1th element of Salary = Salary * 2", function () {
    pm.expect(jsonData.salary[1]).to.eql(String(req.salary*2))
})

// Проверить, что 2-й элемент параметра salary равен salary*3 из request (salary забрать из request)
pm.test("2th element of Salary = Salary * 3", function () {
    pm.expect(jsonData.salary[2]).to.eql(String(req.salary*3))
})

// Написать цикл, который выведет в консоль по порядку элементы списка из параметра salary
for (let i = 0; i < jsonData.salary.length; i++) {
    console.log("Salary elements:", jsonData.salary[i])
}