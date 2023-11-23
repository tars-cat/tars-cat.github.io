# Tutorial 03

## 3.1 通配符

### * 通配符

字符 * 称为通配符，在文件（或目录）名称中匹配任何一个或多个字符。

```bash
ls ab*
```

这将列出当前目录中所有以ab开头的文件或目录。例如：

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub3-1.png)

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub3-2.png)

```bash
ls *fg
```

这将列出当前目录中所有以fg开头的文件或目录。

### ? 通配符

字符 ? 只匹配任意一个字符。例如：

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub3-3.png)

<br />

## 3.2 文件名约定

需要注意的是，目录是一种特殊类型的文件。命名文件的规则和约定也适用于目录。

在命名文件中，具有特殊含义的字符，例如 / * 和 % ，应避免使用。此外，**请避免在名称中使用空格**。最安全的命名方式是仅使用字母 数字 以及 _（下划线）和 .（点）。

<br />

## 3.3 获取帮助

### 在线手册

以ls命令为例。

```bash
whatis ls
```

提供命令的单行描述，但省略有关选项等。

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub3-4.png)

在线手册提供有关大多数命令的信息。手册会告诉你特定命令可以采用哪些选项，以及如何采用选项修改命令的行为。

```bash
man ls
```

显示有关ls命令的更多信息。

![img](https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ub3-5.png)

### help

以ls命令为例。

```bash
ls --help
```

即可获取帮助。个人推荐这个办法。

<br />

## 3.4 更改访问权限

### chmod ()

只有文件的所有者可以使用 chmod 更改权限。chmod的选项如下

|选项|意义|
|----|----|
|u|user|
|g|group|
|o|其他|
|a|all|
|r|读|
|w|写入（和删除）|
|x|执行（和访问目录）|
|+|添加权限|
|-|取消权限|

例如，要给某文件添加执行权限，键入

```bash
chmod +x file
```

<br />

## 3.5 终止进程

### ^C

有时需要终止进程（例如，当执行程序处于无限循环中）

若要终止在前台运行的进程，请键入 ^C（按**Ctrl+C**）。

<br />

## 总结

|字符/命令|  意义  |
|--------|--------|
|*|匹配任意数量的字符|
|?|匹配任意一个字符|
|whatis cmd|cmd命令的简要说明|
|man cmd|cmd命令的详细信息|
|chmod|更改权限|
|^C|终止进程|

## 其他常用命令

|命令|意义|
|----|----|
|poweroff|关机|
|reboot|重启|
|shutdown -h n|n分钟中自动关机|
|shutdown -r n|n分钟后自动重启|
|shutdown -c|取消关机/重启|