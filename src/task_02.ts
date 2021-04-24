// Задание 2
// Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».
// Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

const task_02 = () => {

  const sayType = (val: any): void => {
    if (typeof val === "number") {
      console.log(`${val}-число`)
    } else if (typeof val === "string") {
      console.log(`${val}-строка`)
    } else if (typeof val === "boolean") {
      console.log(`${val}-логический тип`)
    } else {
      console.log(`Тип x не определен`)
    }
  }

  sayType("1")
  sayType("one")
  sayType(true)
  sayType("true")
  sayType(33)
  sayType("")
  sayType([])
  sayType({})
  sayType(0)
}

task_02()
