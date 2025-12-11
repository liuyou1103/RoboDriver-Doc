# Core Overview

`RoboDriver` is a heavily enhanced fork of [LeRobot](https://github.com/huggingface/lerobot.git) from BAAI. It extends the dataset format and device integration layer, and adds first-class connectivity to BAAI's `RoboX-Studio` embodied development platform. Future releases will align with domestic industry standards to make robot onboarding even smoother.

## Value: Upgrades & Extensions
1. **Dataset system upgrade**: Extended the native LeRobot dataset format for multimodal capture (depth cameras, RGB cameras, tactile sensors, etc.), supporting standalone storage, editing, and standardized export while staying compatible with the improved LeRobot spec.
2. **Stronger robot integration**: Optimized onboarding for diverse robots to lower the barrier for open-source/commercial arms, mobile bases, and more, with ready-to-use deployment guides and secondary development examples.
3. **Platform ecosystem integration**: Seamlessly connects to the `RoboX-Studio` one-stop embodied platform to unify drivers, data capture, model training, and task orchestration.
4. **Local standards compatibility**: Planned compatibility with common domestic robotics standards to reduce integration costs for local vendors and speed up standard adoption.

With the principle "One Driver. Every Robot." RoboDriver standardizes the driver layer so developers can focus on business logic and algorithms without worrying about heterogeneous hardware, greatly accelerating robotics application development.
