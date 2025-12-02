# 接入机器人

## 机器人模块名称规范

`RoboDriver` 系统所有机器人模块的接入遵循 `RoboDriver模块接入命名规范: 机器人模块名称规范` 

机器人模块在`RoboDriver`中使用 `robodriver-robot-` 作为前缀。 

```txt
robodriver-robot-[模块名称]
```

其中机器人模块名称为：

```txt title="模块名称"
[厂商型号名称]-[操作类型]-[接入类型]
```

因此可以得到总名称：

```txt title="总名称"
robodriver-robot-[厂商型号名称]-[操作类型]-[接入类型]
```

:::info
模块名称的 [操作类型] 中有以下定义：
- `aio` ：全称 `All In One` ，适用于主从一体式机器人，一般适用于机器自带遥操作系统的情况（该情况为大多数情况）。
- `follower` ：适用于主从分体式机器人，主臂和从臂间无遥操作系统。作为从臂（执行器）接入本系统，其接收角度action，并根据其来运动。其功能还包括通过传感器获取到的环境中以视觉为主的数据，名为observation。
- `eepose` ： 使用通用遥操作的机器人，其接收末端位姿action，并根据其来运动。其功能还包括通过传感器获取到的环境中以视觉为主的数据，名为observation。
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


`RoboDriver` 系统提供了多个机器人模块的参考实现。统一通过 **SO-101 机械臂**、**(TODO: 仿真机器人)** 来构建，可以参考这些来实现新的机器人模块的接入。

**aio机器人**

- `so101-aio-py`: coming soon
- `so101-aio-dora`: [robodriver-robot-so101-aio-dora](https://github.com/BAAI-EI-DATA/robodriver-robot-so101-aio-dora.git)
- `so101-aio-ros2`: coming soon
- `realman1-aio-dora`: [robodriver-robot-realman1-aio-dora](https://github.com/BAAI-EI-DATA/robodriver-robot-realman1-aio-dora.git)


**follower机器人**

- `so101-follower-py`: coming soon
- `so101-follower-dora` : [robodriver-robot-so101-follower-dora](https://github.com/BAAI-EI-DATA/robodriver-robot-so101-follower-dora)
- `so101-follower-ros2`: coming soon
