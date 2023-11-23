# Tutorial 02

## 2.1 复制文件

### cp (copy)

复制file1，并命名为file2

```bash
cp file1 file2
```

复制file3至xxx目录，文件名称保持相同

```bash
cp file3 xxx
```

<br />

## 2.2 移动文件/重命名文件

### mv (move)

把file1移动到xxx目录

```bash
mv file1 xxx
```

把file1重命名为file6

```bash
mv file1 file6
```

<br />

## 2.3 删除文件

### rm (remove)

删除file1

```bash
rm file1
```

<br />

## 2.4 在屏幕上显示文件内容

### clear (clear screen)

当终端窗口中积累了较多命令，你看着心烦，在开始下一步之前，你可能需要清除终端窗口上的内容，因此可以键入

```bash
clear
```

### cat (concatenate)

命令 cat 可用于在屏幕上显示文件的内容。例如：

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub2-1.png)

### less

该命令较少将文件的内容写入屏幕，一次一页。

如果要查看另一页，请按空格键。如果你想退出阅读，键入q。

### head

将文件的前十行写入屏幕。

### tail

将文件的最后十行写入屏幕。

<br />

## 2.5 搜索文件内容

### grep (不要问为什么叫grep)

打印出file4中包含“xxx”的每一行

```bash
grep xxx file4
```

例如

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub2-2.png)

### wc (word count)

一个方便的小工具是wc命令。要对file4进行字数统计，请键入

```bash
wc -w file4
```

若想知道文件有多少行，请键入

```bash
wc -l file4
```

<br />

## 总结

|  命令  |  意义  |
|--------|--------|
|cp file1 file2|复制file1并命名为file2|
|cp file1 xxx|复制file1至xxx目录|
|mv file xxx|把file移动到xxx目录|
|mv file1 file6|把file1重命名为file6|
|rm file|删除文件|
|cat file|在屏幕上显示文件内容|
|less file|在屏幕上显示文件部分内容|
|head file|显示文件前10行内容|
|tail file|显示文件末10行内容|
|grep xxx file|打印file中包含xxx的行|
|wc -w file|显示字数|
|wc -l file|显示行数|
|clear|清屏|