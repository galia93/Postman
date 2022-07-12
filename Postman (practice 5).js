// Отправить запрос (метод POST)
// http://162.55.220.72:5005/user_info_2

// Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200)
})

// Спарсить response body в json
let jsonData = pm.response.json()

// Спарсить request
let req = request.data

// Проверить, что json response имеет параметр start_qa_salary
pm.test("Response has start_qa_salary", function () {
    pm.expect(JSON.stringify(jsonData)).to.include("start_qa_salary")
})

// Проверить, что json response имеет параметр qa_salary_after_6_months
pm.test("Response has qa_salary_after_6_months", function () {
    pm.expect(JSON.stringify(jsonData)).to.include("qa_salary_after_6_months")
})

// Проверить, что json response имеет параметр qa_salary_after_12_months
pm.test("Response has qa_salary_after_12_months", function () {
    pm.expect(JSON.stringify(jsonData)).to.include("qa_salary_after_12_months")
})

// Проверить, что json response имеет параметр qa_salary_after_1.5_year
pm.test("Response has qa_salary_after_1.5_year", function () {
    pm.expect(JSON.stringify(jsonData)).to.include("qa_salary_after_1.5_year")
})

// Проверить, что json response имеет параметр qa_salary_after_3.5_years
pm.test("Response has qa_salary_after_3.5_years", function () {
    pm.expect(JSON.stringify(jsonData)).to.include("qa_salary_after_3.5_years")
})

// Проверить, что json response имеет параметр person
pm.test("Response has person", function () {
    pm.expect(JSON.stringify(jsonData)).to.include("person")
})

// Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request)
pm.test("start_qa_salary is equal to salary", function () {
    pm.expect(String(jsonData.start_qa_salary)).to.eql(req.salary)
})

// Проверить, что параметр qa_salary_after_6_months равен salary*2 из request (salary забрать из request)
pm.test("qa_salary_after_6_months is equal to salary*2", function () {
    pm.expect(String(jsonData.qa_salary_after_6_months)).to.eql(String(req.salary*2))
})

// Проверить, что параметр qa_salary_after_12_months равен salary*2.7 из request (salary забрать из request)
pm.test("qa_salary_after_12_months is equal to salary*2.7", function () {
    pm.expect(String(jsonData.qa_salary_after_12_months)).to.eql(String(req.salary*2.7))
})

// Проверить, что параметр qa_salary_after_1.5_year равен salary*3.3 из request (salary забрать из request)
pm.test("qa_salary_after_1.5_year is equal to salary*3.3", function () {
    pm.expect(jsonData['qa_salary_after_1.5_year']).to.eql(req.salary*3.3)
})

// Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request (salary забрать из request)
pm.test("qa_salary_after_3.5_years is equal to salary*3.8", function () {
    pm.expect(jsonData['qa_salary_after_3.5_years']).to.eql(req.salary*3.8)
})

// Проверить, что 1-й элемент из u_name в параметре person,  равен salary из request (salary забрать из request)
pm.test("1th element of u_name is equal to salary", function () {
    pm.expect(String(jsonData.person.u_name[1])).to.eql(req.salary)
})

// Проверить, что параметр u_age равен age из request (age забрать из request)
pm.test("u_age is equal to age", function () {
    pm.expect(String(jsonData.person.u_age)).to.eql(req.age)
})

// Проверить, что параметр u_salary_5_years равен salary*4.2 из request (salary забрать из request)
pm.test("u_salary_5_years is equal to salary*4.2", function () {
    pm.expect(String(jsonData.person.u_salary_5_years)).to.eql(String(req.salary*4.2))
})

// Написать цикл который выведет в консоль по порядку элементы списка из параметра person
for (let i = 0; i < 3; i++) {
    if (i==0) {
    console.log(jsonData.person.u_age)
    } else if (i==1) {
    console.log(jsonData.person.u_name)
    } else
    (console.log(jsonData.person.u_salary_5_years))
    }