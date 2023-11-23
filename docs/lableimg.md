# LableImg 使用方法

### 一、下载并解压lableImage

其中有两个文件：
1. data文件夹（其中只有一个名为predefined_classes.txt的文件）
2. lableImg.exe

<br />

### 二、标注前的准备

1.创建一个文件夹（名字可任意）（下文中称其为此文件夹）如：<br />&emsp;&nbsp;![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/lable1.png)

2.将上文提到的data文件夹打开，复制其中的txt文件predefined_classes.txt，粘贴到此文件夹中。<br />&emsp;&nbsp;![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/lable2.png)

3.打开predefined_classes.txt<br />&emsp;&nbsp;修改其中的内容，改为本次数据集标注所标注的所有标签名，每一行一个。<br />&emsp;&nbsp;本次标注的标签如下：<br />&emsp;&nbsp;![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/lable3.png)

4.将图片文件夹移入此文件夹中（名字可任意）<br />&emsp;&nbsp;图片文件夹的名字可任意，最好是image+标注的图片编号的第一张到最后一张。<br />&emsp;&nbsp;![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/lable4.png)

5.在此文件夹中新建一个文件夹，即标签文件夹（用来存每一张图片对应的标签的文件夹）<br />&emsp;&nbsp;标签文件夹的名字可任意，最好是lable+标注的图片编号的第一张到最后一张。<br />&emsp;&nbsp;![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/lable5.png)

<br />

### 三、lableImg操作方法

#### 1.软件图标的使用

(1)打开需要标记的图片文件夹<br />&emsp;&nbsp;![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/lable6.png)

(2)选择保存路径（标签文件夹）<br />&emsp;&nbsp;![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/lable7.png)

(3)修改保存的标签格式<br />&emsp;&nbsp;![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/lable8.png)<br />&emsp;&nbsp;有两种格式：PascalVOC和yolo，分别对应XML文件和txt文件的标签<br />&emsp;&nbsp;我们使用yolo<br />&emsp;&nbsp;转换方法就是如图点击上图框住的区域即可。<br />&emsp;&nbsp;![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/lable9.png)<br />&emsp;&nbsp;务必要注意，是YOLO

(4)标注ROI区域，填写标签<br />&emsp;&nbsp;![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/lable10.png)<br />&emsp;&nbsp;\#\#标注的重点：<br />&emsp;&emsp;a.标签格式为B*、R*两种，*为所框选的车上的数字，B指蓝色车，R指红色车。如：<br />&emsp;&emsp;&nbsp;![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/lable11.png)<br />&emsp;&emsp;b.尽可能框出所有的能看清楚数字的车辆，如果是远处实在是看不清数字的车辆就不需要标注了。<br />&emsp;&emsp;c.尽可能将车全部都框进框里并且车的边缘刚好贴合着框。<br />&emsp;&emsp;d.如果在标注的时候发现两个框有重合，依旧以上面第三条为准，两辆车各框各的。

(5)保存文件，有弹框提醒<br />&emsp;&nbsp;![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/lable12.png)

(6)点击下一张图进行标记<br />&emsp;&nbsp;![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/lable13.png)
<br />

#### 2.软件快捷键的使用

&emsp;&nbsp;**Ctrl** + **U** : 打开图片文件夹

&emsp;&nbsp;**Ctrl** + **R** : 更改结果保存位置

&emsp;&nbsp;**W** : 开始画框

&emsp;&nbsp;**Ctrl** + **S** : 保存

&emsp;&nbsp;**D** : 下一张

&emsp;&nbsp;**A** : 上一张

&emsp;&nbsp;**Del** : 删除画的框

&emsp;&nbsp;**Ctrl** + **+** : 图片放大

&emsp;&nbsp;**Ctrl** + **–** : 图片缩小

&emsp;&nbsp;**↑ → ↓ ←** : 对框进行移动

&emsp;&nbsp;**Ctrl** + **D** : 复制当前框的标签和框
<br />

#### 3.更多快捷操作

a.按右键可以更快的点到 Create Rectbox

b.如果标注的时候很多张都是同一个标签且只有该标签，就可以在右上角将"use default label"勾选上，在后面填上此标签。

<br />

### 四、问题解决

标注的时候先标注几个，然后点开标签文件夹看一看<br />按照predefined_classes里面标签的顺序，依次对应为0，1，2……9<br />假如标注的车辆是R4，那么对应的txt文件中第一个数字就是3

如果出现了这个问题，也就是txt文件中第一个数字没有对应上标签的顺序，把图片文件夹移动至data文件夹中，自己修改predefined_class文件，不要直接复制我发的这个。