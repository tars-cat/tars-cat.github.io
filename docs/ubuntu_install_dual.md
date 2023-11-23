# Ubuntu 安装教程（双系统）

Ubuntu20.04+Windows10(11)双系统安装与配置

准备清单：
- 一个脑子
- 一个空空的U盘

<br />

❗注意：

若安装Ubuntu18你可能遇到如下问题：

没有WiFi功能，无法调节亮度

可能可行的解决方法：

①进入BIOS，将“安全启动”打开再关闭，有几率解决问题。

②电脑连接手机，通过USB共享网络，然后更新内核。具体教程自行查找。

③自行安装缺少的无线网卡驱动。不建议。

若以上方法无法解决问题，请根据本教程删除Ubuntu18，安装Ubuntu20。

安装好Ubuntu20后你也可能遇到如下问题：

没有WiFi功能，无法调节亮度

解决办法同上。

若无法解决，可以向学长咨询。

<br />

## 1.制作Ubuntu20系统盘

### 1-1.下载Ubuntu镜像

推荐下载Ubuntu20.04

推荐使用[清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/)

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/mirrors01.jpg)
<!-- ![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/mirrors02.jpg) -->
下载Ubuntu20镜像文件。（此过程可能耗时较长，慢慢等叭）

### 1-2.下载UltraISO~~并破解~~，制作启动盘

参考链接：[使用UltraISO（软碟通）制作U盘启动盘完整教程](https://jingyan.baidu.com/article/5225f26b0bb45fe6fa0908bc.html)

> 注意：你的U盘将被格式化，请确保你的U盘为空或存储的内容已有备份。

### 1-3.切磁盘

右击我的电脑--管理--磁盘管理，然后找一个有较大剩余空间的分区，压缩出一块 **未分配** 的分区。

切多大看你心情，50GB够用，但多给点总没坏处（）

别动那块约几百MB的分区，不然你的电脑会和你说再见。

### 1-4.关闭Windows的快速启动和安全启动

参考链接：[关闭win10系统的快速启动和安全启动](https://www.jianshu.com/p/38e6be8efecf)

或自行百度。

### 1-5.将启动盘插入电脑，重启电脑，开机时一直按(Fn+)F12进入启动项管理

选择从U盘启动。

<br />

## 2.安装Ubuntu

与虚拟机里安装一样。详见[虚拟机教程](https://tars-cat.github.io/docs/ubuntu_install_vm)。

安装完成重启时，出现此界面，拔掉U盘，然后按Enter。

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-9.png)

<br />

## 3.装ROS去吧

[ros_install](https://tars-cat.github.io/docs/ros_install)

<br />

## 4.卸载Ubuntu

### 4-1.删除启动项

参考链接：[https://blog.csdn.net/tjuyanming/article/details/64929901](https://blog.csdn.net/tjuyanming/article/details/64929901)

### 4-2.删除卷

右击我的电脑--管理--磁盘管理，右击Ubuntu所占分区，删除卷。

### 4-3.删除Ubuntu启动项

(1) Win+R，输入diskpart

(2) 选择磁盘0【select disk 0】即win系统所在的磁盘

(3) 查看分区列表以确定具体分区【list partition】

(4) 根据容量(我的电脑为260MB，或几十至几百MB)选择EFI分区【select partition 1】

(5) 为win的EFI分区分配盘符【assign letter=p】这里p为盘符，字母A~Z应该都可以(大小写无关，自动转成大写)，**不要和已有的盘符重复**即可

(6) 先别关diskpart。**以管理员权限**打开记事本，点击文件--打开--进入P盘，进入EFI文件夹，删除其中Ubuntu文件夹

(7) 回到diskpart，删除P盘盘符【remove letter=p】

至此Ubuntu卸载完毕。