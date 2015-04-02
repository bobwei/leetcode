class Solution:
    # @param num, a list of integer
    # @return an integer
    def rob(self, num):
        if not num:

            return 0

        if len(num) < 2:

            return sum(num)

        results = {}
        results[-1] = 0

        for i, n in enumerate(num):
            if i == 0:
                results[i] = num[i]
            else:
                results[i] = max(results[i-1], results[i-2] + num[i])

        return results[len(num) - 1]

print Solution().rob([1, 3, 1, 3])
