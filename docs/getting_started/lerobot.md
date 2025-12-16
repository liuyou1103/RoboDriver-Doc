# 兼容 LeRobot 框架

与LeRobot在同一虚拟环境内，把前文编写的robodriver_x_xxx安装。

```bash title="robodriver_robot_xxx"
uv pip install -e .
```

```bash title="robodriver_teleoperator_xxx"
uv pip install -e .
```

通过LeRobot采集数据，其中的 `robot.type` 和 `teleop.type` 根据您接入的机器人替换：

```bash
lerobot-record \
    --robot.type=so101_follower_dora \
    --teleop.type=so101_leader_dora \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.num_episodes=1 \
    --dataset.single_task="Grab the black cube"
```