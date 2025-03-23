a=int(input())
b=int(input())
for i in range(a,b+1):
    if (i%2==0):
        print (i, end=' ')


a = int(input())
b = int(input())
c = int(input())
d = int(input())
for num in range(a, b + 1):
    if num % d == c:
        print(num, end=' ')


import math
a = int(input())
b = int(input())
for num in range(a, b + 1):
    if math.isqrt(num) ** 2 == num:
        print(num, end=' ')


x = input()
d = input()
count = 0
for digit in x:
    if digit == d:
        count += 1
print(count)


x = input()
sum_digits = 0
for digit in x:
    sum_digits += int(digit)
print(sum_digits)


x = input()
reversed_x = 0
for digit in x:
    reversed_x = int(digit) + reversed_x * 10
print(reversed_x)


x = int(input())
for i in range(2, x + 1):
    if x % i == 0:
        print(i)
        break



x = int(input())
for i in range(1, x + 1):
    if x % i == 0:
        print(i, end=' ')


x = int(input())
count = 0
for i in range(1, int(x ** 0.5) + 1):
    if x % i == 0:
        count += 1
        if i != x // i:
            count += 1
print(count)


total = 0
for _ in range(100):
    total += int(input())
print(total)


N = int(input())
total = 0
for _ in range(N):
    total += int(input())
print(total)


binary_number = input()
decimal_number = 0
power = 0
for digit in reversed(binary_number):
    decimal_number += int(digit) * (2 ** power)
    power += 1
print(decimal_number)


N = int(input())
zero_count = 0
for _ in range(N):
    if int(input()) == 0:
        zero_count += 1
print(zero_count)
