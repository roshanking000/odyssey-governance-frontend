import React, { FC, useState } from 'react';
import TimePickerRaw from 'rc-time-picker';
import cx from 'classnames';
import moment, { Moment } from 'moment';

import styles from './styles.module.scss';

interface TimePickerProps {
  className?: string
  onChangeValue?: (newValue: Moment) => void;
  value?: Moment;
  error?: boolean;
}

export const TimePicker: FC<TimePickerProps> = ({
  className = '',
  onChangeValue,
  value,
  error = false,
}) => {
  const [open, setOpen] = useState({ open: false });

  return (
    <TimePickerRaw 
      defaultValue={moment()}
      showSecond={false}
      open={open.open}
      onOpen={setOpen}
      onClose={setOpen}
      focusOnOpen
      onChange={onChangeValue}
      value={value}
      className={cx(className, {
        [styles.error]: error,
      })}
      placeholder="00:00"
    />
  );
};
