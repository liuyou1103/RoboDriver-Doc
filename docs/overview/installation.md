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
    uv venv --seed -p 3.10
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

## 推荐可选安装

### dora

如果您需要用到 `RoboDriver` 中涉及 `Dora` 的组件、机器人、遥操器，请提前在系统环境中安装 `dora-rs-cli`

创建新的终端，退出已经激活的环境。

<Tabs>
  <TabItem value="uv" default>

    ```bash
    deactivate
    ```

  </TabItem>
  <TabItem value="miniconda">
    
    ```bash
    conda deactivate
    ```

  </TabItem>
</Tabs>

`Dora` 提供了多种安装方法，根据情况选其一即可：

<Tabs>
  <TabItem value="pip" default>

    ```bash
    pip install dora-rs-cli
    ```

  </TabItem>
  <TabItem value="Linux">

    ```bash
    curl --proto '=https' --tlsv1.2 -LsSf https://github.com/dora-rs/dora/releases/latest/download/dora-cli-installer.sh | sh
    ```

  </TabItem>
  <TabItem value="MacOS">

    ```bash
    curl --proto '=https' --tlsv1.2 -LsSf https://github.com/dora-rs/dora/releases/latest/download/dora-cli-installer.sh | sh
    ```

  </TabItem>
  <TabItem value="Windows">

    ```bash
    powershell -ExecutionPolicy ByPass -c "irm https://github.com/dora-rs/dora/releases/latest/download/dora-cli-installer.ps1 | iex"
    ```

  </TabItem>
  <TabItem value="Cargo">

    ```bash
    cargo install dora-cli # In case of issues, try: `--locked`
    ```

  </TabItem>
  <TabItem value="Source">

  https://github.com/dora-rs/dora

  </TabItem>


</Tabs>

### cuda

如果您需要在仿真中用到gpu加速，请检查您系统内的cuda是否正常安装,本文档默认支持cuda：

```
nvcc -V
```

## 其他可选安装

### opencv-python

:::info
已经更改为默认不启用opencv可视化，可以跳过这个补充安装
:::

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
