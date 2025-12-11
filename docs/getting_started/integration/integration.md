# 模块接入

## 模块接入命名规范
`RoboDriver` 系统所有模块的接入遵循 `RoboDriver模块接入命名规范` ：

```
robodriver-[RoboDriver模块种类名]-[模块名称]
```

:::info
模块名称由于模块种类不同，有着不同的命名规范，但都是在符合该规范的情况下，在后拼接。
:::

完成需要接入的模块的代码编写后，可以把其安装在 `robodriver` 或 `lerobot` 环境内。运行时系统能自动识别导入。

现支持识别的模块种类名前缀：

- `robodriver-robot-`
- `robodriver-teleoperator-`
- `lerobot-robot-`
- `lerobot-teleoperator-`

暂未支持识别的模块种类名前缀：

- `robodriver-cameara-`
- `robodriver-policy-`
- `lerobot-cameara-`
- `lerobot-policy-`

## LeRobot 兼容

`RoboDriver` 在模块接入方面，直接兼容 `LeRobot` 的对应模块接口，是从其对应的接口类直接继承的。

开发者仅需要根据 [参考实现](#参考实现) 完成模块对于 `LeRobot` 的适配，即可兼容 `RoboDriver` ， 但是`RoboDriver` 特有的功能接口需要再单独实现，否则将使用默认实现。

同样的，如果完全实现按照 `RoboDriver` 规范完成了接入，也可将其接入在 `LeRobot` 中使用。详细见[兼容 LeRobot 框架](../lerobot.md)

## 参考实现

`RoboDriver` 在每一种模块种类都会提供接入的样例作为参考（见下文），并提供尽可能详细的接入实现文档。

同时 `LeRobot` 也提供了一个详细的接入文档，参考该文档可完成 `LeRobot` 的接入。
