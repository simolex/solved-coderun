# Буратино

[<kbd>dynamic-programming-1D</kbd>](https://youtu.be/H7lu6h8H9-4)
[<kbd>coderun</kbd>](https://coderun.yandex.ru/problem/buratino)
[<kbd>algorithm-training</kbd>](https://contest.yandex.ru/contest/45469/problems/24/)

Папа Карло сменил работу: теперь он работает в мастерской, и целый рабочий день занимается тем, что забивает гвоздики. Чтобы ему было не скучно, у него в мастерской стоит постоянно работающий телевизор. К сожалению, производительность папы Карло напрямую зависит от его настроения, а оно, в свою очередь, — от того, что в данный момент показывают по телевизору. Правда, пока папа Карло забивает гвоздик, он не обращает ни малейшего внимания на телевизор, и поэтому скорость его работы зависит только от того, что показывали по телевизору в тот момент, когда он только начал забивать этот гвоздик. Забив очередной гвоздик, он обязательно мельком смотрит в телевизор (его настроение, естественно, меняется), и после этого может либо сразу начать забивать следующий гвоздик, либо отдохнуть несколько секунд или даже минут за просмотром телевизора.

Папа Карло начинает работу ровно в 9 часов. С 13 часов у него начинается обеденный перерыв. При этом если он незадолго до обеда хочет начать вбивать гвоздик, но понимает, что до перерыва он не закончит эту работу, то он и не начинает ее. Аналогично в 14 часов он вновь приступает к работе, а в 18 уходит домой. Это значит, что в 9:00:00 (аналогично, как и в 14:00:00) он уже может начать забивать гвоздик. Если он хочет начать вбивать гвоздик в 12:59:59 или 17:59:59 и на это у него уйдет 1 секунда, то он успевает вбить гвоздик до обеда или до окончания работы соответственно, а если 2 секунды, — то уже нет.

Известна программа телевизионных передач и то, как они влияют на папу Карло. Требуется составить график работы и маленьких перерывчиков папы Карло так, чтобы за рабочий день он вбил максимально возможное количество гвоздей.

<details>
<summary>Форматы ввода/вывода и примеры</summary>

## Формат ввода

Во входном файле записано расписание телевизионных передач с 9:00:00 до 18:00:00 в следующем формате. В первой строке число $N$ — количество телевизионных передач в этот период $( 1 \leq N \leq 32400)$ . В каждой из последующих $N$ строк записано описание одной передачи: сначала время ее начала в формате **ЧЧ:ММ:СС** (**ЧЧ** — две цифры, задающие часы, **ММ** — две цифры, задающие минуты начала, **СС** — две цифры, задающие секунды начала). А затем через один или несколько пробелов число $T_i$
— время в секундах, которое папа Карло будет тратить на забивание одного гвоздика, если он перед этим увидит по телевизору эту передачу $( 1 \leq T_i \leq 32400)$.

Передачи записаны в хронологическом порядке. Первая передача всегда начинается в 09:00:00. Можно считать, что последняя передача заканчивается в 18:00:00.

## Формат вывода

В первую строку выходного файла требуется вывести максимальное количество гвоздиков, которое папа Карло успеет вбить за рабочий день.

### Пример 1

<table width = "100%">
<tr>
<th>Ввод</th> <th>Вывод</th>
</tr>
<tr valign="top">
<td><pre>
<code>2
09:00:00 3600
14:00:00 3600
</code></pre></td>
<td><pre>
<code>8
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
09:00:00 1800
12:59:31 10
13:45:23 1800
15:00:00 3600
</code></pre></td>
<td><pre>
<code>14
</code></pre></td>
</tr>
</table>

## Примечания

В первом примере каждый час папа Карло вбивает по одному гвоздику

Во втором примере первую половину дня он вбивает по гвоздику за полчаса, но в 12:30:00 он не начинает вбивать гвоздики, а ждет 12:59:31 и успевает до обеда вбить 2 гвоздика.

С 14 до 15 часов вбиваются 2 гвоздя, а затем по одному гвоздю в час.

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
