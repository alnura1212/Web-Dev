N = int(input())
arr = [int(x) for x in input().split()]
for i in range(0, N, 2):
    print(arr[i], end=' ')


N = int(input())
arr = [int(x) for x in input().split()]
for num in arr:
    if num % 2 == 0:
        print(num, end=' ')


N = int(input())
arr = [int(x) for x in input().split()]
count = 0
for num in arr:
    if num > 0:
        count += 1
print(count)


N = int(input())
arr = [int(x) for x in input().split()]
count = 0
for i in range(1, N):
    if arr[i] > arr[i - 1]:
        count += 1
print(count)


N = int(input())
arr = [int(x) for x in input().split()]
found = False
for i in range(1, N):
    if (arr[i] > 0 and arr[i - 1] > 0) or (arr[i] < 0 and arr[i - 1] < 0):
        found = True
        break
print("YES" if found else "NO")


N = int(input())
arr = [int(x) for x in input().split()]
count = 0
for i in range(1, N - 1):
    if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]:
        count += 1
print(count)


arr = [int(x) for x in input().split()]
for i in range(N // 2):
    arr[i], arr[N - 1 - i] = arr[N - 1 - i], arr[i]
print(*arr)


