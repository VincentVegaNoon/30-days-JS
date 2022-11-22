//1 Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName', 'Kevin')
localStorage.setItem('lastName', 'Kowalski')
localStorage.setItem('age', '11')
localStorage.setItem('country', 'Germany')
localStorage.setItem('city', 'Berlin')

//2 Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student = {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 33,
    skills: ['HTML', 'CSS', 'JS', 'React'],
    country: 'USA',
}
const studentText = JSON.stringify(student, undefined, 4)
localStorage.setItem('student', studentText)
