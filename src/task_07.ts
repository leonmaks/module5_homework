// Задание 7

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

const task_07 = () => {

  const isNumeric = (num: any) => (
    (typeof (num) === 'number'
      || typeof (num) === "string" && num.trim() !== '')
    && !isNaN(+num))

  const isEven = (n: number) => n % 2 == 0

  const evenOddStats = (array: any[]): void => {

    let [evenCnt, oddCnt, zeroCnt, notNumCnt] = [0, 0, 0, 0]

    array.forEach(el => {
      if (isNumeric(el)) {
        const num = +el!
        if (!num) zeroCnt++
        else if (isEven(num)) evenCnt++
        else oddCnt++
      } else {
        notNumCnt++
      }
    })
    console.log(`Четных - ${evenCnt}, нечетных - ${oddCnt}, нулевых - ${zeroCnt}, нечисловых - ${notNumCnt}`)
  }

  evenOddStats([2, 4, 6, 8])
  evenOddStats([1, 3, 5, 7])
  evenOddStats([null, "", "not numeric"])
  evenOddStats([])
  evenOddStats([1, "", 2, "2", 10, 11, 0, -32, 48, 54, null, "string", .342, true])
}

task_07()
