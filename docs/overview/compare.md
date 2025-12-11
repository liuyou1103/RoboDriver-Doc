# RoboDriver & Other

## RoboDriver 与 LeRobot

`RoboDriver` 作为 LeRobot 的深度改进与扩展版本，在**机器人/遥操器接入层**实现了与 LeRobot 的双向兼容，最大程度降低开发者的适配成本，保护已有适配成果。

### 核心兼容特性
1. **接入方法完全兼容**
   `RoboDriver` 直接复用 LeRobot 定义的机器人/遥操器接入规范与实现方法，开发者无需额外修改适配逻辑：
   - 若已完成某款机器人/遥操器对 LeRobot 的适配，可直接接入 RoboDriver，无需二次开发；
   - 若基于 RoboDriver 完成机器人/遥操器接入，其适配代码也可无缝迁移至 LeRobot 中使用。

2. **适配成本最小化**
   双向兼容的设计避免了“重复适配”的问题，开发者只需维护一套适配代码，即可在 RoboDriver 和 LeRobot 两个生态中复用，大幅提升适配效率。

### 接入指南
机器人/遥操器的具体接入步骤、接口规范与示例代码，请参考：[接入机器人和遥操器](/docs/getting_started/integration)。

### 补充说明
RoboDriver 在兼容 LeRobot 接入层的基础上，进一步扩展了数据集格式、多传感器数据采集（如 RealSense 深度相机、RGB 相机）、RoboX-Studio 平台对接等能力，是对 LeRobot 核心功能的增强而非替代。