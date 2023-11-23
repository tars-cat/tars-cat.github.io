---
sidebar_position: 1
---
# 关于Ubuntu的安装

虚拟机或双系统都可。（前期可以使用虚拟机，后期建议使用双系统）

> 双系统可以保证性能，且不需要考虑硬件兼容性问题，但是和windows系统交互不便。    
>
> 虚拟机可以方便地实现 windows 与 ubuntu 交互，不过性能稍差，且与硬件交互不便。

在 ROS 中，一些仿真操作是比较耗费系统资源的，且经常需要和一些硬件(雷达、摄像头、STM32....)交互。因此，原则上建议采用双系统。不过若只出于学习目的，那么虚拟机也基本够用，且在windows与ubuntu的交互上更为方便，对于初学者更为友好。可按需选择。
若使用虚拟机，建议使用VMware。

ROS与Ubuntu版本对应关系：

> **Ubuntu 16 —— ROS Kinetic** 
>
> **Ubuntu 18 —— ROS Melodic** 
>
> **Ubuntu 20 —— ROS Noetic**

ROS2与Ubuntu版本对应关系：

> **Ubuntu 20 —— ROS Foxy** 
>
> **Ubuntu 22 —— ROS Humble**

**我们建议安装Ubuntu 22，并安装ros-humble。**
