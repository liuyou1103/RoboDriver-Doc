# 启动 RoboDriver 仿真

硬件和环境的问题是各种各样的，为了您能够快速的了解并开始使用我们的 `RoboDriver` 框架和 `RoboXstudio` 平台。我们推荐您首先启用RoboDriver仿真。 

截至本文档编写时，已完成`Gensis`仿真环境的基本适配。本文档以 `RoboDriver/robodriver/simulations/robodriver-sim-genesis-franka-aio-dora` 为默认仿真环境，未来适配的其他环境可基本参考该文档及其对应目录文档。

## 安装对应环境

新建一个终端，且暂时不激活环境，进入到 `dora-sim-genesis-franka-grasp-cube` 目录。

```
cd RoboDriver
cd robodriver/simulations/robodriver-sim-genesis-franka-aio-dora/dora/nodes/dora-sim-genesis-franka-grasp-cube
```

创建一个新的 `uv` 环境，也可使用 `conda`。

```
uv venv
```

安装

```
uv pip install -e .
```

:::info

如果您没有安装cuda，只考虑使用cpu进行仿真。请修改`dora-sim-genesis-franka-grasp-cube/main.py` 第118行：

```
    gs.init(backend=gs.gpu, logging_level="warn")
```

更改为：

```
    gs.init(backend=gs.cpu, logging_level="warn")
```

再执行安装。

:::

## 启动仿真

仿真部分位于 `Dora环境` 中，启动仿真的终端和后面使用 `RoboDriver` 的终端使用不同环境。

```
cd RoboDriver/robodriver/simulations/robodriver-sim-genesis-franka-aio-dora/dora/
```

```
source nodes/dora-sim-genesis-franka-grasp-cube/.venv/bin/activate
```

启动 `dora`

```
dora up
```

启动数据流，首次启动仿真会比较耗时。

```
dora start dataflow.yml
```

若正常启动，您将看到：

![sim](/img/robodriver-sim.png)

您可以用按键控制仿真中的机器人，也可以使用鼠标拖动仿真窗口调整观察角度，使用鼠标中键拖动调整观察中心位置。

```
====================================================
机械臂键盘控制说明
====================================================
    位置控制:
      方向键↑/↓ - 前/后移动 (X轴)
      方向键←/→ - 左/右移动 (Y轴)
      +/= 键   - 向上移动 (Z轴)
      - 键     - 向下移动 (Z轴)
    
    姿态控制 (欧拉角):
      6/4 键 - 增加/减少绕X轴旋转 (Roll)
      8/2 键 - 增加/减少绕Y轴旋转 (Pitch)
      7/9 键 - 增加/减少绕Z轴旋转 (Yaw)
      空格键  - 重置姿态为初始值
    
    夹爪控制:
      B 键 - 夹紧 (切换)
      N 键 - 松开 (切换)
      当前状态: 松开
    
    其他控制:
      退格键 - 重置机械臂位置和姿态，同时重置方块位置
      P 键  - 打印当前位置和姿态
      V 键  - 切换速度模式 (标准/高速)
      当前速度模式: 标准
      ESC键 - 退出程序
====================================================
```

完成此步后即可往后部署 `RoboDriver-Server`