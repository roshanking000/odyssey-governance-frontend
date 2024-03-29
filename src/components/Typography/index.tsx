import { memo } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type TypographyProps = {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
  className?: string;
  children: React.ReactNode | string;
  mod?: 'small' | 'bold' | 'label';
  align?: 'left' | 'center' | 'right' | 'full';
};

const Typography = memo(({
  type,
  className = '',
  children,
  mod,
  align,
}: TypographyProps) => {
  const Tag = type;
  const modClasses = {
    small: styles.small,
    bold: styles.bold,
    label: styles.label,
  };
  const alignClasses = {
    left: styles.left,
    right: styles.right,
    center: styles.center,
    full: styles.full,
  };

  return (
    <Tag
      className={cx(
        styles[type],
        className,
        { [modClasses[mod!]]: mod },
        { [alignClasses[align!]]: align },
      )}
    >
      {children}
    </Tag>
  );
});

export { Typography };
