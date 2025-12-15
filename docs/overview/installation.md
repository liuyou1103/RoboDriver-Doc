# 安装与部署

首先将`RoboDriver`项目代码clone下来，然后进入项目目录:

```bash
git clone https://github.com/FlagOpen/RoboDriver.git && cd RoboDriver
```

推荐使用`uv`或`miniconda`来管理python环境

:::info
如果接入的机器人需要使用ros或ros2，请优先考虑miniconda，或使用系统自带环境，使用系统环境的命令参考miniconda
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="uv" default>

    安装`uv`：

    ```bash
    pip install uv
    ```

    创建一个虚拟环境并激活：

    ```bash
    uv venv .venv
    source .venv/bin/activate
    ```

  </TabItem>
  <TabItem value="miniconda">
    
    安装`miniconda`：
    [Installing Miniconda](https://www.anaconda.com/docs/getting-started/miniconda/install)

    创建一个虚拟环境并激活：

    ```bash
    conda create -n robodriver python==3.10
    conda activate robodriver
    ```

  </TabItem>
</Tabs>



## 安装命令

<Tabs>
  <TabItem value="uv" default>

    ```bash
    uv pip install -e .
    ```

    或

    ```bash
    uv sync
    ```

  </TabItem>
  <TabItem value="miniconda">

    确保已正确激活环境
    
    ```bash
    pip install -e .
    ```

  </TabItem>
</Tabs>

:::info
如果 `uv` 安装遇到了下载卡顿的情况，请考虑更换源。在 `~/.bashrc` 中添加: 

```
export UV_INDEX_URL=https://mirrors.aliyun.com/pypi/simple
```

然后执行：

```
source ~/.bashrc
```

:::

## 补充安装

### opencv-python

由于依赖的`LeRobot`会自动安装`opencv-python-headless`，本系统默认使用了opencv可视化查看图片，因此需要手动替换opencv为非headless版本。

<Tabs>
  <TabItem value="uv" default>

    卸载`opencv-python-headless`

    ```bash
    uv pip uninstall -y opencv-python-headless
    ```

    安装`opencv-python`

    ```bash
     uv pip install opencv-python
    ```

  </TabItem>
  <TabItem value="miniconda">

    确保已正确激活环境
    
    卸载`opencv-python-headless`

    ```bash
    pip uninstall -y opencv-python-headless
    ```

    安装`opencv-python`

    ```bash
    pip install opencv-python
    ```

  </TabItem>
</Tabs>

### cuda

如果您需要在仿真中用到gpu加速，请检查您系统内的cuda是否正常安装,本文档默认支持cuda：

```
nvcc -V
```