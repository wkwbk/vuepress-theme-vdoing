(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{452:function(e,a,s){"use strict";s.r(a);var t=s(7),r=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("网站想要升级到 HTTPS，首先得申请下发个安全证书，现在下发证书很简单，方式也很多，很多域名提供商都提供免费证书申请。但是，很多证书都是有时间限制（3个月或者1年），时间到期就需要手动重新，手续麻烦而且还会忘记续期，如果想一劳永逸可以用工具自动生成证书并且自动续租。续租工具和方式也很多，本文将讲解用 ACME 实现证书申请和证书自动续期。")]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"安装-acme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-acme"}},[e._v("#")]),e._v(" 安装 ACME")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" socat\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v("  https://get.acme.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("安装程序会自动做以下操作：")]),e._v(" "),a("ul",[a("li",[e._v("自动把 acme.sh 安装到你的 "),a("strong",[e._v("home")]),e._v(" 的"),a("code",[e._v(".acme.sh")]),e._v("目录下，即"),a("code",[e._v("~/.acme.sh/")])]),e._v(" "),a("li",[e._v("自动创建一个 bash 的 alias，方便你的使用: "),a("code",[e._v("alias acme.sh=~/.acme.sh/acme.sh")])]),e._v(" "),a("li",[e._v("自动为你创建 cronjob，每天 0:00 点自动检测所有的证书，如果快过期了，需要更新，则会自动更新证书。")])]),e._v(" "),a("h2",{attrs:{id:"更改默认证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改默认证书"}},[e._v("#")]),e._v(" 更改默认证书")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("acme.sh --set-default-ca "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--server")]),e._v(" letsencrypt\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("acme 被 ZeroSSL 收购，其默认的证书方式为 ZeroSSL，但此证书生成时会携带邮箱，因此更换为 letsencrypt。")]),e._v(" "),a("p",[e._v("当然，也可以在生成证书时加一个"),a("code",[e._v("--server")]),e._v("参数来决定生成什么证书")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--server")]),e._v(" letsencrypt\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"生成证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成证书"}},[e._v("#")]),e._v(" 生成证书")]),e._v(" "),a("p",[e._v("使用"),a("code",[e._v("acme.sh --issue")]),e._v("命令生成证书，但生成证书的同时会进行域名的所有权的验证。 "),a("strong",[e._v("acme.sh")]),e._v(" 有两种方式验证：HTTP 和 DNS 验证。")]),e._v(" "),a("blockquote",[a("p",[e._v("注意：如果需要生成泛域名（"),a("code",[e._v("*.example.com")]),e._v("）的证书，不能使用 HTTP 认证域名，需要改用 DNS 认证的方式。")])]),e._v(" "),a("h3",{attrs:{id:"http-验证方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-验证方式"}},[e._v("#")]),e._v(" HTTP 验证方式")]),e._v(" "),a("p",[e._v("HTTP 方式需要通过")]),e._v(" "),a("ul",[a("li",[e._v("配置网站根目录，命令参数为（"),a("code",[e._v("--webroot /home/wwwroot/example.com/")]),e._v("）")]),e._v(" "),a("li",[e._v("或关联服务器的 "),a("strong",[e._v("nginx")]),e._v(" 服务，命令参数为（"),a("code",[e._v("--nginx")]),e._v("）")]),e._v(" "),a("li",[e._v("或关联服务器的 "),a("strong",[e._v("apache")]),e._v(" 服务，命令参数为（"),a("code",[e._v("--apache")]),e._v("）")]),e._v(" "),a("li",[e._v("或自建虚拟 webserver（服务器没有占用 80 端口），命令参数为（"),a("code",[e._v("--standalone")]),e._v("）")])]),e._v(" "),a("p",[e._v("来验证你的域名所有权来完成验证。")]),e._v(" "),a("p",[e._v("本服务器已搭建 nginx 服务，因此关联即可")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("acme.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--issue")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" example.com "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" *.example.com "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--nginx")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("参数解析：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--issue")]),e._v("请求证书的签发参数")]),e._v(" "),a("li",[a("code",[e._v("-d")]),e._v("定义需要生成证书的域名，如有多个域名需使用多次")])]),e._v(" "),a("p",[e._v("如果觉得麻烦可以使用第一种配置网站根目录。或者停止占用 80 端口的服务，然后通过添加"),a("code",[e._v("--standalone")]),e._v("参数，等生成证书后再启动原来的服务。如果服务器已有 80 端口的服务，不建议使用自建虚拟 webserver，此方式续租时略麻烦需要改造。")]),e._v(" "),a("h3",{attrs:{id:"dns-验证方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-验证方式"}},[e._v("#")]),e._v(" DNS 验证方式")]),e._v(" "),a("p",[e._v("需要在域名上添加一条 txt 解析记录，验证域名所有权")]),e._v(" "),a("blockquote",[a("p",[e._v("DNS 方式的真正强大之处在于可以使用域名解析商提供的 API 自动添加 txt 记录完成验证.")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("在域名提供商中，生成你的 API 令牌")])]),e._v(" "),a("li",[a("p",[e._v("引入 API key，以 Cloudflare 为例")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CF_Key")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1234567890"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("CF_Email")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"123@gmail.com"')]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("生成证书")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 申请 ECC 证书")]),e._v("\nacme.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--issue")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--dns")]),e._v(" dns_cf "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" example.com "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" *.example.com\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 申请 RSA 证书")]),e._v("\nacme.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--issue")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--dns")]),e._v(" dns_cf "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" example.com "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" *.example.com "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-k")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2048")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[a("code",[e._v("--dns")]),e._v("的配置值也是根据域名提供商来决定，dns_cf 表示 cloudflare。")]),e._v(" "),a("p",[e._v("不同提供商，API 参数值各不同，可参考下面的表格")])])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("服务商名称")]),e._v(" "),a("th",[e._v("服务商简称")]),e._v(" "),a("th",[e._v("所需API参数")]),e._v(" "),a("th",[e._v("获取API参数地址")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("cloudxns")]),e._v(" "),a("td",[e._v("cx")]),e._v(" "),a("td",[a("code",[e._v('export CX_Key="123456"')]),e._v(" "),a("br"),e._v(" "),a("code",[e._v('export CX_Secret="abcdef"')])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://www.cloudxns.net/AccountManage/apimanage.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击访问"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("dnspod.cn")]),e._v(" "),a("td",[e._v("dp")]),e._v(" "),a("td",[a("code",[e._v('export DP_Id="123456"')]),e._v(" "),a("br"),e._v(" "),a("code",[e._v('export DP_Key="abcdef"')])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://www.dnspod.cn/console/user/security",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击访问"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("aliyun")]),e._v(" "),a("td",[e._v("ali")]),e._v(" "),a("td",[a("code",[e._v('export Ali_Key="123456"')]),e._v(" "),a("br"),e._v(" "),a("code",[e._v('export Ali_Secret="abcdef"')])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://ak-console.aliyun.com/#/accesskey",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击访问"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("cloudflare")]),e._v(" "),a("td",[e._v("cf")]),e._v(" "),a("td",[a("code",[e._v('export CF_Key="123456"')]),e._v(" "),a("br"),e._v(" "),a("code",[e._v('export CF_Email="abc@example.com"')])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://dash.cloudflare.com/profile/api-tokens",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击访问"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("linode")]),e._v(" "),a("td",[e._v("linode")]),e._v(" "),a("td",[a("code",[e._v('export LINODE_API_KEY="123456"')])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://manager.linode.com/profile/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击访问"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("he")]),e._v(" "),a("td",[e._v("he")]),e._v(" "),a("td",[a("code",[e._v('export HE_Username="username"')]),e._v(" "),a("br"),e._v(" "),a("code",[e._v('export HE_Password="password"')])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://dns.he.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("he"),a("OutboundLink")],1),e._v(" 的用户名密码")])]),e._v(" "),a("tr",[a("td",[e._v("digitalocean")]),e._v(" "),a("td",[e._v("dgon")]),e._v(" "),a("td",[a("code",[e._v('export DO_API_KEY="123456"')])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://cloud.digitalocean.com/settings/applications",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击访问"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("namesilo")]),e._v(" "),a("td",[e._v("namesilo")]),e._v(" "),a("td",[a("code",[e._v('export Namesilo_Key="123456"')])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://www.namesilo.com/account/api-manager",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击访问"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("aws")]),e._v(" "),a("td",[e._v("aws")]),e._v(" "),a("td",[a("code",[e._v("export AWS_ACCESS_KEY_ID=123456")]),e._v(" "),a("br"),e._v(" "),a("code",[e._v("export AWS_SECRET_ACCESS_KEY=abcdef")])]),e._v(" "),a("td",[a("a",{attrs:{href:"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击访问"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("namecom")]),e._v(" "),a("td",[e._v("namecom")]),e._v(" "),a("td",[a("code",[e._v('export Namecom_Username="username"')]),e._v(" "),a("br"),e._v(" "),a("code",[e._v('export Namecom_Token="123456"')])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://www.name.com/reseller/apply",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击访问"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("freedns")]),e._v(" "),a("td",[e._v("freedns")]),e._v(" "),a("td",[a("code",[e._v('export FREEDNS_User="username"')]),e._v(" "),a("br"),e._v(" "),a("code",[e._v('export FREEDNS_Password="password"')])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://freedns.afraid.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("freedns"),a("OutboundLink")],1),e._v(" 的用户名密码")])]),e._v(" "),a("tr",[a("td",[e._v("godaddy")]),e._v(" "),a("td",[e._v("gd")]),e._v(" "),a("td",[a("code",[e._v('export GD_Key="123456"')]),e._v(" "),a("br"),e._v(" "),a("code",[e._v('export GD_Secret="abcdef"')])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://developer.godaddy.com/keys/",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击访问"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("yandex")]),e._v(" "),a("td",[e._v("yandex")]),e._v(" "),a("td",[a("code",[e._v('export PDD_Token="abcdef"')])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://tech.yandex.com/domain/doc/concepts/access-docpage/",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击访问"),a("OutboundLink")],1)])])])]),e._v(" "),a("h2",{attrs:{id:"安装证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装证书"}},[e._v("#")]),e._v(" 安装证书")]),e._v(" "),a("p",[e._v("默认生成的证书都放在安装目录下: "),a("code",[e._v("~/.acme.sh/")]),e._v("，但是不要在 web 服务器中直接引用目录下的证书文件，也不要手动来拷贝证书文件到具体的 web 服务器中，手动拷贝会导致之后更新证书流程不能完全自动。")]),e._v(" "),a("p",[e._v("正确方式是使用 acme.sh 的安装证书命令，acme.sh 自动拷贝证书文件到具体目录中，拷贝命令会被记录下来，之后自动更新证书流程也会执行此拷贝步骤，从而实现更新证书流程的完全自动化。")]),e._v(" "),a("p",[e._v("格式例子如下：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("acme.sh --install-cert "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" example.com "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" *.example.com "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --key-file        /etc/nginx/cert_file/key.pem  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --fullchain-file  /etc/nginx/cert_file/fullchain.pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--reloadcmd")]),e._v("       "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"service nginx force-reload"')]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("根据 web 服务器需要的文件按需引入对应的参数，reloadcmd 定义证书更新后重启对应的 web 服务命令。")]),e._v(" "),a("h2",{attrs:{id:"更新证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新证书"}},[e._v("#")]),e._v(" 更新证书")]),e._v(" "),a("p",[e._v("目前证书在 60 天以后会自动更新，你无需任何操作，因为在 acme.sh 安装时，已经把相关的自动更新程序写入到 crontab 中，如果想要查看，可以通过以下命令：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("crontab")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-l")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("输出内容包含一个自动更新程序，大致内容如下：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("56")]),e._v(" * * * * "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/root/.acme.sh"')]),e._v("/acme.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--cron")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--home")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/root/.acme.sh"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /dev/null\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"查看证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看证书"}},[e._v("#")]),e._v(" 查看证书")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("acme.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--list")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"吊销证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#吊销证书"}},[e._v("#")]),e._v(" 吊销证书")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("acme.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--remove")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" example.com *.example.com \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("或者手动在"),a("code",[e._v("~/.acme.sh/")]),e._v("目录下删除对应的域名目录，如"),a("code",[e._v("~/.acme.sh/example.com")]),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"升级-acme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级-acme"}},[e._v("#")]),e._v(" 升级 ACME")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("acme.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--upgrade")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);