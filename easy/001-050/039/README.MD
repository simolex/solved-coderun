# Топологическая сортировка

[<kbd>dfs</kbd>](https://youtube.com/live/0YjdZlgf9Ig)
[<kbd>coderun</kbd>](https://coderun.yandex.ru/problem/first-vertex)
[<kbd>algorithm-training</kbd>](https://contest.yandex.ru/contest/45469/problems/32/)

Дан ориентированный граф, возможно, с петлями и кратными ребрами.

Необходимо найти все вершины, из которых достижима первая вершина.

<details>
<summary>Форматы ввода/вывода и примеры</summary>

## Формат ввода

В первой строке записаны два целых числа $N$ $(1 \leq N \leq 10^3)$ и $M$ $(0 \leq M \leq 5 * 10^5)$ — количество вершин и ребер в графе.

В последующих $M$ строках перечислены ребра — пары чисел, определяющие номера вершин, которые соединяют ребра (в порядке «откуда» и «куда» ведет ребро).

## Формат вывода

Выведите все вершины, из которых достижима первая, в порядке возрастания их номеров.

### Пример 1

<table width = "100%">
<tr>
<th>Ввод</th> <th>Вывод</th>
</tr>
<tr valign="top">
<td><pre>
<code>4 5
2 2
4 3
2 3
3 1
2 4
</code></pre></td>

<td><pre>
<code>1 2 3 4 
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
