# Площадь комнаты

[<kbd>dfs</kbd>](https://youtube.com/live/0YjdZlgf9Ig)
[<kbd>coderun</kbd>](https://coderun.yandex.ru/problem/room-area)
[<kbd>algorithm-training</kbd>](https://contest.yandex.ru/contest/45469/problems/31/)

Требуется вычислить площадь комнаты в квадратном лабиринте.

<details>
<summary>Форматы ввода/вывода и примеры</summary>

## Формат ввода

В первой строке вводится число N – размер лабиринта $(3 \leq N \leq 10)$. В следующих $N$ строках задан лабиринт (‘.’ – пустая клетка, ‘\*’ – стенка). И наконец, последняя строка содержит два числа – номер строки и столбца клетки, находящейся в комнате, площадь которой необходимо вычислить. Гарантируется, что эта клетка пустая и что лабиринт окружен стенками со всех сторон.

## Формат вывода

Требуется вывести единственное число – количество пустых клеток в данной комнате.

### Пример 1

<table width = "100%">
<tr>
<th>Ввод</th> <th>Вывод</th>
</tr>
<tr valign="top">
<td><pre>
<code>3
***
*.*
***
2 2
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
