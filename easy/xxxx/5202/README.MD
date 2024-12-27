# Юля, Никита и задачи

[<kbd>coderun</kbd>](https://coderun.yandex.ru/problem/season-tasks)

Подготовка задач к сезону это долгий и кропотливый процесс. Юля знает, что уже готово $A$ задач. Никита выяснил, что ещё
$B$ задач почти готовы и в ближайшее время будут добавлены в сезон. Помогите Юле и Никите узнать, сколько всего задач планируется в сезоне.

<details>
<summary>Форматы ввода/вывода и примеры</summary>

## Формат ввода

Первая строка содержит два числа $A$ и $B$ $(0 \leq A,B \leq 2 \times 10^18 )$, разделённые пробелом.

## Формат вывода

Выведите одно число - $A+B$ − суммарное количество задач в сезоне.

### Пример 1

<table width = "100%">
<tr>
<th>Ввод</th> <th>Вывод</th>
</tr>
<tr valign="top">
<td><pre>
<code>1 1
</code></pre></td>

<td><pre>
<code>1
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
<code>4 1
</code></pre></td>

<td><pre>
<code>5
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
<code>1 3
</code></pre></td>

<td><pre>
<code>4
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
