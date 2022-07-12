// Отправить запрос (метод POST)
// http://162.55.220.72:5005/user_info_3

// Спарсить response body в json
let jsonData = pm.response.json()

// Спарсить request
let req = request.data

// Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200)
})

// Проверить, что name в ответе равно name из request (name вбить руками)
pm.test("Name", function () {
    pm.expect(jsonData.name).to.eql("Galina")
})

// Проверить, что age в ответе равно age из request (age вбить руками)
pm.test("Age", function () {
    pm.expect(jsonData.age).to.eql("29")
})

// Проверить, что salary в ответе равно salary из request (salary вбить руками)
pm.test("Salary", function() {
    pm.expect(jsonData.salary).to.eql(1000)
})

// Проверить, что name в ответе равно name из request (name забрать из request)
pm.test("requestName", function () {
    pm.expect(req.name).to.eql("Galina")
})

// Проверить, что age в ответе равно age из request (age забрать из request)
pm.test("requestAge", function () {
    pm.expect(req.age).to.eql("29")
})

// Проверить, что salary в ответе равно salary из request (salary забрать из request)
pm.test("requestSalary", function () {
    pm.expect(req.salary).to.eql("1000")
})

// Вывести в консоль параметр family из response
console.log("Family:", jsonData.family)

// Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)
pm.test("Salary_1_5", function () {
    pm.expect(req.salary * 4).to.eql(jsonData.family.u_salary_1_5_year)
})