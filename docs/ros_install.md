---
sidebar_position: 3
---

# ROS-Noetic 安装教程

<br />

## 预备工作

### 1.换源

点击“软件与更新”。<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ros1-1.png)<br />切换为中科大源或清华源。<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ros1-2.png)

### 2.勾选下载源

将前四个选项保持勾选。<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ros1-3.png)

## 准备工作

### 1.设置安装源

官方默认安装源：

```bash
sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
```
或 清华源：

```bash
sudo sh -c '. /etc/lsb-release && echo "deb http://mirrors.tuna.tsinghua.edu.cn/ros/ubuntu/ `lsb_release -cs` main" > /etc/apt/sources.list.d/ros-latest.list'
```

或 中科大源：

```bash
sudo sh -c '. /etc/lsb-release && echo "deb http://mirrors.ustc.edu.cn/ros/ubuntu/ `lsb_release -cs` main" > /etc/apt/sources.list.d/ros-latest.list'
```

> PS：1.回车后，可能需要输入管理员密码<br />&emsp;&emsp; 2.建议使用国内安装源，速度更快

### 2.设置key

```bash
sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654
```

### 3.更新索引

官方建议使用apt，而非apt-get

```bash
sudo apt update
```


## 安装ROS

### 1.安装ros

由于网络因素，若安装失败，可重复调用更新与安装命令直至成功

```bash
sudo apt install ros-noetic-desktop-full
```

### 2.安装rosinstall工具

安装构建依赖的相关工具

```bash
sudo apt install python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool build-essential
```

### 3.卸载ros

**我只是写在这里教你怎么卸载 并不是叫你卸载 |·ω·`)**

```bash
sudo apt remove ros-noetic-*
```


## 配置ROS

### 1.配置环境变量

```bash
echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

### 2.初始化rosdep

```bash
sudo apt-get install python3-pip 
sudo pip3 install rosdepc
sudo rosdepc init
rosdepc update
```


## 测试ROS

开一新终端：

```bash
roscore
```

再新开一终端：

```bash
rosrun turtlesim turtlesim_node
```

若出现如下图所示，则ROS安装成功<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ros1-4.png)
> Tips：<br />如果你发现海龟与图示不一样，不必担忧，turtlesim每次启动海龟样式随机。


# ROS开发环境搭建

## 终端推荐：Terminator

在 ROS 中，需要频繁地使用到终端，且可能需要同时开启多个窗口，推荐一款较为好用的终端：**Terminator**

```bash
sudo apt install terminator
```


## 编辑器推荐：VSCode

免费、开源且功能强大的轻量级代码编辑器，此处不多介绍。

### 1.下载

下载地址：[https://code.visualstudio.com/docs?start=true](https://code.visualstudio.com/docs?start=true)<br />历史版本下载地址：[https://code.visualstudio.com/updates](https://code.visualstudio.com/updates)

### 2.安装

**到刚刚下载的vscode安装包所在目录下**，打开终端，输入：
```bash
sudo dpkg -i xxx(安装包名称).deb
```

### 3.安装扩展

使用 VScode 开发 ROS 程序，需要先安装一些扩展，常用扩展如下：<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ros2-1.png)![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ros2-2.png)<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ros2-3.png)![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ros2-4.png)<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ros2-5.png)

### 4.卸载

这么好用的东西干嘛要卸载

```bash
sudo dpkg --purge  code
```
<br /><br />

**好了，快开始愉快地学习叭！！**<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ros2-6.jpg)
