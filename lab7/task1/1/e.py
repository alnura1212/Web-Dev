def min_of_four(a, b, c, d):
    return min(a, b, c, d)
a = int(input())
b = int(input())
c = int(input())
d = int(input())
print(min_of_four(a, b, c, d))


def power(a, n):
    result = 1.0
    for _ in range(n):
        result *= a
    return result
a = float(input())
n = int(input())
print(power(a, n))


def power(a, n):
    result = 1.0
    for _ in range(n):
        result *= a
    return result
a = float(input())
n = int(input())
print(power(a, n))
