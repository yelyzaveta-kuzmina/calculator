import React from 'react';
import { BUTTON_TYPE, PALETTE } from '../constants';
import styles from './styles.module.scss';

const BUTTONS = [
  [
    {
      type: BUTTON_TYPE.Action,
      value: 'AC',
      color: PALETTE.Grey,
    },
    {
      type: BUTTON_TYPE.Action,
      value: '±',
      color: PALETTE.Grey,
    },
    {
      type: BUTTON_TYPE.Action,
      value: '%',
      color: PALETTE.Grey,
    },
    {
      type: BUTTON_TYPE.Action,
      value: '/',
      color: PALETTE.Orange,
    }
  ],
  [
    {
      type: BUTTON_TYPE.Character,
      value: '1',
      color: PALETTE.DarkGrey,
    },
    {
      type: BUTTON_TYPE.Character,
      value: '2',
      color: PALETTE.DarkGrey,
    },
    {
      type: BUTTON_TYPE.Character,
      value: '3',
      color: PALETTE.DarkGrey,
    },
    {
      type: BUTTON_TYPE.Action,
      value: '×',
      color: PALETTE.Orange
    }
  ],
  [
    {
      type: BUTTON_TYPE.Character,
      value: '4',
      color: PALETTE.DarkGrey
    },
    {
      type: BUTTON_TYPE.Character,
      value: '5',
      color: PALETTE.DarkGrey
    },
    {
      type: BUTTON_TYPE.Character,
      value: '6',
      color: PALETTE.DarkGrey
    },
    {
      type: BUTTON_TYPE.Action,
      value: '-',
      color: PALETTE.Orange
    }
  ],
  [
    {
      type: BUTTON_TYPE.Character,
      value: '7',
      color: PALETTE.DarkGrey
    },
    {
      type: BUTTON_TYPE.Character,
      value: '8',
      color: PALETTE.DarkGrey
    },
    {
      type: BUTTON_TYPE.Character,
      value: '9',
      color: PALETTE.DarkGrey
    },
    {
      type: BUTTON_TYPE.Action,
      value: '+',
      color: PALETTE.Orange
    }
  ],
  [
    {
      type: BUTTON_TYPE.Character,
      value: '0',
      color: PALETTE.DarkGrey,
      className: styles.zeroButton
    },
    {
      type: BUTTON_TYPE.Character,
      value: ',',
      color: PALETTE.DarkGrey
    },
    {
      type: BUTTON_TYPE.Action,
      value: '=',
      color: PALETTE.Orange
    },
  ]
];

const KeyPad = ({ onAction, onCharacter }) => (
  <div className={styles.buttonWrapper}>
    {BUTTONS.map((buttonsRow, index) => (
      <div key={index} className={styles.buttonsRow}>
        {buttonsRow.map(button => {
          const onClick = button.type === BUTTON_TYPE.Action
            ? () => onAction(button.value)
            : () => onCharacter(button.value);
          return (
            <button
              key={button.value}
              style={{ backgroundColor: button.color }}
              className={button.className}
              onClick={onClick}>
              {button.value}
            </button>
          );
        })}
      </div>
    ))}

    <div className={styles.homeButton} />
  </div>
);

export default KeyPad;