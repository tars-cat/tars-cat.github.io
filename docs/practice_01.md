# 算法组训练01

​		为了防止小朋友们暑假在家无聊，天气太热不想出门还找不到事情可做，特意出了一道题来巩固大家的c++基础 ~~(难为大家)~~ ，题目内容如下：

### 从零实现STL中的vector容器的主要功能，主要功能如下表

|                 函数名                  |                            功能                             |
|-----------------------------------------|------------------------------------------------------------|
|                vector()                 |                          构造函数                           |
|                ~vector()                |                          析构函数                           |
|        vector(const vector& vec)        |                        拷贝构造函数                         |
|  vector& operator=(const vector& vec)   |                     赋值运算符重载函数                      |
|  value_type& operator[](size_t index)   | []运算符重载函数（用于取出vector实例化对象的第index个元素） |
| bool operator==(const vector& vec)const |     ==运算符重载函数（用于判断两个vector对象是否相等）      |
|     void push_back(value_type val)      |                 向vector示例化对象增添元素                  |
|             void pop_back()             |              删除vector实例化对象最后一个元素               |
| void insert(iterator it,value_type val) |           向vector实例化对象的it位置插入一个元素            |
|         void erase(iterator it)         |              删除vector实例化对象it位置的元素               |
|         value_type front()const         |                取出vector对象中的第一个元素                 |
|         value_type back()const          |               取出vector对象中的最后一个元素                |
|            iterator begin()             |              获取vector实例化对象的元素首地址               |
|             iterator end()              |       获取vector实例化对象的最后一个元素的下一个地址        |
|           size_t size()const            |               获取vector实例化对象的元素个数                |
|         size_t capacity()const          |                   size_t capacity()const                    |
|              bool empty()               |                判断vector实例化对象是否为空                 |
|               自定义函数                |          不限类型，能体现出你实现的上述功能的函数           |

​		vector 容器是 [STL](http://c.biancheng.net/stl/) 中最常用的容器之一，它和 array 容器非常类似，都可以看做是对 [C++](http://c.biancheng.net/cplus/) 普通数组的“升级版”。不同之处在于，array 实现的是静态数组（容量固定的数组），而 vector 实现的是一个动态数组，即可以进行元素的插入和删除，在此过程中，vector 会动态调整所占用的内存空间，整个过程无需人工干预。

​		vector 常被称为向量容器，因为该容器擅长在尾部插入或删除元素，在常量时间内就可以完成，时间复杂度为 `O(1)` ；而对于在容器头部或者中部插入或删除元素，则花费时间要长一些（移动元素需要耗费时间），时间复杂度为线性阶 `O(n)` 。

### 要求：

1.使用Google代码规范，并且分文件进行编写

2.推荐大家使用cmake进行工程文件的构造，这个因为没讲到所以暂时不强制要求，但是迟早要学

3.提交方式：自己开一个GitHub仓库并上传，仓库地址发给学长或学姐进行审核

4.代码要拟人，main函数中要想办法把代码的功能展示出来

### 前置知识：

#### 1.Git

推荐视频：[尚硅谷新版Git快速入门](https://www.bilibili.com/video/BV1wm4y1z7Dg)

配套教程：[Download git.pdf](https://wwqs.lanzoub.com/ic91712cekqb)  密码：4312

#### 2.Google代码规范

[Google C++ Style Guide](https://google.github.io/styleguide/cppguide.html)

[Google C++ 风格指南](https://www.bookstack.cn/read/google-cpp-style)

![google_cpp_style_guide](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/google_cpp_style_guide.jpg)

#### 3.Cmake

[Official CMake Tutorial](https://cmake.org/cmake/help/latest/guide/tutorial/index.html)

[cmake-examples-Chinese](https://sfumecjf.github.io/cmake-examples-Chinese/)


### 结语：

​这项考核能够极大的巩固大家的面向对象编程水平。有一定难度，可以参考源码和网上的教程，但是不要照抄，只有动脑才能真正学到东西。ctrlcv工程师没有出路。