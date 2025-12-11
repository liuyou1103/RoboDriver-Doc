# Integrate a Robot

## Robot module naming

All robot modules follow the RoboDriver naming convention:

Robot modules use the `robodriver-robot-` prefix in RoboDriver.

```txt
robodriver-robot-[module-name]
```

Where:

```txt title="module-name"
[vendor-model]-[operation-type]-[integration-type]
```

Full name:

```txt title="full name"
robodriver-robot-[vendor-model]-[operation-type]-[integration-type]
```

:::info
`[operation-type]` options:
- `aio` (All In One): master/follower in one robot, typically with built-in teleop.
- `follower`: master and follower are separate; this is the follower (executor) receiving joint-angle actions and returning observations (sensor data).
- `eepose`: accepts end-effector pose actions for a generic teleop robot, returning observations (sensor data).
- et al.
:::

:::info
`[integration-type]` options:
- `py`: use the robot's Python SDK for data and control.
- `ros1`: integrate via `ROS1` nodes.
- `ros2`: integrate via `ROS2` nodes.
- `dora`: integrate via `DORA` nodes.
- et al.
:::


## Reference implementations


RoboDriver provides several reference robot modules. They are built around **SO-101 arm** and **(TODO: sim robot)** examples; use them as templates for new modules.

**aio robots**

- `so101-aio-py`: coming soon
- `so101-aio-dora`: [robodriver-robot-so101-aio-dora](https://github.com/BAAI-EI-DATA/robodriver-robot-so101-aio-dora.git)
- `so101-aio-ros2`: coming soon
- `realman1-aio-dora`: [robodriver-robot-realman1-aio-dora](https://github.com/BAAI-EI-DATA/robodriver-robot-realman1-aio-dora.git)


**follower robots**

- `so101-follower-py`: coming soon
- `so101-follower-dora` : [robodriver-robot-so101-follower-dora](https://github.com/BAAI-EI-DATA/robodriver-robot-so101-follower-dora)
- `so101-follower-ros2`: coming soon
