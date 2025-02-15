import React from 'react';
import { IconProps } from './IconProps.interface';
import './Icon.css';
import { classNames } from '@/Components/Utilities/componentsMethods';

import {
  MagnifyingGlassIcon as OutlineSearchIcon,
  EyeIcon as OutlineEyeIcon,
  EyeSlashIcon as OutlineCloseEyeIcon,
  PhoneIcon as OutlinePhoneIcon,
  EnvelopeIcon as OutlineEnvelopeIcon,
  UserCircleIcon as OutlineUserIcon,
  HomeIcon as OutlineHomeIcon,
  BellIcon as OutlineBellIcon,
  CogIcon as OutlineCogIcon,
  XMarkIcon as OutlineCloseIcon,
  CheckIcon as OutlineCheckIcon,
  PlusIcon as OutlinePlusIcon,
  MinusIcon as OutlineMinusIcon,
  ExclamationTriangleIcon as OutlineWarningIcon,
  Bars3Icon as OutlineBars3Icon,
  ArrowRightIcon as OutlineArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import {
  MagnifyingGlassIcon as SolidSearchIcon,
  EyeIcon as SolidEyeIcon,
  EyeSlashIcon as SolidCloseEyeIcon,
  PhoneIcon as SolidPhoneIcon,
  EnvelopeIcon as SolidEnvelopeIcon,
  UserCircleIcon as SolidUserIcon,
  HomeIcon as SolidHomeIcon,
  BellIcon as SolidBellIcon,
  CogIcon as SolidCogIcon,
  XMarkIcon as SolidCloseIcon,
  CheckIcon as SolidCheckIcon,
  PlusIcon as SolidPlusIcon,
  MinusIcon as SolidMinusIcon,
  ExclamationTriangleIcon as SolidWarningIcon,
  Bars3Icon as SolidBars3Icon,
  ArrowRightIcon as SolidArrowRightIcon,
} from '@heroicons/react/24/solid';

import {
  ChevronDownIcon,
  PlayCircleIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  BellAlertIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  outline: {
    search: OutlineSearchIcon,
    openEye: OutlineEyeIcon,
    closeEye: OutlineCloseEyeIcon,
    phone: OutlinePhoneIcon,
    envelop: OutlineEnvelopeIcon,
    user: OutlineUserIcon,
    home: OutlineHomeIcon,
    bell: OutlineBellIcon,
    cog: OutlineCogIcon,
    close: OutlineCloseIcon,
    check: OutlineCheckIcon,
    plus: OutlinePlusIcon,
    minus: OutlineMinusIcon,
    warning: OutlineWarningIcon,
    arrowPath: ArrowPathIcon,
    chartPie: ChartPieIcon,
    cursorArrowRays: CursorArrowRaysIcon,
    fingerPrint: FingerPrintIcon,
    squaresPlus: SquaresPlusIcon,
    bellAlert: BellAlertIcon,
    lightBulb: LightBulbIcon,
    bars3: OutlineBars3Icon,
    arrowRight: OutlineArrowRightIcon,
    chevronLeft: ChevronLeftIcon,
    chevronRight: ChevronRightIcon,
  },
  solid: {
    search: SolidSearchIcon,
    openEye: SolidEyeIcon,
    closeEye: SolidCloseEyeIcon,
    phone: SolidPhoneIcon,
    envelop: SolidEnvelopeIcon,
    user: SolidUserIcon,
    home: SolidHomeIcon,
    bell: SolidBellIcon,
    cog: SolidCogIcon,
    close: SolidCloseIcon,
    check: SolidCheckIcon,
    plus: SolidPlusIcon,
    minus: SolidMinusIcon,
    warning: SolidWarningIcon,
    chevronDown: ChevronDownIcon,
    playCircle: PlayCircleIcon,
    chatBubbleLeftRight: ChatBubbleLeftRightIcon,
    bars3: SolidBars3Icon,
    arrowRight: SolidArrowRightIcon,
  },
};

const Icon: React.FC<IconProps> = ({
  name,
  variant = 'outline',
  className = 'right-3',
  children,
}) => {
  const iconClass = classNames('text-primary-dark', className);

  if (name === 'facebook') {
    return (
      <svg
        className="h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  const IconComponent =
    iconMap[variant][name as unknown as keyof (typeof iconMap)[typeof variant]];

  if (!IconComponent) return null;

  return <IconComponent className={`h-6 ${iconClass}`} />;
};

export default Icon;
