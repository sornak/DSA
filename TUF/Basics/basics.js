function countdigits(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  //count = Math.floor(Math.log10(n)) + 1;
  console.log(count);
}

//Time Complexity : O(log10(N)) when there is division then time compleity will be the 0(log5N) when it's divisble by 5

//countdigits(7789);

function reversenumberwithoutzero(n) {
  let reverseno = 0;
  while (n > 0) {
    let lastdiigt = n % 10;
    n = Math.floor(n / 10);
    reverseno = reverseno * 10 + lastdiigt;
  }
  console.log(reverseno);
}

function palindromenumber(n) {
  let orginal = n;
  let reverseno = 0;
  while (n > 0) {
    let lastdiigt = n % 10;
    reverseno = reverseno * 10 + lastdiigt;
    n = Math.floor(n / 10);
  }
  if (orginal == reverseno) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

function armstrongnumber(n) {
  let sum = 0;
  let org = n;
  while (n > 0) {
    let lastdiigt = n % 10;
    sum += lastdiigt * lastdiigt * lastdiigt;
    n = Math.floor(n / 10);
  }
  if (sum === org) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

function printalldivisors(n) {
  //   for (i = 1; i <= n; i++) {
  //     if (n % i == 0) {
  //       console.log(i);
  //     }
  //   }
  let small_divisors = "";
  let large_divisors = "";
  for (i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      small_divisors += i + " ";
      if (n / i != i) {
        large_divisors = n / i + " " + large_divisors;
      }
    }
  }
  console.log(small_divisors + large_divisors);
}

function PrimeNumbers(n) {
  let cnt = 0;
  //   for (i = 1; i <= n; i++) {
  //     if (n % i == 0) {
  //       cnt++;
  //     }
  //   }
  //   if (cnt == 2) {
  //     console.log("prime");
  //   } else {
  //     console.log("not prime");
  // }
  for (i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      cnt++;
      if (n / i != i) {
        cnt++;
      }
    }
  }
  if (cnt == 2) {
    console.log("prime");
  } else {
    console.log("not prime");
  }
}

function GCD(n1, n2) {
  let gcd = 0;
  //   for (i = 1; i <= Math.min(n1, n2); i++) {
  //     if (n1 % i == 0 && n2 % i == 0) {
  //       gcd = i;
  //     }
  //   }
  //   for (i = Math.min(n1, n2); i >= 1; i--) {
  //     if (n1 % i == 0 && n2 % i == 0) {
  //       gcd = i;
  //     }
  //   }
  //   console.log(gcd);
  while (a > 0 && b > 0) {
    if (a > b) a = a % b;
    else b = b % a;
  }
  if (a == 0) {
    console.log(b);
  } else {
    console.log(a);
  }
}

/*

Euclidineas Algorightm
GCd(a,b)=gcd(a%b,b) if a>b
 */
GCD(20, 40);
