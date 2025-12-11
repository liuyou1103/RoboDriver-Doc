# LeRobot Compatibility

Install your `robodriver_x_xxx` packages in the same virtual environment as LeRobot.

```bash title="robodriver_robot_xxx"
uv pip install -e .
```

```bash title="robodriver_teleoperator_xxx"
uv pip install -e .
```

Record data with LeRobot:

```bash
lerobot-record \
    --robot.type=so101_follower_dora \
    --teleop.type=so101_leader_dora \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.num_episodes=1 \
    --dataset.single_task="Grab the black cube"
```
