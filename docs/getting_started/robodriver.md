# 启动 RoboDriver

在确保您完成 `RoboDriver-Server` 的部署，并能够正常访问 `RoboXstudio` 平台后，接下来尝试启动 `RoboDriver` 。

截至本文档编写时，已完成`Gensis`仿真环境及多款机器人真机的基本适配。

本文档以 `RoboDriver/robodriver/simulations/robodriver-sim-genesis-franka-aio-dora` 为默认参考，未来适配的其他环境和机器人可基本参考该文档及其对应目录文档。

目前 `robodriver/simulations/` 和 `robodriver/robots/` 都适用本文档。

## 安装对应环境

确保进入RoboDriver目录，如果已经进入就跳过：

```
cd RoboDriver/
```

激活环境，默认使用 `uv`, `conda` 激活和后续安装也可参考。环境安装使用请参考 [概览/安装与部署](/docs/overview/installation)

```
source .venv/bin/activate
```

进入对应目录

```
cd robodriver/simulations/robodriver-sim-genesis-franka-aio-dora
```

安装 robodriver_sim_genesis_franka_aio_dora

```
uv pip install -e .
```

## 启动

启动命令如下，如果使用的是不同的环境或机器人，请修改`robot.type`

```bash title="uv"
uv run robodriver/scripts/run.py --robot.type=genesis_franka_aio_dora
```

```bash title="conda"
python3 robodriver/scripts/run.py --robot.type=genesis_franka_aio_dora
```
