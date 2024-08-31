# Покрытие K отрезками

[<kbd>binary search</kbd>](https://coderun.yandex.ru/catalog?tag=binary%20search)
[<kbd>coderun</kbd>](https://coderun.yandex.ru/selections/eserajim/problems/k-segments)

Даны $n$ точек на прямой, нужно покрыть их $k$ отрезками одинаковой длины $l$.Найдите минимальное $l$.

<details>
<summary>Форматы ввода/вывода и примеры</summary>

## Формат ввода

На первой строке $n$ $(1 \leq n \leq 10^5)$ и $k$ $(1 \leq k \leq n)$. На второй $n$ чисел $x_i$​ $(∣x_i​∣ \leq 10^9)$.

## Формат вывода

Минимальное такое $l$, что точки можно покрыть $k$ отрезками длины $l$.

### Пример 1

<table width = "100%">
<tr>
<th>Ввод</th> <th>Вывод</th>
</tr>
<tr valign="top">
<td><pre>
<code>6 2
1 2 3 9 8 7
</code></pre></td>

<td><pre>
<code>2
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
