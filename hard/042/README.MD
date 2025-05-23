# Кружки в Маховниках

[<kbd>topsort</kbd>](https://youtube.com/live/0YjdZlgf9Ig)
[<kbd>coderun</kbd>](https://coderun.yandex.ru/problem/mugs)
[<kbd>algorithm-training</kbd>](https://contest.yandex.ru/contest/45469/problems/35/)

Маленький Петя очень любит компьютеры и хочет научиться программировать.

В небольшом городке Маховники, где он живёт, работает сеть кружков по программированию самой разной тематики. Когда Петя пошёл записываться, он увидел большой список, состоящий из $N$ кружков. Петя хочет быть всесторонне развитой личностью, поэтому он собрался отучиться во всех этих кружках. Но когда он собрался записаться на все занятия сразу, обнаружилось, что не всё так просто. Во-первых, в один момент времени разрешается учиться только в одном из этих $N$ кружков. Во-вторых, некоторые преподаватели выдвигают входные требования к знаниям учеников, заключающиеся в знании курсов каких-то других кружков!

Петя хочет стать великим программистом, поэтому подобные мелочи его не останавливают. Действительно, ему достаточно всего-лишь составить правильный порядок посещения кружков, чтобы удовлетворить всем входным требованиям — это совсем простая задача, доступная даже совсем неопытному программисту.

Перед тем как сесть составлять порядок посещения кружков, Петя внимательно перечитал условия обучения и обнаружил ещё один важный пункт. Оказывается, для привлечения школьников, во всех кружках действует система поощрения учеников конфетами. Это означает, что по окончании очередного кружка ученику выдают несколько коробок конфет, всё больше и больше с каждым пройденным кружком. С другой стороны, в каждом кружке количество конфет в коробке своё, зависящее от сложности курса. Более конкретно — за прохождение i-го по счёту кружка, если этот кружок идёт в общем списке под номером $j$, ученику выдают аж $N^{i - 1} \times j$ конфет — такие щедрые люди программисты.

Петя решил совместить полезное с приятным — теперь он хочет выбрать такой порядок посещения кружков, чтобы при этом получить как можно больше конфет, однако эта задача ему уже не под силу. Помогите будущему великому человеку отыскать такой порядок.

<details>
<summary>Форматы ввода/вывода и примеры</summary>

## Формат ввода

В первой строке входного файла содержится целое число $N$ $(1 \leq N \leq 100\,000)$ — количество кружков в Маховниках.

В последующих $N$ строках идут описания входных требований кружков, в порядке их следования в общем списке. В $i$-ой строке сначала записано целое число $k_i$ $(0 \leq k_i \leq N - 1)$ — количество кружков, в которых нужно отучиться перед записью в $i$-й кружок, а потом k_i номеров этих кружков.

Сумма k_i не превосходит $200\,000$.

Гарантируется, что возможно посетить все эти кружки в некотором порядке, не нарушая условия посещения.

## Формат вывода

Выведите $N$ номеров, разделённых пробелами — порядок, в котором Пете надо посещать кружки, чтобы съесть как можно больше конфет.

## Примечания

Пояснение к примеру. Посещая кружки в указанном порядке, Петя получит
$\\6^0 \times 2 + 6^1 \times 1 + 6^2 \times 3 + 6^3 \times 5 + 6^4 \times 4 + 6^5 \times 6 =\\ 2 + 6 + 108 + 1080 + 5184 + 46656 = \\53036$ конфет.

### Пример 1

<table width = "100%">
<tr>
<th>Ввод</th> <th>Вывод</th>
</tr>
<tr valign="top">
<td><pre>
<code>6
1 2
0
1 2
3 1 2 5
1 2
4 1 3 4 5
</code></pre></td>

<td><pre>
<code>2 1 3 5 4 6
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
