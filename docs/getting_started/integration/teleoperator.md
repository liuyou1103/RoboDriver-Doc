# 接入遥操器

## 遥操器模块名称规范

`RoboDriver` 系统所有遥操器模块的接入遵循 `RoboDriver模块接入命名规范: 遥操器模块名称规范` 

遥操器模块在`RoboDriver`中使用 `robodriver-teleoperator-` 作为前缀。 

```txt
robodriver-teleoperator-[模块名称]
```

其中机器人模块名称为：

```txt title="模块名称"
[厂商型号名称]-[操作类型]-[接入类型]
```

因此可以得到总名称：

```txt title="总名称"
robodriver-teleoperator-[厂商型号名称]-[操作类型]-[接入类型]
```

:::info
模块名称的 [操作类型] 中有以下定义：
- `leader`：作为同构主从机器人系统中的主臂（遥操器）接入系统，从其读取出遥操作产生的角度action，用于控制从臂。
- `eepose` ：通过多种方式得到末端位姿action。
- et al
:::

:::info
模块名称的 [接入类型] 中有以下定义：
- `py`：通过机器人自身的python sdk获取数据及实现控制。
- `ros1`：通过 `ROS1` 节点获取数据及实现控制。
- `ros2`：通过 `ROS2` 节点获取数据及实现控制。
- `dora`：通过 `DORA` 节点获取数据及实现控制。
- et al
:::


## 参考实现


`RoboDriver` 系统提供了多个遥操器模块的参考实现，可以参考这些来实现新的遥操器模块的接入。

- `so101-leader-py`: coming soon
- `so101-leader-dora` : [robodriver-teleoperator-so101-leader-dora](https://github.com/FlagOpen/RoboDriver/tree/main/robodriver/teleoperators/robodriver-teleoperator-so101-leader-dora)
- `so101-leader-ros2`: coming soon

- `keyboard-eepose-py`: coming soon
- `spacemouse-eepose-py`: coming soon
- `vr-eepose-py`: coming soon
- `umi-eepose-py`: coming soon
