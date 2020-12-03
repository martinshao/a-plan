# 算法面试通关 40 讲

@author 覃超
@time 2020 年 11 月 28 日 22:27:46
@organization 极客时间

## 01 合格程序员的第一步：算法与数据结构

算法在日常生活工作中的运用

找女、男朋友
工作任务安排 (优先队列)
扑克游戏
加密货币、区块链(比特币)

算法的重要性

算法好比修炼内功
去国内一流互联网的必要条件
硅谷互联网公司面试更是要求当场写算法题目
算法和数据结构是有趣且使用的(区块链举例)
附录：去硅谷工作的路线图

- 快手、字节、Airbnb Beijing、Snapchat 深圳
- 微信、地平线机器人、第四范式、小米、Musically、Face++
- BAT、微软、Google、小红书、美团、饿了么、网易等等
- 新美大、滴滴等

## 02 如何事半功倍地学习算法与数据结构

把学习算法与数据结构与打游戏类比

Outliers 《异类——不一样的成功启示录》

一万小时定律 -- 如何精通一个领域

- Chunk it up (切碎知识点) 一个大的知识体系解构成小的知识点，类似庖丁解牛的感觉。注重每个知识点的脉络，和知识点之间的联系
- Deliberate practicing (刻意练习)
- Feedback (反馈)

星际争霸(CS/LOL/吃鸡)

- 控兵(微操)
- 运营
- 战术
- 热键操作 VS 鼠标操作
- 等等等

### Deliberate Praticing

- 刻意练习
- 练习缺陷、弱点地方
- 不舒服、不爽、枯燥
- 生活中例子：乒乓球、台球、游戏等等

### Feedback

- 即时反馈
- 主动型反馈
  - 高手代码
  - (去 github 上看好的源码，去 leetcode 上刷题，leetcode 解题的论坛)
  - 第一视角直播
- 被动型反馈
  - code review
  - 教练看你打，给你反馈

### 切题四件套

- Clarification
- Possible solutions
  - compare(time/space)
  - optimal (加强)
- Coding (多写)
- Test cases

## 17 数&二叉树&二叉搜索树

```python
class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left,self.rigth = None, None
```

```c++
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), rigth(NULL) {}
}
```

```java
public class TreeNode {
  public int val;
  public TreeNode left, right;
  public TreeNode(int val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
```

### 二叉搜索树

二叉搜索树 (英语：Binary Search Tree), 也称二叉搜索树、有序二叉树()，排序二叉树()，是指一颗空数或者具备有下列性质的二叉树：

1. 左子树上所有结点的值均小于它的根结点的值；
2. 右子树上所有结点的值均大于它的根结点的值；
3. Recursively，左、右子树也分别为二叉查找树。
