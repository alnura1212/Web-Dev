N = int(input())
i = 1
while i * i <= N:
    print(i * i)
    i += 1


N = int(input())
i = 2
while i <= N:
    if N % i == 0:
        print(i)
        break
    i += 1


N = int(input())
power = 1
while power <= N:
    print(power, end=' ')
    power *= 2


N = int(input())
power = 1
while power < N:
    power *= 2
if power == N:
    print("YES")
else:
    print("NO")


N = int(input())
k = 0
power = 1
while power < N:
    power *= 2
    k += 1
print(k)
