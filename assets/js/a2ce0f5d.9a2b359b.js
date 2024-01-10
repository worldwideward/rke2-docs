"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[8673],{9316:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=n(5893),i=n(1151);const a={title:"Windows Air-Gap Install"},t=void 0,l={id:"install/windows_airgap",title:"Windows Air-Gap Install",description:"Windows Support is currently Experimental as of v1.21.3+rke2r1",source:"@site/docs/install/windows_airgap.md",sourceDirName:"install",slug:"/install/windows_airgap",permalink:"/install/windows_airgap",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/windows_airgap.md",tags:[],version:"current",lastUpdatedAt:1704919231,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{title:"Windows Air-Gap Install"},sidebar:"mySidebar",previous:{title:"Air-Gap Install",permalink:"/install/airgap"},next:{title:"Managing Server Roles",permalink:"/install/server_roles"}},o={},d=[{value:"Prepare the Windows Agent Node",id:"prepare-the-windows-agent-node",level:4},{value:"Windows Tarball Method",id:"windows-tarball-method",level:2},{value:"Using tar.gz image tarballs",id:"using-targz-image-tarballs",level:4},{value:"Using tar.zst image tarballs",id:"using-tarzst-image-tarballs",level:4},{value:"Private Registry Method",id:"private-registry-method",level:2},{value:"Install Windows RKE2",id:"install-windows-rke2",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Windows Support is currently Experimental as of v1.21.3+rke2r1"}),"\n",(0,s.jsx)(r.strong,{children:"Windows Support requires choosing Calico as the CNI for the RKE2 cluster"})]}),"\n",(0,s.jsxs)(r.p,{children:["RKE2 Windows Agent (Worker) Nodes can be used in an air-gapped environment with two different methods. This requires first completing the RKE2 ",(0,s.jsx)(r.a,{href:"/install/airgap",children:"airgap setup"})]}),"\n",(0,s.jsxs)(r.p,{children:["You can either deploy using the ",(0,s.jsx)(r.code,{children:"rke2-windows-<BUILD_VERSION>-amd64-images.tar.gz"})," tarball release artifact, or by using a private registry. There are currently three tarball artifacts released for Windows in accordance with our validated ",(0,s.jsx)(r.a,{href:"/install/requirements#windows",children:"Windows versions"}),"."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"rke2-windows-1809-amd64-images.tar.gz"}),"\n",(0,s.jsx)(r.li,{children:"rke2-windows-2004-amd64-images.tar.gz"}),"\n",(0,s.jsx)(r.li,{children:"rke2-windows-20H2-amd64-images.tar.gz"}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["All files mentioned in the steps can be obtained from the assets of the desired released rke2 version ",(0,s.jsx)(r.a,{href:"https://github.com/rancher/rke2/releases",children:"here"}),"."]}),"\n",(0,s.jsx)(r.h4,{id:"prepare-the-windows-agent-node",children:"Prepare the Windows Agent Node"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Note"})," The Windows Server Containers feature needs to be enabled for the RKE2 agent to work."]}),"\n",(0,s.jsx)(r.p,{children:"Open a new Powershell window with Administrator privileges"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",children:'powershell -Command "Start-Process PowerShell -Verb RunAs"\n'})}),"\n",(0,s.jsx)(r.p,{children:"In the new Powershell window, run the following command."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",children:"Enable-WindowsOptionalFeature -Online -FeatureName containers \u2013All\n"})}),"\n",(0,s.jsxs)(r.p,{children:["This will require a reboot for the ",(0,s.jsx)(r.code,{children:"Containers"})," feature to properly function."]}),"\n",(0,s.jsx)(r.h2,{id:"windows-tarball-method",children:"Windows Tarball Method"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Download the Windows images tarballs and binary from the RKE2 release artifacts list for the version of RKE2 that you are using."}),"\n",(0,s.jsx)(r.h4,{id:"using-targz-image-tarballs",children:"Using tar.gz image tarballs"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.strong,{children:"Windows Server 2019 LTSC (amd64) (OS Build 17763.2061)"})}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",children:"$ProgressPreference = 'SilentlyContinue'\nInvoke-WebRequest https://github.com/rancher/rke2/releases/download/v1.26.10%2Brke2r2/rke2-windows-1809-amd64-images.tar.gz -OutFile /var/lib/rancher/rke2/agent/images/rke2-windows-1809-amd64-images.tar.gz \n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.strong,{children:"Windows Server SAC 2004 (amd64) (OS Build 19041.1110)"})}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",children:"$ProgressPreference = 'SilentlyContinue'  \nInvoke-WebRequest https://github.com/rancher/rke2/releases/download/v1.26.10%2Brke2r2/rke2-windows-2004-amd64-images.tar.gz -OutFile c:/var/lib/rancher/rke2/agent/images/rke2-windows-2004-amd64-images.tar.gz\n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.strong,{children:"Windows Server SAC 20H2 (amd64) (OS Build 19042.1110)"})}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",children:"$ProgressPreference = 'SilentlyContinue'  \nInvoke-WebRequest https://github.com/rancher/rke2/releases/download/v1.26.10%2Brke2r2/rke2-windows-20H2-amd64-images.tar.gz -OutFile c:/var/lib/rancher/rke2/agent/images/rke2-windows-20H2-amd64-images.tar.gz \n"})}),"\n",(0,s.jsx)(r.h4,{id:"using-tarzst-image-tarballs",children:"Using tar.zst image tarballs"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.strong,{children:"Windows Server 2019 LTSC (amd64) (OS Build 17763.2061)"})}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",children:"$ProgressPreference = 'SilentlyContinue'  \nInvoke-WebRequest https://github.com/rancher/rke2/releases/download/v1.26.10%2Brke2r2/rke2-windows-1809-amd64-images.tar.zst -OutFile /var/lib/rancher/rke2/agent/images/rke2-windows-1809-amd64-images.tar.zst \n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.strong,{children:"Windows Server SAC 2004 (amd64) (OS Build 19041.1110)"})}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",children:"$ProgressPreference = 'SilentlyContinue'  \nInvoke-WebRequest https://github.com/rancher/rke2/releases/download/v1.26.10%2Brke2r2/rke2-windows-2004-amd64-images.tar.zst -OutFile c:/var/lib/rancher/rke2/agent/images/rke2-windows-2004-amd64-images.tar.zst \n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.strong,{children:"Windows Server SAC 20H2 (amd64) (OS Build 19042.1110)"})}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",children:"$ProgressPreference = 'SilentlyContinue'\nInvoke-WebRequest hhttps://github.com/rancher/rke2/releases/download/v1.26.10%2Brke2r2/rke2-windows-20H2-amd64-images.tar.zst -OutFile c:/var/lib/rancher/rke2/agent/images/rke2-windows-20H2-amd64-images.tar.zst\n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Use ",(0,s.jsx)(r.code,{children:"rke2-windows-<BUILD_VERSION>-amd64.tar.gz"})," or ",(0,s.jsx)(r.code,{children:"rke2-windows-<BUILD_VERSION>-amd64.tar.zst"}),". Zstandard offers better compression ratios and faster decompression speeds compared to pigz."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Ensure that the ",(0,s.jsx)(r.code,{children:"/var/lib/rancher/rke2/agent/images/"})," directory exists on the node."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",children:"New-Item -Type Directory c:\\usr\\local\\bin -Force\nNew-Item -Type Directory c:\\var\\lib\\rancher\\rke2\\bin -Force\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Copy the compressed archive to ",(0,s.jsx)(r.code,{children:"/var/lib/rancher/rke2/agent/images/"})," on the node, ensuring that the file extension is retained."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"#install-windows-rke2",children:"Install RKE2"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"private-registry-method",children:"Private Registry Method"}),"\n",(0,s.jsxs)(r.p,{children:["As of RKE2 v1.20, private registry support honors all settings from the ",(0,s.jsx)(r.a,{href:"/install/containerd_registry_configuration",children:"containerd registry configuration"}),". This includes endpoint override and transport protocol (HTTP/HTTPS), authentication, certificate verification, etc."]}),"\n",(0,s.jsxs)(r.p,{children:["Prior to RKE2 v1.20, private registries must use TLS, with a cert trusted by the host CA bundle. If the registry is using a self-signed cert, you can add the cert to the host CA bundle with ",(0,s.jsx)(r.code,{children:"update-ca-certificates"}),". The registry must also allow anonymous (unauthenticated) access."]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["Add all the required system images to your private registry. A list of images can be obtained from the ",(0,s.jsx)(r.code,{children:".txt"})," file corresponding to each tarball referenced above, or you may ",(0,s.jsx)(r.code,{children:"docker load"})," the airgap image tarballs, then tag and push the loaded images."]}),"\n",(0,s.jsx)(r.li,{children:"If using a private or self-signed certificate on the registry, add the registry's CA cert to the containerd registry configuration, or operating system's trusted certs for releases prior to v1.20."}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"#install-windows-rke2",children:"Install RKE2"})," using the ",(0,s.jsx)(r.code,{children:"system-default-registry"})," parameter, or use the ",(0,s.jsx)(r.a,{href:"/install/containerd_registry_configuration",children:"containerd registry configuration"})," to use your registry as a mirror for docker.io."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"install-windows-rke2",children:"Install Windows RKE2"}),"\n",(0,s.jsxs)(r.p,{children:["These steps should only be performed after completing one of either the ",(0,s.jsx)(r.a,{href:"#windows-tarball-method",children:"Tarball Method"})," or ",(0,s.jsx)(r.a,{href:"#private-registry-method",children:"Private Registry Method"}),"."]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["Obtain the Windows RKE2 binary file ",(0,s.jsx)(r.code,{children:"rke2-windows-amd64.exe"}),". Ensure the binary is named ",(0,s.jsx)(r.code,{children:"rke2.exe"})," and place it in ",(0,s.jsx)(r.code,{children:"c:/usr/local/bin"}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",children:"Invoke-WebRequest https://github.com/rancher/rke2/releases/download/v1.26.10%2Brke2r2/rke2-windows-amd64.exe -OutFile c:/usr/local/bin/rke2.exe\n"})}),"\n",(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsx)(r.li,{children:"Configure the rke2-agent for Windows"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",children:'New-Item -Type Directory c:/etc/rancher/rke2 -Force\nSet-Content -Path c:/etc/rancher/rke2/config.yaml -Value @"\nserver: https://<server>:9345\ntoken: <token from server node>\n"@\n'})}),"\n",(0,s.jsxs)(r.p,{children:["To read more about the config.yaml file, see the ",(0,s.jsx)(r.a,{href:"/install/configuration#configuration-file",children:"Install Options documentation."})]}),"\n",(0,s.jsxs)(r.ol,{start:"3",children:["\n",(0,s.jsx)(r.li,{children:"Configure your PATH"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",children:'$env:PATH+=";c:\\var\\lib\\rancher\\rke2\\bin;c:\\usr\\local\\bin"\n\n[Environment]::SetEnvironmentVariable(\n    "Path",\n    [Environment]::GetEnvironmentVariable("Path", [EnvironmentVariableTarget]::Machine) + ";c:\\var\\lib\\rancher\\rke2\\bin;c:\\usr\\local\\bin",\n    [EnvironmentVariableTarget]::Machine)\n'})}),"\n",(0,s.jsxs)(r.ol,{start:"4",children:["\n",(0,s.jsxs)(r.li,{children:["Start the RKE2 Windows service by running the binary with the desired parameters. Please see the ",(0,s.jsx)(r.a,{href:"/reference/windows_agent_config",children:"Windows Agent Configuration reference"})," for additional parameters."]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",children:"c:\\usr\\local\\bin\\rke2.exe agent service --add\n"})}),"\n",(0,s.jsx)(r.p,{children:"For example, if using the Private Registry Method, your config file would have the following:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:'system-default-registry: "registry.example.com:5000"\n'})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Note:"})," The ",(0,s.jsx)(r.code,{children:"system-default-registry"})," parameter must specify only valid RFC 3986 URI authorities, i.e. a host and optional port."]}),"\n",(0,s.jsx)(r.p,{children:"If you would prefer to use CLI parameters only instead, run the binary with the desired parameters."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",children:"c:/usr/local/bin/rke2.exe agent --token <> --server <>\n"})})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>t});var s=n(7294);const i={},a=s.createContext(i);function t(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);