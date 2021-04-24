// Задание 6
// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

const task_06 = () => {

  const isEqual = (array: any[]): boolean => {
    let retval = true
    if (array.length > 0) {
      const value = array[0]
      array.forEach(el => {
        if (!(el === value)) retval = false
      })
    }
    // Для пустых массивов - также выводим true (в задаче не оговорено)
    return retval
  }

  const anArray_01 = ["equal", "equal", "equal", "equal", "equal", "equal"]
  const anArray_02 = ["777", "777", "777", "777", "777", "777"]
  const anArray_03 = ["not-equal", "not-equal", "not-equal", "not-equal", "not-equal", "not-equal", "777"]
  const anArray_04 = ["777", "777", "777", "777", "777", 777]
  const anArray_05: any[] = []


  console.log(`01: ${isEqual(anArray_01)}`)
  console.log(`02: ${isEqual(anArray_02)}`)
  console.log(`03: ${isEqual(anArray_03)}`)
  console.log(`04: ${isEqual(anArray_04)}`)
  console.log(`05: ${isEqual(anArray_05)}`)
}

task_06()
