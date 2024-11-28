#include <iostream>
#include <vector>
#include <algorithm>
#include <cstdint> // Для UINT32_MAX
#include <cmath>

using namespace std;

unsigned int cur = 0;
unsigned int a, b;

unsigned int nextRand24()
{
    cur = cur * a + b; // вычисляется с переполнением
    return cur >> 8;   // возвращаем число от 0 до 2^24-1
}

unsigned int nextRand32()
{
    unsigned int x = nextRand24();
    unsigned int y = nextRand24();
    return (x << 8) ^ y; // возвращаем число от 0 до 2^32-1
}

int main()
{
    int n;
    cin >> n;
    cin >> a >> b;

    const int block_size = 1 << 16; // Размер одного блока 2^16

    // Шаг 1: Разбиваем числа на блоки и считаем количество чисел в каждом блоке
    vector<int> block_counts(1 << 16, 0); // Массив для подсчета чисел в каждом блоке

    unsigned int min_value = UINT32_MAX, max_value = 0;

    for (int i = 0; i < n; ++i)
    {
        unsigned int num = nextRand32();
        unsigned int block_num = num >> 16; // Старшие 16 бит
        block_counts[block_num]++;
        min_value = min(min_value, num);
        max_value = max(max_value, num);
    }

    // Шаг 2: Ищем блок, который содержит медиану
    int median_index = (n - 1) / 2;
    int current_count = 0;
    int block_with_median = 0;

    for (int i = 0; i < (1 << 16); ++i)
    {
        if (current_count + block_counts[i] > median_index)
        {
            block_with_median = i;
            break;
        }
        current_count += block_counts[i];
    }

    // Шаг 3: Собираем числа в выбранном блоке
    cur = 0; // Сбрасываем текущее состояние генератора
    vector<unsigned int> block_numbers;

    for (int i = 0; i < n; ++i)
    {
        unsigned int num = nextRand32();
        unsigned int block_num = num >> 16;
        if (block_num == block_with_median)
        {
            block_numbers.push_back(num);
        }
    }

    // Шаг 4: Сортируем числа в выбранном блоке
    sort(block_numbers.begin(), block_numbers.end());

    // Находим медиану в выбранном блоке
    unsigned int median = block_numbers[median_index - current_count];
    // cout << median << endl;


    // Шаг 5: Считаем минимальное суммарное расстояние
    unsigned long long total_distance = 0;
    cur = 0; // Сбрасываем генератор для финального прохода

    for (int i = 0; i < n; ++i)
    {
        unsigned int num = nextRand32();
        total_distance += abs((long long)num - (long long)median);
    }

    // Выводим результат
    cout << total_distance << endl;

    return 0;
}