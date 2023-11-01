##You are given an array of integers, and your goal is to partition the array into two subsets such that the difference between the sums of the subsets is minimized. Write a function to find the minimum absolute difference between the sums of the two subsets.

# arr = [1, 2, 3, 4, 5]
# Output: 1 (Subset 1: [1, 2, 4], Subset 2: [3, 5])

# def factorial(n):
#     if n == 0 or n == 1:
#         return 1
#     else:
#         return n * factorial(n-1)
        
# result = factorial(5)
# print(result)

#print countdown
# def countdown(n):
#     if n == 0:
#         print("Done")
#     else:
#         print(n)
#         countdown(n-1)
# result = countdown(5)
# print(result)

# def recursive(n):
#     if n == 0:
#         return 0
#     else:
#         print(n)
#         return n + recursive(n -1)
# result = recursive(4)
# print(result)

def recursive(n):
    result = 0
    for i in range(1, n + 1):
        result += i
    return result
result_rec = recursive(4)
print(result_rec)
