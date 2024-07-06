function Pattern1(n) {
  for (i = 0; i < n; i++) {
    let row = "";
    for (j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}

function Pattern2(n) {
  for (i = 0; i < n; i++) {
    let row = "";
    for (j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

function Pattern3(n) {
  for (i = 0; i < n; i++) {
    let row = "";
    for (j = 0; j <= i; j++) {
      row += 1 + j;
    }
    console.log(row);
  }
}

function Pattern4(n) {
  for (i = 0; i < n; i++) {
    let row = "";
    for (j = 0; j <= i; j++) {
      row += i + 1;
    }
    console.log(row);
  }
}

function Pattern5(n) {
  for (i = 0; i < n; i++) {
    let row = "";
    for (j = n; j > i; j--) {
      row += "*";
    }
    console.log(row);
  }
}

function Pattern6(n) {
  for (i = 0; i < n; i++) {
    let row = "";
    for (j = 0; j < n - i; j++) {
      row += j + 1;
    }
    console.log(row);
  }
}

function Pattern7(n) {
  for (i = 0; i < n; i++) {
    let row = "";
    //space
    for (j = 0; j <= n - i - 1; j++) {
      row += " ";
    }
    //star
    for (j = 0; j < 2 * i + 1; j++) {
      row += "*";
    }

    for (j = 0; j <= n - i - 1; j++) {
      row += "";
    }
    console.log(row);
  }
}

function Pattern8(n) {
  for (i = 0; i < n; i++) {
    let row = "";
    //space
    for (j = 0; j < i; j++) {
      row += " ";
    }
    //star
    for (j = 0; j < 2 * n - (2 * i + 1); j++) {
      row += "*";
    }

    for (j = 0; j < i; j++) {
      row += "";
    }
    console.log(row);
  }
}

function Pattern9(n) {
  Pattern7(n);
  Pattern8(n);
}

function Pattern10(n) {
  for (i = 0; i < 2 * n - 1; i++) {
    let rows = "";
    let stars = i;
    if (i > n) stars = 2 * n - i;
    for (j = 0; j < stars; j++) {
      rows += "*";
    }
    console.log(rows);
  }
}

function Pattern11(n) {
  let start = 1;
  for (i = 0; i < n; i++) {
    let rows = "";
    if (i % 2 == 0) start = 1;
    else start = 0;
    for (j = 0; j <= i; j++) {
      rows += start;
      start = 1 - start;
    }
    console.log(rows);
  }
}

Pattern11(5);
