var unit = {
    GCD: function (a, b) {
        try {
            function isInteger(num) {
                if (num > 1000000000) return num;
                return (num ^ 0) === num
            };
            a = Math.abs(a);
            b = Math.abs(b);
            if (isInteger(a) && isInteger(b)) {
                var r;          //остаток от деления a на b
                var q;          //частное от целочисленного деления a на b ; a = b*q + r
                var m1 = 1;     //a = m1 * a + n1 * b
                var n1 = 0;
                var m2 = 0;     //b = m2 * a + n2 * b
                var n2 = 1;
                var t;
                while (b != 0) {
                    r = a % b;
                    q = (a - r) / b;
                    a = b;
                    b = r;
                    t = m1 - q * m2;
                    m1 = m2;
                    m2 = t;
                    t = n1 - q * n2;
                    n1 = n2;
                    n2 = t;
                }
                var str = a;
                if ((a == 0) && (b == 0)) return NaN;
                if (a < 0)  a = '(' + a + ')';
                if (b < 0)  b = '(' + b + ')';
                if (m1 < 0)  m1 = '(' + m1 + ')';
                if (n1 < 0)  n1 = '(' + n1 + ')';
                return a;
            } else return undefined;
        }catch(e) { console.log("!something wrong!") }
        },
    factor: function (n) {
        try {
            if (isNaN(n) || !isFinite(n) || n % 1 || n == 0) return n.toString();
            if (n < 0) return '-' + factor(-n);
            var minFactor = leastFactor(n);
            if (n == minFactor) return n.toString();
            return minFactor + '*' + unit.factor(n / minFactor);

//// find the least factor in n by trial division
            function leastFactor(n) {
                var arr = [];
                if (isNaN(n) || !isFinite(n)) return NaN;
                if (n == 0) return 0;
                if (n % 1 || n * n < 2) return 1;
                if (n % 2 == 0) return 2;
                if (n % 3 == 0) return 3;
                if (n % 5 == 0) return 5;
                var m = Math.sqrt(n);
                for (var i = 7; i <= m; i += 30) {
                    if (n % i == 0)      return i;
                    if (n % (i + 4) == 0)  return i + 4;
                    if (n % (i + 6) == 0)  return i + 6;
                    if (n % (i + 10) == 0) return i + 10;
                    if (n % (i + 12) == 0) return i + 12;
                    if (n % (i + 16) == 0) return i + 16;
                    if (n % (i + 22) == 0) return i + 22;
                    if (n % (i + 24) == 0) return i + 24;
                }
                return n;
            }
        } catch (e) {
            console.log("!something wrong!")
        }
    }
};

console.log(unit.GCD(3.5, 5));
console.log(unit.factor(3));

//разрешение на вызов файла в nodeJs
try {
    module.exports = unit;
} catch (e) {
    console.log("!something wrong with 'module.exports'")
}
