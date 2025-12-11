# Installation & Deployment

Clone `RoboDriver` and enter the project directory:

```bash
git clone https://github.com/FlagOpen/RoboDriver.git && cd RoboDriver
```

We recommend using `uv` or `miniconda` to manage your Python environment.

:::info
If your robot integration needs ROS/ROS2, prefer Miniconda or the system Python. You can follow the same commands below for the system environment as Miniconda.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="uv" default>

    Install `uv`:

    ```bash
    pip install uv
    ```

    Create and activate a virtual environment:

    ```bash
    uv venv .venv
    source .venv/bin/activate
    ```

  </TabItem>
  <TabItem value="miniconda">
    
    Install `miniconda`:
    [Installing Miniconda](https://www.anaconda.com/docs/getting-started/miniconda/install)

    Create and activate a virtual environment:

    ```bash
    conda create -n robodriver python==3.10
    conda activate robodriver
    ```

  </TabItem>
</Tabs>



## Install packages

<Tabs>
  <TabItem value="uv" default>

    ```bash
    uv pip install -e .
    ```

    Or:

    ```bash
    uv sync
    ```

  </TabItem>
  <TabItem value="miniconda">

    Ensure the environment is activated:
    
    ```bash
    pip install -e .
    ```

  </TabItem>
</Tabs>

Extra dependency step:  
`LeRobot` installs `opencv-python-headless` by default. RoboDriver uses OpenCV for visualization, so swap in the non-headless version.

<Tabs>
  <TabItem value="uv" default>

    Uninstall `opencv-python-headless`

    ```bash
    uv pip uninstall -y opencv-python-headless
    ```

    Install `opencv-python`

    ```bash
     uv pip install opencv-python
    ```

  </TabItem>
  <TabItem value="miniconda">

    Ensure the environment is activated
    
    Uninstall `opencv-python-headless`

    ```bash
    pip uninstall -y opencv-python-headless
    ```

    Install `opencv-python`

    ```bash
    pip install opencv-python
    ```

  </TabItem>
</Tabs>
