# Tutorial 01

## 1.1 列出文件和目录

### ls (list)

直接启动终端时，当前工作目录就是主目录。主目录与用户名同名，例如我的是mumu，这是保存个人文件和子目录的地方。

要了解主目录中的内容，请键入

```bash
ls
```

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub1-1.png)

事实上，ls 不会将主目录中的所有文件列出，仅限于名称不以点（.）开头的那些文件。以点（.）开头的为隐藏文件，通常包含重要的程序配置信息。它们是隐藏的，因为你不应该更改，除非你非常熟悉Linux!!!

列出主目录中的所有文件，包括隐藏文件，请键入

```bash
ls -a
```

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub1-2.png)

<br />

## 1.2 创建目录

### mkdir (make directory)

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub1-3.png)

可以看到，主目录中已经创建了一个名为hungry的子目录。

<br />

## 1.3 更改为其他目录

### cd (change directory)

命令 `cd xxx` 表示更改当前工作目录到“xxx”。当前工作目录就是你所在的目录，即你在文件系统中的当前位置。

要更改为刚刚创建的目录，请键入

```bash
cd hungry
```

<br />

## 1.4 目录 . 和 ..

在当前目录（hungry）中键入

```bash
ls -a
```

如你所见，在目录中（以及所有其他目录也如此），有两个特殊的目录称为（.） 和（..)

### 当前目录（.）

在Linux中，（.）表示当前目录，因此键入

```bash
cd .
```

> 注意：cd 和 . 之间有一个空格

意味着留在原地（hungry）

乍一看，这似乎不是很有用，但是使用 （.） 作为当前目录的名称将节省大量键入。

### 父目录（..）

键入

```bash
cd ..
```

你将返回到上一级目录，即主目录。

> 注意：键入不带参数的cd总是会让你回到你的主目录。如果你在文件系统中迷路，这将非常有用。

## 1.5 打印路径

### pwd (print working directory)

路径使你能够确定相对于整个文件系统的位置。例如，要找出hungry的绝对路径名，请键入 `cd hungry` 以更改至hungry目录，然后键入

```bash
pwd
```

完整的路径为 `/home/mumu/hungry`

### 了解路径

现在我在hungry目录中新建一个apple子目录，并返回主目录，键入

```bash
cd apple
```

会收到如下消息

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub1-4.png)

原因是，apple不在当前工作目录中。对不在当前工作目录中的文件（或目录）使用命令，你必须 cd 到正确的目录，或指定其完整路径。想要到达apple，你必须键入

```bash
cd hungry/apple
```

### ~ （主目录）

主目录也可以用波浪号 ~ 字符表示。它可用于指定从主目录开始的路径。例如

```bash
ls ~/hungry
```

<br />

## 总结

|  命令  |  意义  |
|--------|--------|
|ls      |列出文件和目录|
|ls -a   |列出所有文件和目录|
|mkdir   |创建目录|
|cd xxx  |更改为指定目录|
|cd      |更改为主目录|
|cd ~    |更改为主目录|
|cd ..   |更改为父目录|
|pwd     |打印当前路径|