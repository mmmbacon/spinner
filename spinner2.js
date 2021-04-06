const symbols = [`|   `,`/   `,`-   `,`\\   `,`|   `,`/   `,`-   `,`\\   `];

for (let index = 0; index < symbols.length; index++) {
  setTimeout(()=>{
    process.stdout.write(`\r${symbols[index]}`);
  }, index * 200);
}