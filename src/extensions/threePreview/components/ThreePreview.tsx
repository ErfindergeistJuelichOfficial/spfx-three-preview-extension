import { Log } from '@microsoft/sp-core-library';
import * as React from 'react';

import styles from './ThreePreview.module.scss';

export interface IThreePreviewProps {
  text: string;
}

const LOG_SOURCE: string = 'ThreePreview';

export default class ThreePreview extends React.Component<IThreePreviewProps, {}> {
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: ThreePreview mounted');
  }

  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: ThreePreview unmounted');
  }

  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.threePreview}>
        { this.props.text }
      </div>
    );
  }
}
