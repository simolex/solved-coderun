# Уравнение с корнем

[<kbd>coderun</kbd>](https://coderun.yandex.ru/problem/equation-root)
[<kbd>algorithm-training</kbd>](https://contest.yandex.ru/contest/27393/problems/D/)

Решите в целых числах уравнение:

$\sqrt{ax+b}=c$,

$a$, $b$, $c$ – данные целые числа: найдите все решения или сообщите, что решений в целых числах нет.

<details>
<summary>Форматы ввода/вывода и примеры</summary>

## Формат ввода

Вводятся три числа $a$, $b$ и $c$ по одному в строке.

## Формат вывода

Программа должна вывести все решения уравнения в порядке возрастания, либо **NO SOLUTION** (заглавными буквами), если решений нет. Если решений бесконечно много, вывести **MANY SOLUTIONS**.

### Пример 1

<table width = "100%">
<tr>
<th>Ввод</th> <th>Вывод</th>
</tr>
<tr valign="top">
<td><pre>
<code>1
0
0
</code></pre></td>

<td><pre>
<code>0
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
<code>1
2
3
</code></pre></td>

<td><pre>
<code>7
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
<code>1
2
-3
</code></pre></td>

<td><pre>
<code>NO SOLUTION
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
