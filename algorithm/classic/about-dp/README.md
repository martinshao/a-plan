# 动态规划算法总结

## 从递归说起

先给两个经典的递归的例子：一个是斐波那契数列，一个是求 n 阶乘

```py
class Solution:
  def Fibonacci(self, n):
    if n == 0:
      return 0
    if n == 1:
      return 1
    return self.Fibonacci(n-1) + self(n-2)

so = Solution()
print(so.Fibonacci(7))
```

