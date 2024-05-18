# Топологическая сортировка

[<kbd>dfs</kbd>](https://youtube.com/live/0YjdZlgf9Ig)
[<kbd>coderun</kbd>](https://coderun.yandex.ru/problem/topological-sorting)
[<kbd>algorithm-training</kbd>](https://contest.yandex.ru/contest/45468/problems/34/)

Дан ориентированный граф. Необходимо построить топологическую сортировку.

<details>
<summary>Форматы ввода/вывода и примеры</summary>

## Формат ввода

В первой строке входного файла два натуральных числа $N$ и $M$ $(1 \leq N, M \leq 100 000)$ — количество вершин и рёбер в графе соответственно. Далее в M строках перечислены рёбра графа. Каждое ребро задаётся парой чисел — номерами начальной и конечной вершин соответственно.

## Формат вывода

Выведите любую топологическую сортировку графа в виде последовательности номеров вершин (перестановка чисел от $1$ до $N$). Если топологическую сортировку графа построить невозможно, выведите $-1$.

### Пример 1

<table width = "100%">
<tr>
<th>Ввод</th> <th>Вывод</th>
</tr>
<tr valign="top">
<td><pre>
<code>6 6
1 2
3 2
4 2
2 5
6 5
4 6
</code></pre></td>

<td><pre>
<code>4 6 3 1 2 5 
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
