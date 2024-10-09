"use strict";(self.webpackChunkai_docs=self.webpackChunkai_docs||[]).push([[1194],{137:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var c=s(4848),i=s(8453);const l={sidebar_position:6,title:"ROS \u6784\u5efa\u5de5\u5177"},r=void 0,a={id:"tutorial-basics/ros/colcon",title:"ROS \u6784\u5efa\u5de5\u5177",description:"colcon (ROS2)",source:"@site/docs/tutorial-basics/ros/colcon.md",sourceDirName:"tutorial-basics/ros",slug:"/tutorial-basics/ros/colcon",permalink:"/docs/tutorial-basics/ros/colcon",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"ROS \u6784\u5efa\u5de5\u5177"},sidebar:"docSidebar",previous:{title:"ROS \u76ee\u5f55\u7ed3\u6784",permalink:"/docs/tutorial-basics/ros/package"},next:{title:"ROS \u5e38\u7528\u547d\u4ee4",permalink:"/docs/tutorial-basics/ros/ros_cmd"}},d={},o=[{value:"colcon (ROS2)",id:"colcon-ros2",level:2},{value:"\u57fa\u7840\u77e5\u8bc6",id:"\u57fa\u7840\u77e5\u8bc6",level:3},{value:"\u521b\u5efa\u5de5\u4f5c\u7a7a\u95f4",id:"\u521b\u5efa\u5de5\u4f5c\u7a7a\u95f4",level:3},{value:"\u6dfb\u52a0\u4e00\u4e9b\u4ee3\u7801",id:"\u6dfb\u52a0\u4e00\u4e9b\u4ee3\u7801",level:3},{value:"\u901a\u8fc7 source \u6dfb\u52a0\u4f9d\u8d56",id:"\u901a\u8fc7-source-\u6dfb\u52a0\u4f9d\u8d56",level:3},{value:"\u6784\u5efa\u5de5\u4f5c\u7a7a\u95f4",id:"\u6784\u5efa\u5de5\u4f5c\u7a7a\u95f4",level:3},{value:"source \u73af\u5883",id:"source-\u73af\u5883",level:3},{value:"colcon build \u7f16\u8bd1\u9009\u9879",id:"colcon-build-\u7f16\u8bd1\u9009\u9879",level:3},{value:"catkin \uff08\u8fd9\u662f ROS 1 \u7684\u6784\u5efa\u5de5\u5177 \u4e0d\u7528\u5b66\uff09",id:"catkin-\u8fd9\u662f-ros-1-\u7684\u6784\u5efa\u5de5\u5177-\u4e0d\u7528\u5b66",level:2},{value:"1. catkin \u7f16\u8bd1\u7cfb\u7edf",id:"1-catkin-\u7f16\u8bd1\u7cfb\u7edf",level:3},{value:"catkin \u5de5\u4f5c\u7a7a\u95f4",id:"catkin-\u5de5\u4f5c\u7a7a\u95f4",level:3},{value:"catkin \u7f16\u8bd1\u6d41\u7a0b",id:"catkin-\u7f16\u8bd1\u6d41\u7a0b",level:3},{value:"catkin_make \u547d\u4ee4\u53c2\u6570",id:"catkin_make-\u547d\u4ee4\u53c2\u6570",level:3},{value:"\u6700\u540e",id:"\u6700\u540e",level:3}];function t(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"colcon-ros2",children:"colcon (ROS2)"}),"\n",(0,c.jsx)(e.p,{children:"\u7f16\u8bd1\u5de5\u5177 colcon \u662f\u5728 ROS \u6784\u5efa\u5de5\u5177 catkin_make , catkin_make_isolated, catkin_tools \u548c ament_tools \u4e0a\u7684\u518d\u6b21\u8fed\u4ee3\u3002"}),"\n",(0,c.jsx)(e.h3,{id:"\u57fa\u7840\u77e5\u8bc6",children:"\u57fa\u7840\u77e5\u8bc6"}),"\n",(0,c.jsx)(e.p,{children:"ROS \u5de5\u4f5c\u7a7a\u95f4\u662f\u5177\u6709\u7279\u5b9a\u7ed3\u6784\u7684\u76ee\u5f55\u3002\u901a\u5e38\u6709\u4e00\u4e2a src \u5b50\u76ee\u5f55\uff0c\u8be5\u5b50\u76ee\u5f55\u662f ROS \u5305\u7684\u6e90\u6587\u4ef6\u7684\u4f4d\u7f6e\u3002\u901a\u5e38\u4e00\u5f00\u59cb\u76ee\u5f55\u662f\u7a7a\u7684\u3002"}),"\n",(0,c.jsxs)(e.p,{children:["colcon \u5728\u6e90\u4ee3\u7801\uff08src\uff09\u5916\u8fdb\u884c\u6784\u5efa\uff08\u8fd9\u4e0e CMake \u9ed8\u8ba4\u5728\u6587\u4ef6\u5939\u91cc\u4e0d\u540c\uff09\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u5c06\u5728 ",(0,c.jsx)(e.code,{children:"src"})," \u540c\u7ea7\u76ee\u5f55\u4e0b\u521b\u5efa\u4ee5\u4e0b\u6587\u4ef6\u5939:"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"build"})," \u76ee\u5f55\u5c06\u662f\u4e2d\u95f4\u6587\u4ef6\u7684\u5b58\u50a8\u4f4d\u7f6e\u3002\u5bf9\u4e8e\u6bcf\u4e2a\u5305\uff0c\u5c06\u5728\u5176\u4e2d\u521b\u5efa\u4e00\u4e2a\u5b50\u6587\u4ef6\u5939\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"install"})," \u76ee\u5f55\u662f\u6bcf\u4e2a\u8f6f\u4ef6\u5305\u5c06\u5b89\u88c5\u5230\u7684\u4f4d\u7f6e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6bcf\u4e2a\u5305\u90fd\u5c06\u5b89\u88c5\u5230\u5355\u72ec\u7684\u5b50\u76ee\u5f55\u4e2d\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"log"})," \u76ee\u5f55\u5305\u542b\u6709\u5173\u6bcf\u4e2a colcon \u8c03\u7528\u7684\u5404\u79cd\u65e5\u5fd7\u4fe1\u606f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"\u521b\u5efa\u5de5\u4f5c\u7a7a\u95f4",children:"\u521b\u5efa\u5de5\u4f5c\u7a7a\u95f4"}),"\n",(0,c.jsx)(e.p,{children:"\u9996\u5148\uff0c\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55 ( dev_ws ) \u6765\u4f5c\u4e3a\u6211\u4eec\u7684\u5de5\u4f5c\u7a7a\u95f4\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"mkdir -p ~/dev_ws/src\r\ncd ~/dev_ws\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u6b64\u65f6\uff0c\u5de5\u4f5c\u533a\u5305\u542b\u4e00\u4e2a\u7a7a\u76ee\u5f55 ",(0,c.jsx)(e.code,{children:"src"}),"\u3002"]}),"\n",(0,c.jsx)(e.h3,{id:"\u6dfb\u52a0\u4e00\u4e9b\u4ee3\u7801",children:"\u6dfb\u52a0\u4e00\u4e9b\u4ee3\u7801"}),"\n",(0,c.jsxs)(e.p,{children:["\u8ba9\u6211\u4eec\u5c06 ",(0,c.jsx)(e.a,{href:"https://github.com/ros2/examples",children:"examples"})," \u4ed3\u5e93\u514b\u9686\u5230\u5de5\u4f5c\u533a\u7684 ",(0,c.jsx)(e.code,{children:"src"})," \u76ee\u5f55\u4e2d:"]}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:"\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u914d\u7f6e git\uff0c\u53ef\u4ee5\u4e0b\u8f7d\u5bf9\u5e94\u7684\u538b\u7f29\u5305\uff0c\u89e3\u538b\u540e\u81ea\u884c\u653e\u5165 src\u3002"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/ros2/examples src/examples -humble\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u901a\u8fc7-source-\u6dfb\u52a0\u4f9d\u8d56",children:"\u901a\u8fc7 source \u6dfb\u52a0\u4f9d\u8d56"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"source /opt/ros/humble/setup.bash\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f60\u5e94\u8be5\u5c06\u8fd9\u6761\u547d\u4ee4\u5199\u5165 ~/.bashrc \u4e2d\uff0c\u4ee5\u540e\u5c31\u4e0d\u7528\u624b\u52a8\u6267\u884c\u8fd9\u6761\u547d\u4ee4\u4e86\u3002\uff08\u56e0\u4e3a\u6bcf\u4e2a\u7ec8\u7aef\u542f\u52a8\u65f6\u4f1a\u5148source ~/.bashrc\uff09\uff08\u5982\u679c\u4f60\u662f\u4f7f\u7528 fishros \u4e00\u952e\u5b89\u88c5\u7684 ROS\uff0c\u90a3\u4e48\u8fd9\u6761\u547d\u4ee4\u5df2\u7ecf\u5728\u4f60\u7684 bashrc \u4e2d\u4e86\uff09"}),"\n",(0,c.jsx)(e.h3,{id:"\u6784\u5efa\u5de5\u4f5c\u7a7a\u95f4",children:"\u6784\u5efa\u5de5\u4f5c\u7a7a\u95f4"}),"\n",(0,c.jsx)(e.p,{children:"\u4e5f\u5c31\u662f\u6211\u4eec\u4fd7\u79f0\u7684\u7f16\u8bd1\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"colcon build\r\n# or colcon build --symlink-install\n"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u8bf7\u52a1\u5fc5\u5728\u5de5\u4f5c\u7a7a\u95f4\u4e0b\u7f16\u8bd1\uff0c\u800c\u975e\u5176\u4ed6\u4efb\u4f55\u5730\u65b9\u3002"})}),"\n",(0,c.jsxs)(e.p,{children:["\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u5e94\u8be5\u4f1a\u770b\u5230 ",(0,c.jsx)(e.code,{children:"build"}),"\u3001",(0,c.jsx)(e.code,{children:"install"})," \u548c ",(0,c.jsx)(e.code,{children:"log"})," \u76ee\u5f55\u3002"]}),"\n",(0,c.jsx)(e.h3,{id:"source-\u73af\u5883",children:"source \u73af\u5883"}),"\n",(0,c.jsxs)(e.p,{children:["\u5f53 colcon \u6210\u529f\u5b8c\u6210\u6784\u5efa\u540e\uff0c\u8f93\u51fa\u5c06\u5728 ",(0,c.jsx)(e.code,{children:"install"})," \u76ee\u5f55\u4e2d\u3002\u5728\u4f7f\u7528\u4efb\u4f55\u5df2\u5b89\u88c5\u7684\u53ef\u6267\u884c\u6587\u4ef6\u6216\u5e93\u4e4b\u524d\uff0c\u9700\u8981\u5c06\u5b83\u4eec\u6dfb\u52a0\u5230\u8def\u5f84\u548c\u5e93\u8def\u5f84\u4e2d\u3002colcon \u5c06\u5728 ",(0,c.jsx)(e.code,{children:"install"})," \u76ee\u5f55\u4e2d\u751f\u6210 bash/bat \u6587\u4ef6\uff0c\u4ee5\u5e2e\u52a9\u8bbe\u7f6e\u73af\u5883\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:". install/setup.bash\r\n# or source install/setup.bash\n"})}),"\n",(0,c.jsx)(e.h3,{id:"colcon-build-\u7f16\u8bd1\u9009\u9879",children:"colcon build \u7f16\u8bd1\u9009\u9879"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"--symlink-install"})," \uff1a\u4f7f\u7528\u7b26\u53f7\u94fe\u63a5\u800c\u4e0d\u662f\u590d\u5236\u6587\u4ef6\uff0c\u8868\u73b0\u5728\u4e8e\u4fee\u6539launch\u6216yaml\u6587\u4ef6\u540e\u65e0\u9700\u91cd\u65b0\u7f16\u8bd1\u5373\u53ef\u8fd0\u884c\u6700\u65b0\u914d\u7f6e"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"--packages-select"})," \uff1a\u53ea\u7f16\u8bd1\u6307\u5b9a\u5305"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"--packages-ignore"})," \uff1a\u5ffd\u7565\u6307\u5b9a\u5305"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"--continue-on-error"})," \uff1a\u5728\u7f16\u8bd1\u51fa\u9519\u4e4b\u540e\u7ee7\u7eed\u7f16\u8bd1\u5176\u4ed6\u6a21\u5757"]}),"\n"]}),"\n",(0,c.jsx)("br",{}),"\n",(0,c.jsx)(e.hr,{}),"\n",(0,c.jsx)(e.h2,{id:"catkin-\u8fd9\u662f-ros-1-\u7684\u6784\u5efa\u5de5\u5177-\u4e0d\u7528\u5b66",children:"catkin \uff08\u8fd9\u662f ROS 1 \u7684\u6784\u5efa\u5de5\u5177 \u4e0d\u7528\u5b66\uff09"}),"\n",(0,c.jsx)(e.h3,{id:"1-catkin-\u7f16\u8bd1\u7cfb\u7edf",children:"1. catkin \u7f16\u8bd1\u7cfb\u7edf"}),"\n",(0,c.jsx)(e.p,{children:"\u5bf9\u4e8e\u6e90\u4ee3\u7801\u5305\uff0c\u7f16\u8bd1\u540e\u624d\u80fd\u5728\u7cfb\u7edf\u4e0a\u8fd0\u884c\u3002"}),"\n",(0,c.jsxs)(e.p,{children:["Linux \u4e0b\uff0c\u968f\u7740\u6e90\u6587\u4ef6\u7684\u589e\u591a\uff0c\u7528 ",(0,c.jsx)(e.strong,{children:"gcc/g++"})," \u547d\u4ee4\u7684\u65b9\u5f0f\u663e\u5f97\u6548\u7387\u4f4e\u4e0b\uff0c\u4eba\u4eec\u5f00\u59cb\u7528 ",(0,c.jsx)(e.strong,{children:"Makefile"})," \u6765\u7f16\u8bd1\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u7136\u800c\u968f\u7740\u5de5\u7a0b\u4f53\u91cf\u589e\u5927\uff0cMakefile \u4e5f\u4e0d\u80fd\u6ee1\u8db3\u9700\u6c42\uff0c\u4e8e\u662f\u4fbf\u51fa\u73b0\u4e86 ",(0,c.jsx)(e.strong,{children:"CMake"})," \u5de5\u5177\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"CMake \u662f\u5bf9 make \u5de5\u5177\u7684\u751f\u6210\u5668\uff0c\u662f\u66f4\u9ad8\u5c42\u7684\u5de5\u5177\uff0c\u5b83\u7b80\u5316\u4e86\u7f16\u8bd1\u6784\u5efa\u8fc7\u7a0b\uff0c\u80fd\u591f\u7ba1\u7406\u5927\u578b\u9879\u76ee\uff0c\u5177\u6709\u826f\u597d\u7684\u6269\u5c55\u6027\u3002"}),"\n",(0,c.jsxs)(e.p,{children:["ROS \u8fd9\u4e2a\u5927\u4f53\u91cf\u7684\u5e73\u53f0\uff0c\u91c7\u7528\u7684\u5c31\u662f CMake\uff0c\u5e76\u4e14 ROS \u5bf9 CMake \u8fdb\u884c\u4e86\u6269\u5c55\uff0c\u4e5f\u5c31\u6709\u4e86 ",(0,c.jsx)(e.strong,{children:"Catkin"})," \u7f16\u8bd1\u7cfb\u7edf\u3002"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/catkin01.png",alt:""})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/catkin02.png",alt:""})}),"\n",(0,c.jsx)(e.h3,{id:"catkin-\u5de5\u4f5c\u7a7a\u95f4",children:"catkin \u5de5\u4f5c\u7a7a\u95f4"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{src:"https://jlu-ai-lab.oss-cn-beijing.aliyuncs.com/blog/catkin03.png",alt:""})}),"\n",(0,c.jsx)(e.h3,{id:"catkin-\u7f16\u8bd1\u6d41\u7a0b",children:"catkin \u7f16\u8bd1\u6d41\u7a0b"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u5efa\u7acb\u5de5\u4f5c\u7a7a\u95f4"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"mkdir -p catkin_ws/src\r\ncd catkin_ws/src\r\ncatkin_init_workspace  # \u53ef\u4ee5\u8df3\u8fc7\u8fd9\u6b65\uff0c\u76f4\u63a5\u5728 catkin_ws/ \u4e0b catkin_make\r\ncd ..\r\ncatkin_make\n"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u7f16\u8bd1"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"cd catkin_ws\r\ncatkin_make\r\nsource ./devel/setup.bash  # \u7f16\u8bd1\u5b8c\u6210\u540e\u8981source\u5237\u65b0\u73af\u5883\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u82e5\u8981\u624b\u52a8\u6267\u884c catkin_make \u64cd\u4f5c\uff0c\u7b49\u6548\u547d\u4ee4\u4e3a\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"cd catkin_ws/src\r\ncatkin_init_workspace\r\ncd ..\r\nmkdir build\r\ncd build\r\ncmake ../src -DCMAKE_INSTALL_PREFIX=../install -DCATKIN_DEVEL_PREFIX=../devel\r\nmake\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u5982\u679c\u8981\u5728\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u7f16\u8bd1\u6307\u5b9a\u7684\u5305\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"catkin_make -DCATKIN_WHITELIST_PACKAGES=\u201cpackage1;package2\u201d\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u5982\u679c\u8981\u8fd8\u539f\u4e3a\u7f16\u8bd1\u6240\u6709\u5305\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"catkin_make -DCATKIN_WHITELIST_PACKAGES=\u201c\u201d\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u521b\u5efa\u529f\u80fd\u5305"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"cd catkin_ws/src\r\ncatkin_create_pkg <package> [depend1] [depend2] [depend3]\r\n# e.g. catkin_create_pkg test_pkg roscpp rospy std_msgs\n"})}),"\n",(0,c.jsx)(e.h3,{id:"catkin_make-\u547d\u4ee4\u53c2\u6570",children:"catkin_make \u547d\u4ee4\u53c2\u6570"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"catkin_make -h\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u81ea\u5df1\u770b\u53bb\u5427\u3002"}),"\n",(0,c.jsx)(e.h3,{id:"\u6700\u540e",children:"\u6700\u540e"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://blog.csdn.net/qq_23225073/article/details/102825545",children:"catkin_make, cmake, catkin build\u533a\u522b"})})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(t,{...n})}):t(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>a});var c=s(6540);const i={},l=c.createContext(i);function r(n){const e=c.useContext(l);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),c.createElement(l.Provider,{value:e},n.children)}}}]);