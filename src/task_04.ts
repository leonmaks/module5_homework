// Задание 4
// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.

const task_04 = () => {

  const randInt = (max: number): number => (
    Math.floor(Math.random() * max)
  )

  console.log(randInt(100))
  console.log(randInt(100))
  console.log(randInt(100))
  console.log(randInt(100))
  console.log(randInt(100))
  console.log(randInt(100))
  console.log(randInt(100))
  console.log(randInt(100))
  console.log(randInt(100))
  console.log(randInt(100))
}

task_04()
