# Data Formats

`RoboDriver` uses a per-sample storage format so each lifecycle stage can pick the most suitable layout.

Across the full `RoboDriver` + `RoboXStudio` stack, data is stored differently per stage:

- Collection stage: data stays on the robot or peripheral device. Because device state and operator habits vary, per-sample storage is more robust. Images are stored as individual frames to avoid video encoding overhead.
- Upload stage: images are encoded into video.
- Cloud stage: data remains per-sample while labeling and cleaning are performed.
- Release stage: per-sample data is merged into multi-sample bundles, including `episode merge`, `machine merge`, and `task merge`. All merge operations require data from the same robot model. The merged data can be exported to multiple formats, with extended `LeRobot Dataset v2.1` as the default.


## Default: LeRobot Dataset v2.1

![alt text](/img/dataset_lerobot_format.png)

## CoRobot Dataset v2.1

See the FlagOpen/RoboCOIN repository for details.

## RoboDriver Format

![alt text](/img/dataset_robodriver_format.png)
