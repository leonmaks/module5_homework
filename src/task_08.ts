// Задание 8
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.

const task_08 = () => {

  const aMap = new Map()
  aMap.set(1, "is a number")
  aMap.set("2", "is a number as string")
  aMap.set(true, "is a boolean")
  aMap.set("four", "is a string")
  aMap.set({ five: 5 }, "is an object")

  for (let [key, value] of aMap) {
    console.log(`Ключ - ${key}, значение - ${value}`)
  }
}

task_08()
