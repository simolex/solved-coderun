# Топологическая сортировка

[<kbd>dfs</kbd>](https://youtube.com/live/0YjdZlgf9Ig)
[<kbd>coderun</kbd>](https://coderun.yandex.ru/problem/cycle-search)
[<kbd>algorithm-training</kbd>](https://contest.yandex.ru/contest/45468/problems/35/)

Дан неориентированный граф. Требуется определить, есть ли в нем цикл, и, если есть, вывести его.

<details>
<summary>Форматы ввода/вывода и примеры</summary>

## Формат ввода

В первой строке дано одно число n — количество вершин в графе $( 1 \leq n \leq 500 )$. Далее в $n$ строках задан сам граф матрицей смежности.

## Формат вывода

Если в иcходном графе нет цикла, то выведите $"NO"$. Иначе, в первой строке выведите $"YES"$, во второй строке выведите число $k$ — количество вершин в цикле, а в третьей строке выведите $k$ различных чисел — номера вершин, которые принадлежат циклу в порядке обхода (обход можно начинать с любой вершины цикла). Если циклов несколько, то выведите любой.

### Пример 1

<table width = "100%">
<tr>
<th>Ввод</th> <th>Вывод</th>
</tr>
<tr valign="top">
<td><pre>
<code>3
0 1 1
1 0 1
1 1 0
</code></pre></td>

<td><pre>
<code>YES
3
3 2 1
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
<code>4
0 0 1 0
0 0 0 1
1 0 0 0
0 1 0 0
</code></pre></td>

<td><pre>
<code>NO 
</code></pre></td>
</tr>
</table>

### Пример 3

<table width = "100%">
<tr>
<th>Ввод</th> <th>Вывод</th>
</tr>
<tr valign="top">
<td><pre>
<code>5
0 1 0 0 0
1 0 0 0 0
0 0 0 1 1
0 0 1 0 1
0 0 1 1 0
</code></pre></td>

<td><pre>
<code>YES
3
5 4 3 
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
