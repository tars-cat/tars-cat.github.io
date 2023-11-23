---
sidebar_position: 2
---

# Ubuntu 安装教程（虚拟机）

## VMware安装

自行安装。略。


## Ubuntu镜像下载

以清华源为例。<br />清华大学开源软件镜像站：[https://mirrors.tuna.tsinghua.edu.cn/](https://mirrors.tuna.tsinghua.edu.cn/)

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/mirrors01.jpg)
<!-- ![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/mirrors02.jpg) -->
下载Ubuntu18镜像文件。（此过程可能耗时较长，慢慢等叭）

## 虚拟机配置

### 1.新建虚拟机

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/create-new-vm.jpg)

#### 1.1 选择自定义

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-1.png)

#### 1.2 直接下一步

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-2.png)

#### 1.3 选择稍后安装操作系统

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-3.png)

#### 1.4 选择Linux 版本Ubuntu64位

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-4.png)

#### 1.5 虚拟机名称与安装位置按需填写

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-5.png)

#### 1.6 处理器按需配置

不要超过电脑配置，这些设置后期还可更改。<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-6.png)

#### 1.7 内存按需配置

不要超过电脑内存，这些设置后期还可更改。建议不要超过电脑内存的一半。<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-7.png)

#### 1.8 选择使用网络地址转换

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-8.png)

#### 1.9 选择LSI Logic

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-9.png)

#### 1.10 选择SCSI

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-10.png)

#### 1.11 选择创建新虚拟磁盘

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-11.png)

#### 1.12 磁盘容量按需设置 选择将虚拟磁盘拆分成多个文件

磁盘容量40左右够用，想要更多看你心情<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-12.png)

#### 1.13 直接下一步

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-13.png)

#### 1.14 确认设置无误 点击完成

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm1-14.png)

### 2.配置映像文件

点击“编辑虚拟机设置”。<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm2-1.jpg)<br />点击“CD/DVD (SATA)”，选择“使用ISO映像文件”。<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm2-2.png)<br />点击“浏览”，找到刚刚下载好的ISO映像文件，点击“打开”。<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm2-3.png)<br />点击“确定”。<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm2-4.png)

## Ubuntu安装

第一次开启虚拟机，自动进入安装程序。<br />语言可以选择中文，也可以英文安装，语言后期还可更改。<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-1.png)<br />然后一路continue。<br />点击“Install Now"。<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-2.png)<br />点击continue。<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-3.png)<br />点击中国地图。点哪都是shanghai<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-4.png)<br />填写信息<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-5.png)<br />安装中。<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-6.png)<br />安装完成后重新启动。<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-7.png)<br />若长时间未成功重新启动，可以在VMware强制关掉此虚拟机，然后再开机。<br />重启后，出现此界面，按“Enter”<br />![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-9.png)

<br />

## 其他

如果你开机后发现，嗯，这样↓

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-10.png)

嗯，你可以自行上网搜索如何安装Vmware Tools

或者你可以打开终端，输入：

```bash
sudo apt install open-vm-tools
```
```bash
sudo apt install open-vm-tools-desktop
```

之后最好重启一下

<br />
<br />

## Ubuntu卸载

在库中右击你想要删除的虚拟机，在“管理”中点击“从磁盘中删除”。

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/vm3-8.png)

