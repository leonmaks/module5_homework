// Задание 5
// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

const task_05 = () => {

  const showArray = (array: any[]): void => {
    console.log("Элементов в массиве:", array.length)
    array.forEach((v, i) => console.log(`Элемент ${i}: ${v}`))
  }

  showArray(["Many", "any", "array", "items", 1, 2, 5, 99, true, false, "-stop!"])
}

task_05()
