"use strict";(self.webpackChunkai_docs=self.webpackChunkai_docs||[]).push([[6021],{8900:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var l=n(4848),i=n(8453);const r={sidebar_position:2,title:"ROS Noetic \u5b89\u88c5\u6559\u7a0b"},c=void 0,o={id:"tutorial-basics/ros/ros_noetic_install",title:"ROS Noetic \u5b89\u88c5\u6559\u7a0b",description:"\u6ce8\u610f\uff1a\u8fd9\u662f ROS1 Noetic \u5b89\u88c5\u6559\u7a0b\uff0c\u4e0d\u540c\u7248\u672c\u7684 ROS \u5b89\u88c5\u6d41\u7a0b\u4e0d\u5c3d\u76f8\u540c\uff08\u5c24\u5176 ros1 \u4e0e ros2 \u4e4b\u95f4\u7684\u5dee\u522b\uff09\u3002",source:"@site/docs/tutorial-basics/ros/ros_noetic_install.md",sourceDirName:"tutorial-basics/ros",slug:"/tutorial-basics/ros/ros_noetic_install",permalink:"/docs/tutorial-basics/ros/ros_noetic_install",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"ROS Noetic \u5b89\u88c5\u6559\u7a0b"},sidebar:"docSidebar",previous:{title:"\u4e00\u952e\u5b89\u88c5",permalink:"/docs/tutorial-basics/ros/fishros"},next:{title:"ROS \u7b80\u4ecb",permalink:"/docs/tutorial-basics/ros/introduction"}},t={},d=[{value:"\u9884\u5907\u5de5\u4f5c",id:"\u9884\u5907\u5de5\u4f5c",level:2},{value:"1. \u6362\u6e90",id:"1-\u6362\u6e90",level:3},{value:"2. \u52fe\u9009\u4e0b\u8f7d\u6e90",id:"2-\u52fe\u9009\u4e0b\u8f7d\u6e90",level:3},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"1. \u8bbe\u7f6e\u5b89\u88c5\u6e90",id:"1-\u8bbe\u7f6e\u5b89\u88c5\u6e90",level:3},{value:"2. \u8bbe\u7f6ekey",id:"2-\u8bbe\u7f6ekey",level:3},{value:"3. \u66f4\u65b0\u7d22\u5f15",id:"3-\u66f4\u65b0\u7d22\u5f15",level:3},{value:"\u5b89\u88c5ROS",id:"\u5b89\u88c5ros",level:2},{value:"1. \u5b89\u88c5 ros",id:"1-\u5b89\u88c5-ros",level:3},{value:"2. \u5b89\u88c5 rosinstall \u5de5\u5177",id:"2-\u5b89\u88c5-rosinstall-\u5de5\u5177",level:3},{value:"3. \u5378\u8f7d ros",id:"3-\u5378\u8f7d-ros",level:3},{value:"\u914d\u7f6e ROS",id:"\u914d\u7f6e-ros",level:2},{value:"1. \u914d\u7f6e\u73af\u5883\u53d8\u91cf",id:"1-\u914d\u7f6e\u73af\u5883\u53d8\u91cf",level:3},{value:"2. \u521d\u59cb\u5316rosdep",id:"2-\u521d\u59cb\u5316rosdep",level:3},{value:"\u6d4b\u8bd5 ROS",id:"\u6d4b\u8bd5-ros",level:2},{value:"ROS \u5f00\u53d1\u73af\u5883\u642d\u5efa",id:"ros-\u5f00\u53d1\u73af\u5883\u642d\u5efa",level:2},{value:"\u7ec8\u7aef\u63a8\u8350\uff1aTerminator",id:"\u7ec8\u7aef\u63a8\u8350terminator",level:3},{value:"\u7f16\u8f91\u5668\u63a8\u8350\uff1aVS Code",id:"\u7f16\u8f91\u5668\u63a8\u8350vs-code",level:3},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:4},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:4},{value:"\u5b89\u88c5\u6269\u5c55",id:"\u5b89\u88c5\u6269\u5c55",level:4},{value:"\u5378\u8f7d",id:"\u5378\u8f7d",level:4}];function a(s){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.admonition,{type:"info",children:[(0,l.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u8fd9\u662f ROS1 Noetic \u5b89\u88c5\u6559\u7a0b\uff0c\u4e0d\u540c\u7248\u672c\u7684 ROS \u5b89\u88c5\u6d41\u7a0b\u4e0d\u5c3d\u76f8\u540c\uff08\u5c24\u5176 ros1 \u4e0e ros2 \u4e4b\u95f4\u7684\u5dee\u522b\uff09\u3002"}),(0,l.jsx)(e.p,{children:"\u6211\u4eec\u8981\u6c42\u5b89\u88c5 Ubuntu 22.04 & ROS Humble\uff0c\u8bf7\u4f7f\u7528\u4e0a\u4e00\u7bc7\u4ecb\u7ecd\u7684\u4e00\u952e\u5b89\u88c5\u6216\u67e5\u8be2\u5176\u4ed6\u6559\u7a0b\u5b89\u88c5\u3002"})]}),"\n",(0,l.jsx)(e.h2,{id:"\u9884\u5907\u5de5\u4f5c",children:"\u9884\u5907\u5de5\u4f5c"}),"\n",(0,l.jsx)(e.h3,{id:"1-\u6362\u6e90",children:"1. \u6362\u6e90"}),"\n",(0,l.jsx)(e.p,{children:"\u70b9\u51fb \u201c\u8f6f\u4ef6\u4e0e\u66f4\u65b0\u201d\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ros1-1.png",alt:"img"})}),"\n",(0,l.jsx)(e.p,{children:"\u5207\u6362\u4e3a\u4e2d\u79d1\u5927\u6e90\u6216\u6e05\u534e\u6e90\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ros1-2.png",alt:"img"})}),"\n",(0,l.jsx)(e.h3,{id:"2-\u52fe\u9009\u4e0b\u8f7d\u6e90",children:"2. \u52fe\u9009\u4e0b\u8f7d\u6e90"}),"\n",(0,l.jsx)(e.p,{children:"\u5c06\u524d\u56db\u4e2a\u9009\u9879\u4fdd\u6301\u52fe\u9009\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ros1-3.png",alt:"img"})}),"\n",(0,l.jsx)(e.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,l.jsx)(e.h3,{id:"1-\u8bbe\u7f6e\u5b89\u88c5\u6e90",children:"1. \u8bbe\u7f6e\u5b89\u88c5\u6e90"}),"\n",(0,l.jsx)(e.p,{children:"\u5b98\u65b9\u9ed8\u8ba4\u5b89\u88c5\u6e90\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo sh -c 'echo \"deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main\" > /etc/apt/sources.list.d/ros-latest.list'\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6216 \u6e05\u534e\u6e90\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo sh -c '. /etc/lsb-release && echo \"deb http://mirrors.tuna.tsinghua.edu.cn/ros/ubuntu/ `lsb_release -cs` main\" > /etc/apt/sources.list.d/ros-latest.list'\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6216 \u4e2d\u79d1\u5927\u6e90\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo sh -c '. /etc/lsb-release && echo \"deb http://mirrors.ustc.edu.cn/ros/ubuntu/ `lsb_release -cs` main\" > /etc/apt/sources.list.d/ros-latest.list'\n"})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["PS\uff1a1. \u56de\u8f66\u540e\uff0c\u53ef\u80fd\u9700\u8981\u8f93\u5165\u7ba1\u7406\u5458\u5bc6\u7801",(0,l.jsx)("br",{}),"\u2003\u2003 2. \u5efa\u8bae\u4f7f\u7528\u56fd\u5185\u5b89\u88c5\u6e90\uff0c\u901f\u5ea6\u66f4\u5feb"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"2-\u8bbe\u7f6ekey",children:"2. \u8bbe\u7f6ekey"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654\n"})}),"\n",(0,l.jsx)(e.h3,{id:"3-\u66f4\u65b0\u7d22\u5f15",children:"3. \u66f4\u65b0\u7d22\u5f15"}),"\n",(0,l.jsx)(e.p,{children:"\u5b98\u65b9\u5efa\u8bae\u4f7f\u7528 apt\uff0c\u800c\u975e apt-get"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo apt update\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5b89\u88c5ros",children:"\u5b89\u88c5ROS"}),"\n",(0,l.jsx)(e.h3,{id:"1-\u5b89\u88c5-ros",children:"1. \u5b89\u88c5 ros"}),"\n",(0,l.jsx)(e.p,{children:"\u7531\u4e8e\u7f51\u7edc\u56e0\u7d20\uff0c\u82e5\u5b89\u88c5\u5931\u8d25\uff0c\u53ef\u91cd\u590d\u8c03\u7528\u66f4\u65b0\u4e0e\u5b89\u88c5\u547d\u4ee4\u76f4\u81f3\u6210\u529f"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo apt install ros-noetic-desktop-full\n"})}),"\n",(0,l.jsx)(e.h3,{id:"2-\u5b89\u88c5-rosinstall-\u5de5\u5177",children:"2. \u5b89\u88c5 rosinstall \u5de5\u5177"}),"\n",(0,l.jsx)(e.p,{children:"\u5b89\u88c5\u6784\u5efa\u4f9d\u8d56\u7684\u76f8\u5173\u5de5\u5177"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo apt install python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool build-essential\n"})}),"\n",(0,l.jsx)(e.h3,{id:"3-\u5378\u8f7d-ros",children:"3. \u5378\u8f7d ros"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u6211\u53ea\u662f\u5199\u5728\u8fd9\u91cc\u6559\u4f60\u600e\u4e48\u5378\u8f7d \u5e76\u4e0d\u662f\u53eb\u4f60\u5378\u8f7d |\xb7\u03c9\xb7`)"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo apt remove ros-noetic-*\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u914d\u7f6e-ros",children:"\u914d\u7f6e ROS"}),"\n",(0,l.jsx)(e.h3,{id:"1-\u914d\u7f6e\u73af\u5883\u53d8\u91cf",children:"1. \u914d\u7f6e\u73af\u5883\u53d8\u91cf"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc\nsource ~/.bashrc\n'})}),"\n",(0,l.jsx)(e.h3,{id:"2-\u521d\u59cb\u5316rosdep",children:"2. \u521d\u59cb\u5316rosdep"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo apt-get install python3-pip \nsudo pip3 install rosdepc\nsudo rosdepc init\nrosdepc update\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u6d4b\u8bd5-ros",children:"\u6d4b\u8bd5 ROS"}),"\n",(0,l.jsx)(e.p,{children:"\u5f00\u4e00\u65b0\u7ec8\u7aef\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"roscore\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u518d\u65b0\u5f00\u4e00\u7ec8\u7aef\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"rosrun turtlesim turtlesim_node\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u82e5\u51fa\u73b0\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u5219ROS\u5b89\u88c5\u6210\u529f"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ros1-4.png",alt:"img"})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"Tips\uff1a\u5982\u679c\u4f60\u53d1\u73b0\u6d77\u9f9f\u4e0e\u56fe\u793a\u4e0d\u4e00\u6837\uff0c\u4e0d\u5fc5\u62c5\u5fe7\uff0cturtlesim \u6bcf\u6b21\u542f\u52a8\u6d77\u9f9f\u6837\u5f0f\u968f\u673a\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"ros-\u5f00\u53d1\u73af\u5883\u642d\u5efa",children:"ROS \u5f00\u53d1\u73af\u5883\u642d\u5efa"}),"\n",(0,l.jsx)(e.h3,{id:"\u7ec8\u7aef\u63a8\u8350terminator",children:"\u7ec8\u7aef\u63a8\u8350\uff1aTerminator"}),"\n",(0,l.jsxs)(e.p,{children:["\u5728 ROS \u4e2d\uff0c\u9700\u8981\u9891\u7e41\u5730\u4f7f\u7528\u5230\u7ec8\u7aef\uff0c\u4e14\u53ef\u80fd\u9700\u8981\u540c\u65f6\u5f00\u542f\u591a\u4e2a\u7a97\u53e3\uff0c\u63a8\u8350\u4e00\u6b3e\u8f83\u4e3a\u597d\u7528\u7684\u7ec8\u7aef\uff1a",(0,l.jsx)(e.strong,{children:"Terminator"})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo apt install terminator\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u7f16\u8f91\u5668\u63a8\u8350vs-code",children:"\u7f16\u8f91\u5668\u63a8\u8350\uff1aVS Code"}),"\n",(0,l.jsx)(e.p,{children:"\u514d\u8d39\u3001\u5f00\u6e90\u4e14\u529f\u80fd\u5f3a\u5927\u7684\u8f7b\u91cf\u7ea7\u4ee3\u7801\u7f16\u8f91\u5668\uff0c\u6b64\u5904\u4e0d\u591a\u4ecb\u7ecd\u3002"}),"\n",(0,l.jsx)(e.h4,{id:"\u4e0b\u8f7d",children:"\u4e0b\u8f7d"}),"\n",(0,l.jsxs)(e.p,{children:["\u4e0b\u8f7d\u5730\u5740\uff1a",(0,l.jsx)(e.a,{href:"https://code.visualstudio.com/docs?start=true",children:"https://code.visualstudio.com/docs?start=true"})]}),"\n",(0,l.jsx)(e.h4,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u5230\u521a\u521a\u4e0b\u8f7d\u7684 vscode \u5b89\u88c5\u5305\u6240\u5728\u76ee\u5f55\u4e0b"}),"\uff0c\u6253\u5f00\u7ec8\u7aef\uff0c\u8f93\u5165\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo dpkg -i xxx(\u5b89\u88c5\u5305\u540d\u79f0).deb\n"})}),"\n",(0,l.jsx)(e.h4,{id:"\u5b89\u88c5\u6269\u5c55",children:"\u5b89\u88c5\u6269\u5c55"}),"\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528 VS Code \u5f00\u53d1 ROS \u7a0b\u5e8f\uff0c\u9700\u8981\u5148\u5b89\u88c5\u4e00\u4e9b\u6269\u5c55\uff0c\u5e38\u7528\u6269\u5c55\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:(0,l.jsx)(e.img,{src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ros2-2.png",alt:"img"})}),(0,l.jsx)(e.th,{children:(0,l.jsx)(e.img,{src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ros2-3.png",alt:"img"})})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:(0,l.jsx)(e.img,{src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ros2-4.png",alt:"img"})}),(0,l.jsx)(e.td,{children:(0,l.jsx)(e.img,{src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ros2-5.png",alt:"img"})})]})})]}),"\n",(0,l.jsx)(e.h4,{id:"\u5378\u8f7d",children:"\u5378\u8f7d"}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u4e48\u597d\u7528\u7684\u4e1c\u897f\u5e72\u561b\u8981\u5378\u8f7d"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo dpkg --purge  code\n"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u597d\u4e86\uff0c\u5feb\u5f00\u59cb\u6109\u5feb\u5730\u5b66\u4e60\u53ed\uff01\uff01"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/ros2-6.jpg",alt:"img"})})]})}function h(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(a,{...s})}):a(s)}},8453:(s,e,n)=>{n.d(e,{R:()=>c,x:()=>o});var l=n(6540);const i={},r=l.createContext(i);function c(s){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function o(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:c(s.components),l.createElement(r.Provider,{value:e},s.children)}}}]);