# 启用 RoboXStudio 平台

:::important 🔑 核心启动流程（必看）
请严格按照以下顺序完成部署与启动，避免数据交互异常：
1. **平台权限申请**：先申请 RoboXStudio 平台账号并完成权限配置（管理员/开发者/采集人员）；
2. **部署 RoboDriver-Server**：完成服务端部署并确保与 RoboXStudio 平台网络互通；
3. **机器人底层服务启动**：启动机器人原生运行环境（如 ROS1/ROS2 节点、Dora 服务、机器人SDK 驱动），验证基础数据通路；
4. **启动 RoboDriver 适配模块**：运行对应机器人的 `robodriver_robot_*`（设备适配层）和 `robodriver_teleoperator_*`（遥操作层），确认能正常接收机器人底层数据；
5. **任务下发与执行**：在 RoboXStudio 配置采集任务并发布，通过 RoboDriver-Server 转发至 RoboDriver 执行采集。
:::

## 具身智能一体化平台系统架构

RoboDriver 所属的具身智能一体化平台系统包含三大核心组件，各组件职责明确、协同联动：

| 组件               | 核心职责                                                                 | 交互关系                                                                 |
|--------------------|--------------------------------------------------------------------------|--------------------------------------------------------------------------|
| RoboDriver         | 机器人本地控制、采集任务执行、数据实时采集、采集数据本地回放             | 接收 RoboDriver-Server 下发的采集任务/指令，上报采集状态与原始数据       |
| RoboDriver-Server  | 采集任务/指令转发、平台指令接收、采集数据接收/编码/上传、状态统一管理    | 承接 RoboXStudio 发布的任务，转发至指定 RoboDriver；接收采集数据并上传至存储系统 |
| RoboXStudio        | 采集任务可视化设计、任务发布/分发、采集进度监控、人员权限管理            | 向 RoboDriver-Server 下发采集任务，展示全系统采集状态与数据成果          |

![RoboDriver 一体化平台系统架构图](/img/roboxstudio_struct_1.png)

<!-- <p align="center">
  <img src="/img/roboxstudio_struct.png" alt="RoboDriver 一体化平台系统架构图" width="800"/>
</p> -->

### 系统核心流程
1. 开发者通过 RoboXStudio 设计采集任务（如采集频率、数据类型、机器人动作序列），并发布至指定执行人员/机器人集群；
2. RoboDriver-Server 接收任务后，将采集指令至对应 RoboDriver；
3. RoboDriver 执行采集任务，实时采集机器人传感器、运动状态等数据，并存储成CoRobot数据格式；
4. RoboDriver-Server 确认采集数据完成后，进行数据编码、格式转换，并上传至云端/指定存储系统；
5. 可通过 RoboXStudio 监控采集进度，或通过 RoboDriver 进行本地数据回放验证。

## RoboXStudio 介绍与使用

### 平台申请
[https://ei2data.baai.ac.cn/home](https://ei2data.baai.ac.cn/home)

### 核心功能
- 可视化采集任务设计：配置机器人类型、数据采集场景、数据采集标签；
- 任务发布与分发：支持按人员角色发布采集任务；
- 全流程监控：实时查看任务执行进度、数据上传情况；
- 数据管理：采集数据的预览、筛选、导出，支持标注任务联动；
- 权限管理：分角色（管理员/开发者/采集人员）管控任务设计、发布、查看权限。

### 基本使用文档
完整的操作手册、权限配置与任务设计教程请参考：[RoboXStudio 使用文档](https://jwolpxeehx.feishu.cn/wiki/GzbCwlYWwiqHvTk9b4icob3inug?from=from_copylink)

## RoboDriver-Server 部署与使用

### 快速部署
[RoboDriver-Server 仓库] https://github.com/FlagOpen/RoboDriver-Server.git

### 核心功能
- 采集任务/指令的转发与状态同步；
- 接收来自 RoboXStudio 的平台任务与采集指令；
- 接收 RoboDriver 上报的采集数据，完成数据编码、格式标准化；
- 采集数据的批量/实时上传（支持云端对象存储、本地文件系统等）；
- 机器人在线状态、采集进度的统一管理与上报。
   
### 基本使用文档
请参考：[RoboDriver-Server 使用文档](https://jwolpxeehx.feishu.cn/docx/O2NzdGWBDoLNWPxQf6Xck5e9nv0?from=from_copylink)

### 补充说明
- 机器人底层服务启动后，需验证 `rostopic list`（ROS）/ `dora status`（Dora）等指令能正常返回数据，确保基础通路畅通；
- RoboDriver 适配模块启动后，建议先执行本地测试指令（如数据采集预览），确认无异常后再接收平台下发任务；
- 若出现任务下发无响应、数据上传失败，优先检查各组件网络连通性与启动顺序是否符合要求。