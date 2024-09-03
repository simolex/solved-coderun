const a = new Uint8Array(1);
for (let i = 0; i < 512; i++) {
    a[0] = i >> 4;
    console.log(a[0]);
}
