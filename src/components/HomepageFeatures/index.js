import clsx from 'clsx';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import homepage0Gif from '@site/static/img/homepage4.gif';
import homepage1Gif from '@site/static/img/homepage1.gif';
import homepage3Gif from '@site/static/img/homepage3.gif';

// Locale-aware feature text for homepage cards
const featureContent = {
  zh: [
    {
      title: '一站式机器人驱动',
      gifSrc: homepage0Gif,
      description: (
        <>
          RoboDriver面向多类型机器人本体的通用驱动适配框架，提供一致化的控制接口与数据采集能力，
          协同 RoboDriver-Server、RoboXStudio实现全流程任务下发、数据上报与管理。
        </>
      ),
    },
    {
      title: '极简接入体验',
      gifSrc: homepage1Gif,
      description: (
        <>
          支持ROS1/ROS2/Dora多协议灵活接入；兼容并拓展 LeRobot 生态，
          采集端单条存储更易编辑传输；可持续对接更多厂商设备、传感器模态与通信方式，适配成本显著降低。
        </>
      ),
    },
    {
      title: '开箱即用·生态丰富',
      gifSrc: homepage3Gif, 
      description: (
        <>
          已完成Realman、GALAXEALITE、SO101、Aloha等多款主流机器人适配，
          按ROS1/ROS2/Dora分类提供完整接入指南（环境搭建、配置修改、功能验证）。
        </>
      ),
    },
  ],
  en: [
    {
      title: 'Unified robot driver',
      gifSrc: homepage0Gif,
      description: (
        <>
          RoboDriver is a universal driver framework for diverse robots, offering consistent control
          interfaces and data capture, working with RoboDriver-Server and RoboXStudio for end-to-end
          task dispatch, reporting, and management.
        </>
      ),
    },
    {
      title: 'Minimal integration effort',
      gifSrc: homepage1Gif,
      description: (
        <>
          Flexible ROS1/ROS2/Dora integrations plus extended LeRobot compatibility; per-sample
          storage makes editing and transfer easy; continually expanding device, sensor, and
          protocol support to cut adaptation cost.
        </>
      ),
    },
    {
      title: 'Ready to use, rich ecosystem',
      gifSrc: homepage3Gif, 
      description: (
        <>
          Adaptations ready for Realman, GALAXEALITE, SO101, Aloha, and more, with complete guides
          by ROS1/ROS2/Dora (environment setup, config changes, validation).
        </>
      ),
    },
  ],
};

// 2. 重构Feature组件：用<img>渲染GIF（替代原SVG）
function Feature({gifSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* 渲染GIF图片，绑定样式 */}
        <img 
          src={gifSrc} 
          className={styles.featureGif} 
          alt={title} // 无障碍描述
          loading="lazy" // 懒加载，优化性能
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const {i18n} = useDocusaurusContext();
  const locale = i18n?.currentLocale === 'en' ? 'en' : 'zh';
  const FeatureList = featureContent[locale];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
