// Задание 3
// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

const task_03 = () => {

  const invertString = (text: string): string => {
    const chars: string[] = []
    for (let i = text.length - 1; i >= 0; i--) {
      chars.push(text.charAt(i))
    }
    return chars.join("")
  }

  console.log(invertString("Hello"))
  console.log(invertString("Пример 2"))
}

task_03()
