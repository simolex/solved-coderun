# Компоненты связности

[<kbd>dfs</kbd>](https://youtube.com/live/0YjdZlgf9Ig)
[<kbd>coderun</kbd>](https://coderun.yandex.ru/problem/connectivity-components)
[<kbd>algorithm-training</kbd>](https://contest.yandex.ru/contest/45468/problems/32/)

Дан неориентированный невзвешенный граф, состоящий из $N$ вершин и $M$ ребер. Необходимо посчитать количество его компонент связности и вывести их.

<details>
<summary>Форматы ввода/вывода и примеры</summary>

## Формат ввода

Во входном файле записано два числа $N$ и $M$ $(0 < N \leq 100000, 0 \leq M \leq 100000)$. В следующих $M$ строках записаны по два числа $i$ и $j$ $(1 \leq i, j \leq N)$, которые означают, что вершины $i$ и $j$ соединены ребром.

## Формат вывода

В первой строчке выходного файла выведите количество компонент связности. Далее выведите сами компоненты связности в следующем формате: в первой строке количество вершин в компоненте, во второй - сами вершины в произвольном порядке.

### Пример 1

<table width = "100%">
<tr>
<th>Ввод</th> <th>Вывод</th>
</tr>
<tr valign="top">
<td><pre>
<code>6 4
3 1
1 2
5 4
2 3
</code></pre></td>

<td><pre>
<code>3
3
1 2 3 
2
4 5 
1
6 
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
<code>6 4
4 2
1 4
6 4
3 6
</code></pre></td>

<td><pre>
<code>2
5
1 2 3 4 6 
1
5 
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
