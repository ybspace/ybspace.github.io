---
sidebar_position: 3
---

###### 下载


###### 插件

- Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code
- Live Server
- 



###### 快捷键

打开Markdown预览 ：`ctrl`+`K`+`v`
`ctrl`+`p`



### 如何将vscode打开方式添加到右键菜单
- 新建一个*.reg文件，可以先txt编辑好再修改文件后缀，双击运行即可
注意：需要换成你电脑vsCode安装的路径
```
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\*\shell\VSCode]
@="Open with VSCode"
"Icon"="D:\\DevelopmentFilessoftware\\vscode\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\*\shell\VSCode\command]
@="\"D:\\DevelopmentFiles\\Microsoft VS Code\\Code.exe\" \"%1\""
    
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\shell\VSCode]
@="Open with VSCode"
"Icon"="D:\\DevelopmentFiles\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\Directory\shell\VSCode\command]
@="\"D:\\DevelopmentFiles\\Microsoft VS Code\\Code.exe\" \"%V\""

Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode]
@="Open with VSCode"
"Icon"="D:\\DevelopmentFiles\\Microsoft VS Code\\Code.exe"

[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode\command]
@="\"D:\\DevelopmentFiles\\Microsoft VS Code\\Code.exe\" \"%V\""
```