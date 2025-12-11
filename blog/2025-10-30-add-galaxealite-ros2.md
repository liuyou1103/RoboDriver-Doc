---
slug: 2025-10-30-add-galaxealite-ros2
title: "新增适配 | GALAXEALITE 双臂机器人 ROS2 接入方案发布"
authors: [robodriver-team]
tags: [机器人适配, ROS2, 双臂机械臂]
date: 2025-10-30
---

RoboDriver 新增 ROS2 接入方案！**GALAXEALITE 双臂机器人**适配仓库正式上线，支持双臂 6DOF+末端夹爪控制，集成 4 路 RealSense 相机数据采集，兼容 LeRobot 类接口，
<!-- truncate -->

本次适配的 GALAXEALITE 机器人适配仓库包含完整的环境搭建、配置修改、采集/控制验证流程，开发者可直接参考部署：
👉 [robodriver-robot-galaxealite-aio-ros2](https://github.com/BAAI-EI-DATA/robodriver-robot-galaxealite-aio-ros2)

适配亮点：
- 支持双臂协同运动控制与单臂独立操作
- 多相机同步数据采集，兼容改进版 LeRobot 数据集格式
- 提供 ROS2 节点配置示例与通信链路调试工具