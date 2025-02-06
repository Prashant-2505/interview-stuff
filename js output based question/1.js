for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i,"used let");
  });
}

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i,"used var");

  });
}
