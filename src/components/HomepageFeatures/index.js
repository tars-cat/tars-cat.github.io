import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '享受思考',
    Svg: require('@site/static/img/think.svg').default,
    description: (
      <>
        真知灼见，首先来自多思善疑。
      </>
    ),
  },
  {
    title: '享受学习',
    Svg: require('@site/static/img/study.svg').default,
    description: (
      <>
        敲你码：光看书有用吗？不敲能会吗？
      </>
    ),
  },
  {
    title: '享受生活',
    Svg: require('@site/static/img/life.svg').default,
    description: (
      <>
        劝君莫惜金缕衣，劝君须惜少年时。<br />花开堪折直须折，莫待无花空折枝。
      </>
    ),
  },
  {
    title: '戴口罩',
    Svg: require('@site/static/img/mask.svg').default,
    description: (
      <>
        勤换哦
      </>
    ),
  },
  {
    title: '勤洗手',
    Svg: require('@site/static/img/wash.svg').default,
    description: (
      <>
        记得用洗手液嗷
      </>
    ),
  },
  {
    title: '多吃饭',
    Svg: require('@site/static/img/eat.svg').default,
    description: (
      <>
        谁会和吃过不去呢
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
