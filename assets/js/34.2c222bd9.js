(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{450:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("之前通过 "),a("strong",[s._v("F12")]),s._v(" 的方法，有幸喜提乌龟壳小鸡两只，在这里记录一下新开系统的一些设置")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"更新系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新系统"}},[s._v("#")]),s._v(" 更新系统")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" upgrade "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"改为root密码登陆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#改为root密码登陆"}},[s._v("#")]),s._v(" 改为root密码登陆")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" root:密码 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("chpasswd root\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/^#\\?PermitRootLogin.*/PermitRootLogin yes/g'")]),s._v(" /etc/ssh/sshd_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/^#\\?PasswordAuthentication.*/PasswordAuthentication yes/g'")]),s._v(" /etc/ssh/sshd_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nsystemctl restart sshd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"开启bbr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启bbr"}},[s._v("#")]),s._v(" 开启BBR")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改系统变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"net.core.default_qdisc=fq"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/sysctl.conf\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"net.ipv4.tcp_congestion_control=bbr"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/sysctl.conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#保存生效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sysctl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看内核是否已开启BBR")]),s._v("\nlsmod "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" bbr\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#显示如下，即成功")]),s._v("\ntcp_bbr                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20480")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"放行全部端口-重启失效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#放行全部端口-重启失效"}},[s._v("#")]),s._v(" 放行全部端口（重启失效）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("iptables "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" INPUT ACCEPT\niptables "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" FORWARD ACCEPT\niptables "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" OUTPUT ACCEPT\niptables "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-F")]),s._v("\niptables-save\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"持续化规则-重启不失效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持续化规则-重启不失效"}},[s._v("#")]),s._v(" 持续化规则（重启不失效）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装iptables-persistent")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" iptables-persistent\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#永久保存规则")]),s._v("\nnetfilter-persistent save\nnetfilter-persistent reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("对于关闭防火墙更暴力点的方法，可以选择如下两种")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /etc/iptables "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n\n或\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /etc/iptables/rules.v4\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /etc/iptables/rules.v6\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("同时你也需要进入后台配置一下入站规则，我是开放的所有协议")]),s._v(" "),a("h2",{attrs:{id:"dd-重装系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dd-重装系统"}},[s._v("#")]),s._v(" DD 重装系统")]),s._v(" "),a("h3",{attrs:{id:"下方演示为-debian-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下方演示为-debian-10"}},[s._v("#")]),s._v(" 下方演示为 Debian 10")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" --no-check-certificate -qO- "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://moeclub.org/attachment/LinuxShell/InstallNET.sh'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-firmware")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将<password>替换成自定义的密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将<port>替换成自定义的端口号，-port 参数去掉则默认为 22 端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -d 表示 Debian 系统，可换成 -u 表示 Ubuntu 系统")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 10 表示系统版本号，Debian可换成 [7, 8, 9, 10, 11]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Ubuntu 可换成 [14.04, 16.04, 18.04, 20.04]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"dd-后添加-ipv6-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dd-后添加-ipv6-方法"}},[s._v("#")]),s._v(" DD 后添加 ipv6 方法")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#找到/etc/network/interfaces")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在这个文件最下面添加一行")]),s._v("\niface "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("设备名"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" inet6 dhcp\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将<设备名>替换成对应的设备名称，设备名可以在 allow-hotplug 那里找到")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);