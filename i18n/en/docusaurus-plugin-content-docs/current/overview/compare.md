# RoboDriver & Other

## RoboDriver vs. LeRobot

As a deep enhancement of LeRobot, `RoboDriver` offers two-way compatibility with LeRobot at the **robot/teleoperator integration layer**, minimizing adaptation costs and preserving existing integration work.

### Key Compatibility Highlights
1. **Fully compatible integration methods**  
   `RoboDriver` reuses LeRobot's robot/teleoperator integration specs and implementation patterns, so no extra adaptation logic is needed:  
   - If a robot/teleoperator is already adapted for LeRobot, it can plug into RoboDriver without rework.  
   - If you adapt a device with RoboDriver, the same code can migrate back to LeRobot.

2. **Minimal adaptation cost**  
   Bi-directional compatibility avoids "double integration." Maintain one adapter and reuse it in both RoboDriver and LeRobot to maximize efficiency.

### Integration Guide
For step-by-step integration, interface specs, and code samples, see: [Integrate robots and teleoperators](/docs/getting_started/integration).

### Notes
On top of the LeRobot-compatible integration layer, RoboDriver extends dataset formats, multi-sensor capture (e.g., RealSense depth, RGB cameras), and RoboX-Studio connectivity - an enhancement rather than a replacement of LeRobot's core.
