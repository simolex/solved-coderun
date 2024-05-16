# Ход конём - 2

[<kbd>dynamic programming 2D</kbd>](https://youtube.com/live/U8gzm92fprI)
[<kbd>coderun</kbd>](https://coderun.yandex.ru/problem/knights-move-2)
[<kbd>algorithm-training</kbd>](https://contest.yandex.ru/contest/45469/problems/26/)

Дана прямоугольная доска $N × M$ ( $N$ строк и $M$ столбцов ). В левом верхнем углу находится шахматный конь, которого необходимо переместить в правый нижний угол доски.

При этом конь может ходить следующим образом:

![Конь ходит влево вниз по 4-м направлениям](./statement-image.jpg)

Необходимо определить, сколько существует различных маршрутов, ведущих из левого верхнего в правый нижний угол.

<details>
<summary>Форматы ввода/вывода и примеры</summary>

## Формат ввода

Входной файл содержит два натуральных числа $N$ и $M$ $( 1 \leq N, M \leq 50)$.

## Формат вывода

В выходной файл выведите единственное число — количество способов добраться конём до правого нижнего угла доски.

### Пример 1

<table width = "100%">
<tr>
<th>Ввод</th> <th>Вывод</th>
</tr>
<tr valign="top">
<td><pre>
<code>4 4
</code></pre></td>
<td><pre>
<code>2
</code></pre></td>
</tr>
</table>

### Пример 2

<table width = "100%">
<tr>
<th>Ввод</th> <th>Вывод</th>
</tr>
<tr valign="top">
<td><pre>
<code>2 3
</code></pre></td>
<td><pre>
<code>1
</code></pre></td>
</tr>
</table>

</details>

<details>
<summary>Решение <kbd>javascript</kbd></summary>

### 1. Установка зависимостей

```bash
npm install             # Установка зависимостей
```

### 2. Запуск тестирования решения в среде Jest[^1]

```bash
npm run test            # Unit-тестирование
```

</details>

#### Ссылки на документацию

[^1]: [Jest](https://jestjs.io/docs/getting-started)
