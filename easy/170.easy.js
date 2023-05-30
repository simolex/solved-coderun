/**
 * @param {number[]} nums1 - первый отсортированный массив
 * @param {number} m - количество значимых элементов в nums1
 * @param {number[]} nums2 - второй отсортированный массив
 * @param {number} n - количество элементов в nums2
 * @return {void} Не возвращайте ничего, вместо этого модифицируйте nums1.
 */

module.exports = function merge(nums1, m, nums2, n) {
    const getDirection = (array) => {
        const first = array[0];
        const end = array[array.length - 1];
        return end - first;
    };

    const dirAsc = (a, b) => b - a >= 0;
    const dirDesc = (a, b) => a - b >= 0;

    const getCompareFn = (dir) => (dir > 0 ? dirAsc : dirDesc);

    if (n === 0) return;
    if (m === 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
        return;
    }
    let direction1 = getDirection(nums1);
    let direction2 = getDirection(nums2);

    const directionFull = direction1 + direction2;

    if (directionFull === 0 && direction1 === 0) {
        for (let i = 0; i < n; i++) {
            nums1[m + i] = nums2[i];
        }
        return;
    }

    direction1 = direction1 === 0 ? 1 : direction1;
    direction2 = direction2 === 0 ? 1 : direction2;

    const compFn1 = getCompareFn(direction1);
    const compFn2 = getCompareFn(direction2);

    let pNums1 = m - 1;
    let pNums2 = compFn1 === compFn2 ? n - 1 : 0;

    const compFn = getCompareFn(direction1);

    for (let i = m + n - 1; i >= 0; i--) {
        if (compFn(nums1[pNums1], nums2[pNums2]) || pNums1 < 0) {
            nums1[i] = nums2[pNums2];
            if (compFn1 === compFn2) pNums2--;
            else pNums2++;
        } else {
            nums1[i] = nums1[pNums1];
            pNums1--;
        }
    }
};
