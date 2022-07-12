// Отправить запрос (метод GET)
// http://162.55.220.72:5005/object_info_3

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
    pm.expect(jsonData.age).to.eql(req.age)
})

// Проверить, что salary в ответе равно salary из request (salary забрать из request)
pm.test("Salary", function () {
    pm.expect(String(jsonData.salary)).to.eql(req.salary)
})

// Вывести в консоль параметр family из response
console.log("Family:", jsonData.family)

// Проверить, что у параметра dog есть параметры name
pm.test("Dog contains name", function () {
    pm.expect(JSON.stringify(jsonData.family.pets.dog)).to.include("name")
})

// Проверить, что у параметра dog есть параметры age
pm.test("Dog contains age", function () {
    pm.expect(JSON.stringify(jsonData.family.pets.dog)).to.include("age")
})

// Проверить, что параметр name имеет значение Luky
pm.test("Name contains Luky", function () {
    pm.expect(jsonData.family.pets.dog.name).to.include("Luky")
})

// Проверить, что параметр age имеет значение 4
pm.test("Age contains 4", function () {
    pm.expect(jsonData.family.pets.dog.age).to.eql(4)
})