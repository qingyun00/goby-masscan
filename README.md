必须已经安装了masscan，且是全局变量，否则无法扫描

masscan请自行安装


Mac与Linux下需要设置sudo免密码输入


Mac设置方式：
https://blog.csdn.net/zlfing/article/details/90448667

Linux免sudo设置方式：
https://blog.csdn.net/db_guy/article/details/79065524

感谢go0p师傅与叶落凡尘师傅提供的技术支持

masscan全端口扫描，默认就是0-65535，不用在改了。
目前只支持单个IP或IP段，你如果这样输入也行0.0.0.0,1.1.1.1 
直白点就是，只要masscan命令支持这样的ip书写格式就行。

线程的调整如下图，我默认是写的100，要多快看自身环境
![](https://z3.ax1x.com/2021/03/22/6TlpOs.png)

使用的话十分简单如下图：
![](https://z3.ax1x.com/2021/03/22/6TliT0.png)
点击后进入如下图：
![](https://z3.ax1x.com/2021/03/22/6TlEfU.png)

输入你的目标点击回车，或者放大镜都行，然后出现命令行界面，等待扫描结束：
![](https://z3.ax1x.com/2021/03/22/6Tlm6J.png)

在命令行扫描完成后在点击导入页面就会自动导入ip与端口，剩下的就是开启goby扫描吧
![](https://z3.ax1x.com/2021/03/22/6TlKmR.png)
