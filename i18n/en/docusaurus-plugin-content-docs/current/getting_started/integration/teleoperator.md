# Integrate a Teleoperator

## Teleoperator module naming

Teleoperator modules follow the RoboDriver naming convention:

Use the `robodriver-teleoperator-` prefix in RoboDriver.

```txt
robodriver-teleoperator-[module-name]
```

Where:

```txt title="module-name"
[vendor-model]-[operation-type]-[integration-type]
```

Full name:

```txt title="full name"
robodriver-teleoperator-[vendor-model]-[operation-type]-[integration-type]
```

:::info
`[operation-type]` options:
- `leader`: master arm (teleop) in a homogeneous master-follower setup; outputs joint-angle actions to drive the follower.
- `eepose`: produces end-effector pose actions through various inputs.
- et al.
:::

:::info
`[integration-type]` options:
- `py`: use the robot/vendor Python SDK for data and control.
- `ros1`: via `ROS1` nodes.
- `ros2`: via `ROS2` nodes.
- `dora`: via `DORA` nodes.
- et al.
:::


## Reference implementations


RoboDriver provides reference teleoperator modules you can follow to build new ones.

- `so101-leader-py`: coming soon
- `so101-leader-dora` : [robodriver-teleoperator-so101-leader-dora](https://github.com/BAAI-EI-DATA/robodriver-teleoperator-so101-leader-dora)
- `so101-leader-ros2`: coming soon

- `keyboard-eepose-py`: coming soon
- `spacemouse-eepose-py`: coming soon
- `vr-eepose-py`: coming soon
- `umi-eepose-py`: coming soon
