# 启动 RoboDriver 仿真

硬件和环境的问题是各种各样的，为了您能够快速的了解并开始使用我们的 `RoboDriver` 框架和 `RoboXstudio` 平台。我们推荐您首先启用RoboDriver仿真。 

截至本文档编写时，已完成`Gensis`仿真环境的基本适配。本文档以 `RoboDriver/robodriver/simulations/robodriver-sim-genesis-franka-aio-dora` 为默认仿真环境，未来适配的其他环境可基本参考该文档及其对应目录文档。

## 安装对应环境

:::info
在开始前，请确保您已经完成 [概览/安装与部署](/docs/overview/installation) 中的步骤。
:::


新建一个终端，且暂时不激活任何环境。

确保进入RoboDriver目录，如果已经进入就跳过：

```
cd RoboDriver/
```

进入到 `dora-sim-genesis-franka-grasp-cube` 目录。

```
cd robodriver/simulations/robodriver-sim-genesis-franka-aio-dora/dora/nodes/dora-sim-genesis-franka-grasp-cube
```

创建一个新的 `uv` 环境，也可使用 `conda`。

```bash
uv venv
```

:::info
这里创建的环境与 [概览/安装与部署](/docs/overview/installation) 中创建的RoboDriver环境并不是同一个
:::


安装依赖

```bash
uv pip install -e .
```

:::info

如果您的设备不支持cuda，或没有安装cuda，安装会遇到报错信息，其中会包含 “depends on 'torch' (v2.x.x) which depends on 'nvidia-x-x'” 或类似信息。

如果您考虑使用cuda进行仿真，请使用支持cuda的设备，并正确安装显卡驱动和cuda后，再重新安装上文依赖。

如果您只考虑使用cpu进行仿真，请修改`dora-sim-genesis-franka-grasp-cube/main.py` 第118行：

```python
    gs.init(backend=gs.gpu, logging_level="warn")
```

更改为：

```python
    gs.init(backend=gs.cpu, logging_level="warn")
```

再执行安装 `cpu` 版本 `torch`，根据情况选择源：

```bash title="使用国内源"
uv pip install torch torchvision --find-links https://mirrors.aliyun.com/pytorch-wheels/cpu
```

```bash title="使用官方源"
uv pip install torch torchvision --index-url https://download.pytorch.org/whl/cpu
```

再重新执行上文安装依赖命令。

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