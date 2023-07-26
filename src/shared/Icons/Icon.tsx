import React from 'react';

export enum EIcons {
  error = 'errorIcon',
  checkboxChecked = 'checkboxCheckedIcon',
  nearMe = 'nearMeIcon',
  home = 'homeIcon',
  warning = 'warningIcon',
  circleCheck = 'circleCheckIcon',
  settings = 'settingsIcon',
  notification = 'notificationIcon',
  filter = 'filterIcon',
  helpCircle = 'helpCircleIcon',
  minus = 'minusIcon',
  sortingArrowDown = 'sortingArrowDownIcon',
  sortingArrowUp = 'sortingArrowUpIcon',
  arrowDownRed = 'arrowDownRedIcon',
  arrowUpGreen = 'arrowUpGreenIcon',
  outlinedAlarm = 'outlinedAlarmIcon',
  outlinedCalendar = 'outlinedCalendarIcon',
  outlinedMessage = 'outlinedMessageIcon',
  outlinedUser = 'outlinedUserIcon',
  outlinedWarning = 'outlinedWarningIcon',
  outlinedHelpCircle = 'outlinedHelpCircleIcon',
  outlinedError = 'outlinedErrorCircleIcon',
  outlinedTrash = 'outlinedTrashIcon',
  outlinedFilter = 'outlinedFilterIcon',
  outlinedCircleCheck = 'outlinedCircleCheckIcon',
  outlinedSettings = 'outlinedSettingsIcon',
  outlinedCheckboxChecked = 'outlinedCheckboxCheckedIcon',
  outlinedCheckboxSquare = 'outlinedCheckboxSquareIcon',
  outlinedCheckbox = 'outlinedCheckboxIcon',
  outlinedArrow = 'outlinedArrowIcon',
  outlinedCheck = 'outlinedCheckIcon',
  outlinedClose = 'outlineCloseIcon',
  outlinedHome = 'outlineHomeIcon',
  outlinedSlider = 'outlinedSliderIcon',
  outlinedGreenPlus = 'outlinedGreenPlusIcon',
  outlinedRuble = 'outlinedRubleIcon',
  outlinedGreenRuble = 'outlinedGreenRubleIcon',
  outlinedRedRuble = 'outlinedRedRubleIcon'
}

interface IIconProps {
  name: EIcons;
  size: number;
}

export function Icon({ name, size }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
    >
      <use href={`#${name}`} />
    </svg>
  );
}
