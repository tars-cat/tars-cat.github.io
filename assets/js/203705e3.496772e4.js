"use strict";(self.webpackChunkai_docs=self.webpackChunkai_docs||[]).push([[2382],{4355:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>a,toc:()=>t});var i=r(4848),s=r(8453);const l={sidebar_position:2,title:"CMake"},c=void 0,a={id:"tutorial-basics/cmake/cmake",title:"CMake",description:"1. \u524d\u8a00",source:"@site/docs/tutorial-basics/cmake/cmake.md",sourceDirName:"tutorial-basics/cmake",slug:"/tutorial-basics/cmake/",permalink:"/docs/tutorial-basics/cmake/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"CMake"},sidebar:"docSidebar",previous:{title:"\u7f16\u8bd1\u3001\u94fe\u63a5\u3001\u9759\u6001\u5e93\u3001\u52a8\u6001\u5e93",permalink:"/docs/tutorial-basics/cmake/gcc_g++"},next:{title:"\u4e00\u952e\u5b89\u88c5",permalink:"/docs/tutorial-basics/ros/fishros"}},d={},t=[{value:"1. \u524d\u8a00",id:"1-\u524d\u8a00",level:2},{value:"2. Makefile",id:"2-makefile",level:2},{value:"3. Cmake",id:"3-cmake",level:2},{value:"3-1. Linux",id:"3-1-linux",level:3},{value:"3-2. \u7b2c\u4e00\u4e2a CMake \u9879\u76ee",id:"3-2-\u7b2c\u4e00\u4e2a-cmake-\u9879\u76ee",level:3},{value:"3-3. \u591a\u6587\u4ef6",id:"3-3-\u591a\u6587\u4ef6",level:3},{value:"3-4. \u9759\u6001\u5e93\u548c\u52a8\u6001\u5e93",id:"3-4-\u9759\u6001\u5e93\u548c\u52a8\u6001\u5e93",level:3},{value:"3-5. \u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93",id:"3-5-\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93",level:3},{value:"4. \u6700\u540e",id:"4-\u6700\u540e",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"1-\u524d\u8a00",children:"1. \u524d\u8a00"}),"\n",(0,i.jsx)(n.p,{children:"\u60f3\u8c61\u4e00\u4e0b\u6211\u4eec\u6709\u5982\u4e0b C++ \u7a0b\u5e8f hello.cpp \uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\r\nint main() {\r\n    std::cout << "hello world!" << std::endl;\r\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u9700\u8981\u5728\u7ec8\u7aef\u8f93\u5165\u4ee5\u4e0b\u6307\u4ee4\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"g++ hello.cpp -o hello\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u65f6\u6211\u4eec\u5c31\u53ef\u4ee5\u751f\u6210\u53ef\u6267\u884c\u6587\u4ef6 hello \u3002\u4f46\u5728\u5b9e\u9645\u5e94\u7528\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u9762\u4e34\u5982\u4e0b\u95ee\u9898\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u9879\u76ee\u4e2d\u7684 .h \u6587\u4ef6\u548c .cpp \u6587\u4ef6\u5341\u5206\u7e41\u591a\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5404 .h \u6587\u4ef6 .cpp \u6587\u4ef6\u7684\u4f9d\u8d56\u5173\u7cfb\u5341\u5206\u590d\u6742\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u591a\u6587\u4ef6\u53ef\u80fd\u4f1a\u51fa\u73b0\u91cd\u590d\u7f16\u8bd1\u7684\u60c5\u51b5\uff0c\u62d6\u6162\u7f16\u8bd1\u901f\u5ea6\u3002"}),"\n",(0,i.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\uff0c Makefile \u548c CMake \u5e94\u8fd0\u800c\u751f\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"2-makefile",children:"2. Makefile"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 Linux(Ubuntu) \u5e73\u53f0\u4e0a\uff0c make \u5de5\u5177\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5b89\u88c5\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install make\n"})}),"\n",(0,i.jsx)(n.p,{children:"makefile \u6587\u4ef6\u63cf\u8ff0\u4e86 C/C++ \u5de5\u7a0b\u7684\u7f16\u8bd1\u89c4\u5219\uff0c\u53ef\u4ee5\u7528\u6765\u6307\u660e\u6e90\u6587\u4ef6\u7684\u7f16\u8bd1\u987a\u5e8f\u3001\u4f9d\u8d56\u5173\u7cfb\u3001\u662f\u5426\u9700\u8981\u91cd\u65b0\u7f16\u8bd1\u7b49\uff0c\u81ea\u52a8\u5316\u7f16\u8bd1 C/C++ \u9879\u76ee\uff08\u5b9e\u9645\u4e0a\u4e5f\u4e0d\u6b62\u5c40\u9650\u4e8e C/C++ \u9879\u76ee\uff09\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u8003\u8651\u4ee5\u4e0b\u5b9e\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:".\r\n\u251c\u2500\u2500 test.cpp\r\n\u251c\u2500\u2500 test.h\r\n\u251c\u2500\u2500 main.cpp\r\n\u2514\u2500\u2500 makefile\n"})}),"\n",(0,i.jsx)(n.p,{children:"makefile\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-makefile",children:"CXXFLAGS = -std=c++17 -O2\r\n\r\nmain: main.o test.o\r\n    $(CXX) $(CXXFLAGS) -o $@ $^\r\n\r\nmain.o: main.cpp test.h\r\n    $(CXX) $(CXXFLAGS) -o $@ -c $<\r\n\r\ntest.o: test.cpp test.h\r\n    $(CXX) $(CXXFLAGS) -o $@ -c $<\r\n\r\n.PHONY: clean\r\nclean:\r\n    rm main.o test.o main\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6b64\u5904\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u7406\u89e3\u6bcf\u4e00\u6bb5\u4ee3\u7801\u7684\u5177\u4f53\u542b\u4e49 \u2014\u2014 \u7531\u4e8e makefile \u6587\u4ef6\u7684\u53ef\u8bfb\u6027\u8f83\u5dee\uff0c\u5728\u65e5\u540e\u7684\u5f00\u53d1\u5de5\u4f5c\u4e2d\uff0c\u6211\u4eec\u5e76\u4e0d\u9700\u8981\u76f4\u63a5\u7f16\u5199 makefile\uff08\u4e4b\u540e\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 CMake \u5de5\u5177\u751f\u6210 makefile \uff09\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u76ee\u524d\u4ecd\u7136\u6709\u8bb8\u591a\u5f00\u6e90\u9879\u76ee\u4f7f\u7528 makefile \u6784\u5efa\u7a0b\u5e8f\uff0c\u56e0\u6b64\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 makefile \u4ecd\u7136\u662f\u5341\u5206\u6709\u5fc5\u8981\u7684\u3002\u5927\u90e8\u5206\u5f00\u6e90\u9879\u76ee\u4e2d\u7684 makefile \u652f\u6301\u4ee5\u4e0b\u6307\u4ee4\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5728 makefile \u7684\u540c\u76ee\u5f55\u4e0b\u8f93\u5165 ",(0,i.jsx)(n.code,{children:"make"})," \uff0c\u5c31\u53ef\u4ee5\u6309\u7167 makefile \u6240\u6307\u5b9a\u7684\u7f16\u8bd1\u89c4\u5219\u81ea\u52a8\u7f16\u8bd1\u6574\u4e2a\u5de5\u7a0b\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728 makefile \u7684\u540c\u76ee\u5f55\u4e0b\u8f93\u5165 ",(0,i.jsx)(n.code,{children:"make clean"})," \uff0c\u53ef\u4ee5\u5220\u9664\u7f16\u8bd1\u751f\u6210\u7684\u4e2d\u95f4\u6587\u4ef6\uff08\u5982 .o \u6587\u4ef6\u7b49\uff09\u548c\u53ef\u6267\u884c\u6587\u4ef6\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728 makefile \u7684\u540c\u76ee\u5f55\u4e0b\u8f93\u5165 ",(0,i.jsx)(n.code,{children:"make install"})," \uff08\u4e00\u822c\u9700\u8981 root \u6743\u9650\uff09\uff0c\u53ef\u4ee5\u5b89\u88c5\u7f16\u8bd1\u597d\u7684\u53ef\u6267\u884c\u6587\u4ef6\uff08\u9ed8\u8ba4\u8def\u5f84\u4e3a /usr/local/bin \uff0c\u5b89\u88c5\u597d\u540e\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u4e2d\u76f4\u63a5\u8c03\u7528\uff09\u3001\u5e93\uff08\u9ed8\u8ba4\u8def\u5f84\u4e3a /usr/local/lib \uff0c\u5b89\u88c5\u597d\u540e\u53ef\u4ee5\u76f4\u63a5\u94fe\u63a5\uff09\u3001\u5934\u6587\u4ef6\uff08\u9ed8\u8ba4\u8def\u5f84\u4e3a /usr/local/include \uff0c\u5b89\u88c5\u597d\u540e\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"#include <xxx.h>"})," \u5f15\u7528\uff09\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"3-cmake",children:"3. Cmake"}),"\n",(0,i.jsx)(n.p,{children:"makefile \u5b58\u5728\u4ee5\u4e0b\u95ee\u9898\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4ee3\u7801\u53ef\u8bfb\u6027\u6781\u5dee\uff0c\u96be\u4ee5\u7ef4\u62a4\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u8bed\u6cd5\u590d\u6742\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u8de8\u5e73\u53f0\u6027\u5dee\u3002\u6bd4\u5982 Linux \u5e73\u53f0\u4e0b\u7684 makefile \u5728 Windows \u4e0b\u53ef\u80fd\u65e0\u6cd5\u5de5\u4f5c\uff0c\u56e0\u4e3a Linux \u7684\u5220\u9664\u6307\u4ee4\u662f rm \uff0cWindows \u4e0b\u7684\u5220\u9664\u6307\u4ee4\u662f del \u3002"}),"\n",(0,i.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u5728\u76ee\u524d\u7684 C++ \u5de5\u7a0b\u4e2d\uff0c\u6211\u4eec\u591a\u4f7f\u7528 CMake \u6765\u7ba1\u7406\u9879\u76ee\u3002CMake \u662f\u4e00\u79cd\u8de8\u5e73\u53f0\u7684\u7f16\u8bd1\u5de5\u5177\uff0c\u53ef\u4ee5\u7528\u8f83\u4e3a\u7b80\u6d01\u6613\u8bfb\u7684\u8bed\u6cd5\u63cf\u8ff0 C++ \u9879\u76ee\u7684\u7f16\u8bd1\u3001\u94fe\u63a5\u3001\u5b89\u88c5\u8fc7\u7a0b\u7b49\uff0c\u5728\u73b0\u4ee3 C++ \u9879\u76ee\u4e0a\u5f97\u5230\u4e86\u5e7f\u6cdb\u5e94\u7528\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"3-1-linux",children:"3-1. Linux"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 Linux(Ubuntu) \u5e73\u53f0\u4e0a\uff0c cmake \u5de5\u5177\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5b89\u88c5\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install cmake\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728 Linux \u5e73\u53f0\u4e0a\uff0ccmake \u5de5\u5177\u7684\u4f7f\u7528\u4e00\u822c\u5206\u4e3a\u4e24\u6b65"}),"\n",(0,i.jsx)(n.p,{children:"1\uff09\u4f7f\u7528 CMakeLists.txt \u751f\u6210 makefile \u3002"}),"\n",(0,i.jsx)(n.p,{children:"2\uff09\u4f7f\u7528 makefile \u81ea\u52a8\u5316\u7f16\u8bd1\u9879\u76ee\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"3-2-\u7b2c\u4e00\u4e2a-cmake-\u9879\u76ee",children:"3-2. \u7b2c\u4e00\u4e2a CMake \u9879\u76ee"}),"\n",(0,i.jsxs)(n.p,{children:["CMake \u7684\u9879\u76ee\u6587\u4ef6\u53eb\u505a ",(0,i.jsx)(n.code,{children:"CMakeLists.txt"})," \u3002\u5176\u653e\u7f6e\u4f4d\u7f6e\u5982\u4e0b\u56fe\u6240\u793a\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u251c\u2500\u2500 CMakeLists.txt\r\n\u2514\u2500\u2500 main.cpp\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u9879\u76ee\u7684 ",(0,i.jsx)(n.code,{children:"CMakeLists.txt"})," \u4e2d\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cmake",children:"cmake_minimum_required(VERSION 3.5)\r\nproject(hello_world)\r\nadd_executable(hello_world main.cpp)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u8bed\u6cd5\u603b\u7ed31\uff1a"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cmake_minimum_required(VERSION 3.5)"})," CMake \u9700\u8981\u7684\u6700\u5c0f\u7248\u672c\u3002CMake \u7684\u7248\u672c\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u4e2d\u8f93\u5165 ",(0,i.jsx)(n.code,{children:"cmake --version"})," \u83b7\u53d6\uff0c\u4e00\u822c\u65e0\u5f3a\u5236\u8981\u6c42\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"project(<project_name>)"})," \u6307\u5b9a\u5de5\u7a0b\u540d\u79f0\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"add_executable(<executable_name> <cppfile_name>)"})," \u751f\u6210\u53ef\u6267\u884c\u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u64cd\u4f5c\u65b9\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8f93\u5165 ",(0,i.jsx)(n.code,{children:"cmake CMakeLists.txt"})," \uff0c\u76ee\u5f55\u4e0b\u5c06\u4f1a\u751f\u6210\u4e00\u4e2a Makefile \u6587\u4ef6\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u8f93\u5165 ",(0,i.jsx)(n.code,{children:"make"})," \uff0c\u5373\u53ef\u5c06\u6e90\u4ee3\u7801\u7f16\u8bd1\u751f\u6210\u53ef\u6267\u884c\u6587\u4ef6\u3002\u6b64\u5904\u5c06\u4f1a\u5728\u4e0e CMakeLists.txt \u76f8\u540c\u76ee\u5f55\u7684\u4f4d\u7f6e\u751f\u6210\u4e00\u4e2a\u53ef\u6267\u884c\u6587\u4ef6 hello_word \uff0c\u8f93\u5165 ",(0,i.jsx)(n.code,{children:"./hello_word"})," \u5373\u53ef\u8fd0\u884c\u8be5\u53ef\u6267\u884c\u6587\u4ef6\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6b64\u5916\uff0c\u8f93\u5165 ",(0,i.jsx)(n.code,{children:"make help"})," \uff0c\u4f60\u4e5f\u53ef\u4ee5\u67e5\u770b\u4f7f\u7528\u5f53\u524d\u7684 Makefile \u6240\u80fd\u6267\u884c\u7684\u6240\u6709\u6307\u4ee4\uff0c\u4f8b\u5982 ",(0,i.jsx)(n.code,{children:"make clean"})," \uff08\u6e05\u695a\u751f\u6210\u7684\u53ef\u6267\u884c\u6587\u4ef6\u548c\u4e2d\u95f4\u6587\u4ef6\uff09\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3-3-\u591a\u6587\u4ef6",children:"3-3. \u591a\u6587\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5e73\u65f6\u7684\u8bfe\u7a0b\u5b9e\u9a8c\u4e2d\uff0c\u4f60\u53ef\u80fd\u4e60\u60ef\u5c06\u6240\u6709\u7684\u4ee3\u7801\u90fd\u5199\u5728\u4e00\u4e2a .cpp \u6587\u4ef6\u4e2d\u3002\u4f46\u5728\u5b9e\u9645\u5de5\u7a0b\u4e2d\uff0c\u4e3a\u4e86\u65b9\u4fbf\u4ee3\u7801\u590d\u7528\u548c\u8fd0\u884c\u7ef4\u62a4\uff0c\u901a\u5e38\u5c06\u6240\u6709\u7684\u6587\u4ef6\u5212\u5206\u4e3a\u5934\u6587\u4ef6( .h )\uff0c\u6a21\u5757\u6587\u4ef6( .cpp )\u548c\u4e3b\u7a0b\u5e8f\u6587\u4ef6( .cpp )\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u5728\u5934\u6587\u4ef6\u4e2d\u58f0\u660e\u4e00\u4e2a\u8ba1\u7b97\u5e73\u65b9\u6839\u7684\u51fd\u6570\uff0c\u5728\u6a21\u5757\u6587\u4ef6\u4e2d\u5b9e\u73b0\u5176\u4e3b\u4f53\uff0c\u7136\u540e\u5728\u4e3b\u51fd\u6570\u4e2d\u8c03\u7528\u5b83\u3002\u9879\u76ee\u7ed3\u6784\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:".\r\n\u251c\u2500\u2500 CMakeLists.txt\r\n\u251c\u2500\u2500 include\r\n\u2502   \u2514\u2500\u2500 sqrt.h\r\n\u2514\u2500\u2500 src\r\n    \u251c\u2500\u2500 sqrt.cpp\r\n    \u2514\u2500\u2500 main.cpp\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Tips: \u5728 C++ \u5de5\u7a0b\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u5728 include/ \u76ee\u5f55\u4e0b\u653e\u7f6e\u5934\u6587\u4ef6\uff0c\u5728 src/ \u76ee\u5f55\u4e0b\u653e\u7f6e\u6e90\u6587\u4ef6\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u9879\u76ee\u7684 CMakeLists.txt \u4e2d\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cmake",children:'# build part\r\ncmake_minimum_required(VERSION 3.5)\r\nproject(sqrt)\r\nset(SOURCES src/sqrt.cpp src/sqrt.cpp)\r\nadd_executable(sqrt ${SOURCES})\r\ntarget_include_directories(sqrt PUBLIC ${PROJECT_SOURCE_DIR}/include)\r\n# debug part\r\nmessage("CMAKE_SOURCE_DIR: ${CMAKE_SOURCE_DIR}")\r\nmessage("PROJECT_SOURCE_DIR: ${PROJECT_SOURCE_DIR}")\r\nmessage("SOURCES: ${SOURCES}")\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u8bed\u6cd5\u603b\u7ed32\uff1a"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"set(<variable> <value>)"})," \u8bbe\u7f6e\u53d8\u91cf\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"target_include_directories(<project_name> <INTERFACE|PUBLIC|PRIVATE> <headfile_directory>)"})," \u6307\u5b9a\u6240\u8981\u5305\u542b\u7684\u5934\u6587\u4ef6\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'message("your message")'})," \u5728\u7ec8\u7aef\u6253\u5370\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u9700\u8981\u7279\u522b\u8bf4\u660e\u4e00\u4e0b CMake \u4e2d\u7684\u53d8\u91cf\u4f7f\u7528\u3002CMake \u4e2d\u7684\u53d8\u91cf\u5206\u4e3a\u4e24\u79cd\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u663e\u5f0f\u53d8\u91cf\uff1a\u4f7f\u7528 set \u6307\u4ee4\u5b9a\u4e49\u7684\u53d8\u91cf\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u9690\u5f0f\u53d8\u91cf\uff1a\u901a\u8fc7\u5176\u5b83\u6307\u4ee4\u9690\u5f0f\u751f\u6210\u7684\u53d8\u91cf\u3002\u5982\u8be5\u9879\u76ee\u4e2d\u4f1a\u9690\u5f0f\u751f\u6210 PROJECT_SOURCE_DIR \u53d8\u91cf\uff0c\u9ed8\u8ba4\u4e3a CMakeLists.txt \u6240\u5728\u7684\u6587\u4ef6\u5939\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"CMake \u4e2d\u6709\u4e30\u5bcc\u7684\u53d8\u91cf\uff0c\u7528\u4e8e\u5b9a\u4e49\u5de5\u7a0b\u76ee\u5f55\u3001\u7f16\u8bd1\u9009\u9879\u7b49\uff0c\u6b64\u5904\u4e0d\u505a\u8fc7\u591a\u5c55\u5f00\u3002\u60f3\u8981\u4e86\u89e3\u66f4\u591a\uff0c\u53ef\u4ee5\u53c2\u8003\u6587\u672b\u5217\u51fa\u7684\u53c2\u8003\u6587\u6863\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"3-4-\u9759\u6001\u5e93\u548c\u52a8\u6001\u5e93",children:"3-4. \u9759\u6001\u5e93\u548c\u52a8\u6001\u5e93"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u9759\u6001\u5e93"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u6b64\u5904\uff0c\u6211\u4eec\u5c06\u4e0a\u4e00\u5c0f\u8282\u4e2d\u8ba1\u7b97\u5e73\u65b9\u6839\u7684\u7a0b\u5e8f\u5c01\u88c5\u4e3a\u9759\u6001\u5e93\u3002\u9879\u76ee\u7ed3\u6784\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:".\r\n\u251c\u2500\u2500 CMakeLists.txt\r\n\u251c\u2500\u2500 include\r\n\u2502   \u2514\u2500\u2500 sqrt.h\r\n\u2514\u2500\u2500 src\r\n    \u251c\u2500\u2500 sqrt.cpp\r\n    \u2514\u2500\u2500 main.cpp\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u9879\u76ee\u7684 CMakeLists.txt \u4e2d\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cmake",children:"cmake_minimum_required(VERSION 3.5)\r\nproject(sqrt)\r\n# create static library\r\nadd_library(sqrt_static STATIC src/sqrt.cpp)\r\ntarget_include_directories(sqrt_static PUBLIC ${PROJECT_SOURCE_DIR}/include)\r\n# create executable\r\nadd_executable(sqrt src/main.cpp)\r\ntarget_link_libraries(sqrt PRIVATE sqrt_static)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u8bed\u6cd5\u603b\u7ed33\uff1a"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"add_library(<library_name> STATIC <cppfile_name>)"})," \u751f\u6210\u9759\u6001\u5e93\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"target_link_libraries(<executable> <INTERFACE|PUBLIC|PRIVATE> <library_name>)"})," \u6307\u5b9a\u6240\u8981\u94fe\u63a5\u7684\u5e93\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u6b64\u5904\u6211\u4eec\u4f7f\u7528\u4e00\u79cd\u66f4\u4e3a\u4f18\u96c5\u7684\u751f\u6210\u65b9\u5f0f\u2014\u2014\u6211\u4eec\u671f\u671b\u5c06\u751f\u6210\u7684\u9759\u6001\u5e93\u3001\u53ef\u6267\u884c\u6587\u4ef6\u8f93\u51fa\u5230 build \u6587\u4ef6\u5939\u91cc\uff0c\u800c\u4e0d\u662f\u548c\u4e3b\u9879\u76ee\u6df7\u6742\u5728\u4e00\u8d77\u3002\u4e3a\u6b64\u6211\u4eec\u9700\u8981\u8f93\u5165\u4ee5\u4e0b\u6307\u4ee4\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir build\r\ncd build\r\ncmake .. # \u4f7f\u7528\u7684\u662f\u4e0a\u4e00\u5c42\u76ee\u5f55\u7684 CMakeLists.txt\uff0c\u56e0\u6b64\u9700\u8981\u8f93\u5165'..'\r\nmake\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u5c06\u4f1a\u5728 build/ \u76ee\u5f55\u4e0b\u770b\u5230\u9759\u6001\u5e93 libsqrt_static.a \u548c\u53ef\u6267\u884c\u6587\u4ef6 sqrt \u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u52a8\u6001\u5e93"})}),"\n",(0,i.jsx)(n.p,{children:"\u9879\u76ee\u76ee\u5f55\u7ed3\u6784\u540c\u9759\u6001\u5e93\u4e00\u8282\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u9879\u76ee\u7684 CMakeLists.txt \u4e2d\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cmake",children:"cmake_minimum_required(VERSION 3.5)\r\nproject(sqrt)\r\n# create shared library\r\nadd_library(sqrt_shared SHARED src/sqrt.cpp)\r\ntarget_include_directories(sqrt_shared PUBLIC ${PROJECT_SOURCE_DIR}/include)\r\n# create executable\r\nadd_executable(sqrt src/main.cpp)\r\ntarget_link_libraries(sqrt PRIVATE sqrt_shared)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u8bed\u6cd5\u603b\u7ed34\uff1a"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"add_library(<library_name> SHARED <cppfile_name>)"})," \u751f\u6210\u52a8\u6001\u5e93\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u540c\u6837\u6309\u7167\u4e0a\u5c0f\u8282\u7684\u65b9\u6cd5\u751f\u6210\u9879\u76ee\u3002\u6211\u4eec\u5c06\u4f1a\u5728 build/ \u76ee\u5f55\u4e0b\u770b\u5230\u52a8\u6001\u5e93 libsqrt_shared.so \u548c\u53ef\u6267\u884c\u6587\u4ef6 sqrt \u3002"}),"\n",(0,i.jsx)(n.h3,{id:"3-5-\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93",children:"3-5. \u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5b9e\u9645\u7684 C++ \u5de5\u7a0b\u4e2d\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u94fe\u63a5\u4e00\u4e9b\u5f00\u6e90\u7684\u7b2c\u4e09\u65b9\u5e93\u3002CMake \u4e5f\u63d0\u4f9b\u4e86\u76f8\u5173\u7684\u914d\u7f6e\u65b9\u5f0f\u3002\u6211\u4eec\u4ee5\u8c37\u6b4c\u5f00\u53d1\u7684\u5355\u5143\u6d4b\u8bd5\u6846\u67b6googletest \u4e3a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.p,{children:"googletest \u7684\u5b89\u88c5\u65b9\u6cd5\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/google/googletest.git\r\n# or git clone git@github.com:google/googletest.git\r\ncd googletest\r\nmkdir build\r\ncd build\r\ncmake ..\r\nmake\r\nsudo make install\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u9879\u76ee\u7ed3\u6784\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'.\r\n\u251c\u2500\u2500 CMakeLists.txt\r\n\u251c\u2500\u2500 include\r\n\u2502   \u2514\u2500\u2500 mysqrt.h\r\n\u2514\u2500\u2500 src\r\n    \u251c\u2500\u2500 mysqrt.cpp\r\n    \u2514\u2500\u2500 main.cpp\r\n\r\ncmake_minimum_required(VERSION 2.6)\r\nproject(cmake_with_gtest)\r\nset(SOURCES src/mysqrt.cpp src/main.cpp)\r\nfind_package(GTest)\r\nmessage("GTEST_LIBRARIES: ${GTEST_LIBRARIES}")\r\nmessage("GTEST_INCLUDE_DIRS: ${GTEST_INCLUDE_DIRS}")\r\ninclude_directories(${GTEST_INCLUDE_DIRS} ${PROJECT_SOURCE_DIR}/include)\r\nadd_executable(cmake_with_gtest ${SOURCES})\r\ntarget_link_libraries(cmake_with_gtest ${GTEST_LIBRARIES} pthread)\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u8bed\u6cd5\u603b\u7ed35\uff1a"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"find_package(<package_name>)"})," \u67e5\u8be2\u7b2c\u4e09\u65b9\u5e93\u7684\u4f4d\u7f6e\u3002\u82e5\u67e5\u627e\u6210\u529f\uff0c\u5219\u521d\u59cb\u5316\u53d8\u91cf ",(0,i.jsx)(n.code,{children:"<package_name>_INCLUDE_DIR"})," \uff08\u7b2c\u4e09\u65b9\u5e93\u7684\u5934\u6587\u4ef6\u76ee\u5f55\uff09\u4ee5\u53ca",(0,i.jsx)(n.code,{children:"<package_name>_LIBRARIES"})," \uff08\u7b2c\u4e09\u65b9\u5e93\u9759\u6001/\u52a8\u6001\u5e93\u76ee\u5f55\uff09\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["CMake \u652f\u6301\u7684\u6240\u6709\u7b2c\u4e09\u65b9\u5e93\u53ef\u4ee5\u5728 ",(0,i.jsx)(n.a,{href:"https://cmake.org/cmake/help/latest/manual/cmake-modules.7.html",children:"https://cmake.org/cmake/help/latest/manual/cmake-modules.7.html"})," \u4e2d\u627e\u5230\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"CMake \u8fd8\u6709\u5f88\u591a\u5f3a\u5927\u7684\u529f\u80fd\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u8bbe\u7f6e C++ \u5de5\u7a0b\u7684\u8bed\u8a00\u6807\u51c6\u3001\u7f16\u8bd1\u4f18\u5316\u9009\u9879\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5c42\u7ea7\u6587\u4ef6\u4e4b\u95f4 CMakeLists.txt \u7684\u76f8\u4e92\u8c03\u7528\uff0c\u4ee5\u4fbf\u5e94\u7528\u4e8e\u76ee\u5f55\u5c42\u7ea7\u66f4\u52a0\u590d\u6742\u7684 C++ \u5de5\u7a0b\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5bf9\u751f\u6210\u7684\u5e93\u3001\u53ef\u6267\u884c\u6587\u4ef6\u7b49\u8fdb\u884c\u5b89\u88c5\u3002"}),"\n",(0,i.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4-\u6700\u540e",children:"4. \u6700\u540e"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://cmake.org/cmake/help/latest/guide/tutorial/index.html",children:"Official CMake Tutorial"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/ttroy50/cmake-examples",children:"cmake-examples"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://sfumecjf.github.io/cmake-examples-Chinese/",children:"cmake-examples-Chinese"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://seisman.github.io/how-to-write-makefile/introduction.html",children:"\u8ddf\u6211\u4e00\u8d77\u5199Makefile"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.zhihu.com/question/461953861/answer/1914452432",children:"\u4e3a\u4ec0\u4e48\u7f16\u8bd1c/c++\u8981\u7528makefile\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u7528shell\u5462\uff1f"})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>a});var i=r(6540);const s={},l=i.createContext(s);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);