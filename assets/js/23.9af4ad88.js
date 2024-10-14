(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{439:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://github.com/wsldl-pg/CentWSL",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/wsldl-pg/CentWSL"),a("OutboundLink")],1),a("br"),s._v(" "),a("a",{attrs:{href:"https://github.com/mishamosher/CentOS-WSL",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/mishamosher/CentOS-WSL"),a("OutboundLink")],1),a("br"),s._v(" "),a("a",{attrs:{href:"https://github.com/yosukes-dev/RHWSL",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/yosukes-dev/RHWSL"),a("OutboundLink")],1)]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"先决条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#先决条件"}},[s._v("#")]),s._v(" 先决条件")]),s._v(" "),a("p",[s._v("必须运行 Windows 10 版本 2004 及更高版本（内部版本 19041 及更高版本）或 Windows 11，检查 Windows 版本及内部版本号：按 Windows 徽标键 + R，然后键入“winver”，选择“确定”")]),s._v(" "),a("p",[s._v("需要在BIOS中开启虚拟化技术，检查是否启用虚拟化：同时按住 CTRL、Shift 和 ESC 键打开任务管理器，选择“性能”>“CPU”")]),s._v(" "),a("p",[s._v("启用 Windows 子系统：“控制面板”>“程序和功能”>“启用或关闭 Windows 功能”>勾选“适用于 Linux 的 Windows 子系统”")]),s._v(" "),a("h2",{attrs:{id:"wsl-的基本命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wsl-的基本命令"}},[s._v("#")]),s._v(" WSL 的基本命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 WSL 命令")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--install")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新 WSL")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--update")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查正在运行的 WSL 版本")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查 WSL 状态")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--status")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--shutdown")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"设置wsl的默认版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置wsl的默认版本"}},[s._v("#")]),s._v(" 设置WSL的默认版本")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("wsl --set-default-version "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 若要将默认版本设置为 WSL 1 或 WSL 2，将 <Version> 替换为 1 或 2。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如 wsl --set-default-version 2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"设置默认-linux-发行版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置默认-linux-发行版"}},[s._v("#")]),s._v(" 设置默认 Linux 发行版")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("wsl --set-default "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("DistributionName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 <DistributionName> 替换为要使用的 Linux 发行版的名称。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如 wsl --set-default CentOS8")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"要设置与-wsl-命令一起使用的默认-linux-发行版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#要设置与-wsl-命令一起使用的默认-linux-发行版"}},[s._v("#")]),s._v(" 要设置与 wsl 命令一起使用的默认 Linux 发行版")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("wsl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--setdefault")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("DistributionName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 <DistributionName> 替换为要使用的 Linux 发行版的名称。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"将-wsl-版本设置为-1-或-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将-wsl-版本设置为-1-或-2"}},[s._v("#")]),s._v(" 将 WSL 版本设置为 1 或 2")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("wsl --set-version "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("DistributionName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 若要指定运行 Linux 发行版的 WSL 版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 <DistributionName> 替换为 Linux 发行版的名称，并将 <Version> 替换为 1 或 2。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如 wsl --set-version CentOS8 2 会将 CentOS8 发行版设置为使用 WSL 2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"更改发行版的默认用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改发行版的默认用户"}},[s._v("#")]),s._v(" 更改发行版的默认用户")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("DistributionName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" config --default-user "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更改用于发行版登录的默认用户。 用户必须已经存在于发行版中才能成为默认用户。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如 CentOS8 config --default-user root 会将 CentOS8 发行版的默认用户更改为“root”用户。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"其他命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他命令"}},[s._v("#")]),s._v(" 其他命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭子系统")]),s._v("\nnet stop LxssManager\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 终止子系统")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--terminate")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("DistributionName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注销或卸载子系统")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--unregister")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("DistributionName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导出系统镜像")]),s._v("\nwsl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("DistributionName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("镜像存放路径"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 <DistributionName> 替换为要使用的 Linux 发行版的名称。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"由于是最小安装-一些常用的命令没有-无法使用-可以使用-yum-命令进行安装-以方便使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#由于是最小安装-一些常用的命令没有-无法使用-可以使用-yum-命令进行安装-以方便使用"}},[s._v("#")]),s._v(" 由于是最小安装，一些常用的命令没有，无法使用，可以使用 yum 命令进行安装，以方便使用")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" update "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#更新系统中已有的软件包")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc gcc-c++ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装gcc、gcc+、wget等")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssh-clients openssh-server "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装ssh相关")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装vim编辑器")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装压缩解压缩工具")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" net-tools "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装网络工具")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ncurses "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#字符终端处理库")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"解决-centos8-yum-官方源下线后无法使用问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决-centos8-yum-官方源下线后无法使用问题"}},[s._v("#")]),s._v(" 解决 Centos8 yum 官方源下线后无法使用问题")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入配置文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /etc/yum.repos.d/ /etc/yum.repos.d_bak "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /etc/yum.repos.d/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-O")]),s._v(" /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果你没有安装wget，也可以用下面命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行 dnf makecache 生成缓存")]),s._v("\ndnf makecache\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);