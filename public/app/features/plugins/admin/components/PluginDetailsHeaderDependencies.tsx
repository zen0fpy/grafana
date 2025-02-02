import React from 'react';
import { css } from '@emotion/css';
import { GrafanaTheme2 } from '@grafana/data';
import { useStyles2, Icon } from '@grafana/ui';
import { CatalogPlugin, IconName } from '../types';

type Props = {
  plugin: CatalogPlugin;
  className?: string;
};

export function PluginDetailsHeaderDependencies({ plugin, className }: Props): React.ReactElement | null {
  const styles = useStyles2(getStyles);
  const pluginDependencies = plugin.details?.pluginDependencies;
  const grafanaDependency = plugin.details?.grafanaDependency;
  const hasNoDependencyInfo = !grafanaDependency && (!pluginDependencies || !pluginDependencies.length);

  if (hasNoDependencyInfo) {
    return null;
  }

  return (
    <div className={className}>
      <div className={styles.dependencyTitle}>Dependencies:</div>

      {/* Grafana dependency */}
      {Boolean(grafanaDependency) && (
        <div>
          <Icon name="grafana" className={styles.icon} />
          Grafana {grafanaDependency}
        </div>
      )}

      {/* Plugin dependencies */}
      {pluginDependencies && pluginDependencies.length > 0 && (
        <div>
          {pluginDependencies.map((p) => {
            return (
              <span key={p.name}>
                <Icon name={IconName[p.type]} className={styles.icon} />
                {p.name} {p.version}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export const getStyles = (theme: GrafanaTheme2) => {
  return {
    dependencyTitle: css`
      font-weight: ${theme.typography.fontWeightBold};
      margin-right: ${theme.spacing(0.5)};

      &::after {
        content: '';
        padding: 0;
      }
    `,
    icon: css`
      color: ${theme.colors.text.secondary};
      margin-right: ${theme.spacing(0.5)};
    `,
  };
};
