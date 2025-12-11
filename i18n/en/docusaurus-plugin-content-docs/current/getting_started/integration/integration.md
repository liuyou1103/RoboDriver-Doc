# Module Integration

## Naming convention
All RoboDriver modules follow the naming rule:

```
robodriver-[module-type]-[module-name]
```

:::info
`module-name` varies by type, but always appends to the pattern above.
:::

After you implement the module, install it into either the `robodriver` or `lerobot` environment; the runtime auto-detects it.

Supported module-type prefixes:

- `robodriver-robot-`
- `robodriver-teleoperator-`
- `lerobot-robot-`
- `lerobot-teleoperator-`

Not yet supported:

- `robodriver-camera-`
- `robodriver-policy-`
- `lerobot-camera-`
- `lerobot-policy-`

## LeRobot compatibility

RoboDriver modules inherit directly from the corresponding LeRobot interface classes, so adapting to LeRobot also works for RoboDriver.

Follow the [reference implementations](#reference-implementations) to adapt to LeRobot; RoboDriver-specific hooks should be implemented separately, otherwise defaults apply.

Likewise, modules implemented to the RoboDriver spec can also be used within LeRobot. See [LeRobot compatibility](../lerobot.md) for details.

## Reference implementations

RoboDriver provides sample implementations for each module type (see below) plus detailed integration docs. LeRobot also offers a comprehensive guide you can follow to complete LeRobot integration.
