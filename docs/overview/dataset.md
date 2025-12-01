# 数据集

`RoboDriver` 使用的数据集格式为单条存储的，其目的是为了实现在不同阶段不同存储格式。

在 `RoboDriver` 与 `RoboXStudio` 全套体系中，数据集使用不同阶段不同格式储存的方案。

- 采集阶段：在该阶段中，数据存储于机器人或外接设备内，统称设备端。根据实践，该阶段由于受设备端状态的不确定性影响较大以及操作人员使用习惯不同，使用单条存储的方式优势更大。该阶段使用image保存图像流，省去了编码为视频的时间。
- 上传阶段：在该阶段会将image编码为video。
- 云阶段：存储单条的数据，该阶段会执行数据标注和清洗。
- 发布阶段：在该阶段会将单条的数据合并为多条的，此合并包括 `episode合并` 、 `machine合并`、`task合并`，所有的合并操作要求每条数据都是同一型号机器采集的。合并后的数据再提供多种转换格式，默认使用扩展的`LeRobot Dataset v2.1`格式。


## LeRobot Dataset v2.1 格式默认

![alt text](/img/dataset_lerobot_format.png)

## CoRobot Dataset v2.1 格式

详细请见 FlagOpen/RoboCOIN 仓库

## RoboDriver格式

![alt text](/img/dataset_robodriver_format.png)