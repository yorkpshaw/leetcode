def maxSum(inputArr):
    n = len(inputArr)
    if n == 1:
        return inputArr[0]
    elif n == 2:
        return max(inputArr[0], inputArr[1])

    dp = [0] * n
    dp[0] = inputArr[0]
    dp[1] = max(inputArr[0], inputArr[1])

    for i in range(2, n):
        dp[i] = max(dp[i-1], dp[i-2] + inputArr[i])

    return dp[n-1]
