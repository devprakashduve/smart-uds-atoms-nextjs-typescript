import { IconProps } from './IconProps.interface';
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
  ArrowUpRightIcon as OutlineArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  LockClosedIcon as OutlineLockClosedIcon,
  LockOpenIcon as OutlineLockOpenIcon,
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
  ArrowUpRightIcon as SolidArrowUpRightIcon,
  LockClosedIcon as SolidLockClosedIcon,
  LockOpenIcon as SolidLockOpenIcon,
} from '@heroicons/react/24/solid';

import {
  ChevronUpIcon,
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
    arrowUpRight: OutlineArrowUpRightIcon,
    chevronUp: ChevronUpIcon,
    chevronDown: ChevronDownIcon,
    lockClosed: OutlineLockClosedIcon,
    lockOpen: OutlineLockOpenIcon,
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
    arrowUpRight: SolidArrowUpRightIcon,
    chevronUp: ChevronUpIcon,
    lockClosed: SolidLockClosedIcon,
    lockOpen: SolidLockOpenIcon,
  },
};

const Icon: React.FC<IconProps> = ({
  name,
  variant = 'outline',
  className = '',
  children,
}) => {
  const iconClass = classNames(
    'text-atom-icon-text/60 hover:text-atom-icon-text/80',
    className
  );

  if (name === 'facebook') {
    return (
      <svg
        className={`min-h-6 ${iconClass}`}
        aria-hidden="true"
        fill="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path d="M18 2h-3a5 6 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
      </svg>
    );
  }
  if (name === 'twitter') {
    return (
      <svg
        className={`min-h-6 ${iconClass}`}
        aria-hidden="true"
        fill="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14 2 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
      </svg>
    );
  }
  if (name === 'instagram') {
    return (
      <svg
        className={`min-h-6 ${iconClass}`}
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 5 4 0 0116 11.37zm1.5-4.87h.01"></path>
      </svg>
    );
  }
  if (name === 'linkedin') {
    return (
      <svg
        className={`min-h-6 ${iconClass}`}
        aria-hidden="true"
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0"
        viewBox="0 0 24 24"
      >
        <path
          stroke="none"
          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 3 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
        ></path>
        <circle cx="4" cy="4" r="2" stroke="none"></circle>
      </svg>
    );
  }

  if (name === 'youtube') {
    return (
      <svg
        className={`min-h-6 ${iconClass}`}
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M23,11.9972 C23,16.0688707 22.7080514,16.9571365 22.1247481,18.1281724 C21.3347709,19.4777602 20.5269977,19.7708297 18.8782989,19.8862992 C17.7148693,19.9542414 14.794638,20 12.0026667,20 C9.2044172,20 6.28275714,19.9542562 5.10860514,19.8855427 C3.47493151,19.7708031 2.66701263,19.37838 1.97791182,18.142374 C1.29279472,16.9480084 1,15.052042 1,12.0084 C1,8.94737365 1.29138368,7.06090428 1.97193166,5.86259947 C2.67010997,4.61046509 3.49111627,4.21325835 5.11100471,4.1184917 C6.23144506,4.04250638 8.99660854,4 12.0026667,4 C15.002263,4 17.766208,4.04252223 18.8782989,4.11790083 C20.5073007,4.21303163 21.3281267,4.60936303 22.020213,5.8580297 C22.7108012,7.06048454 23,8.93778123 23,11.9972 Z M20.283329,6.84963647 C19.9603324,6.26505017 19.7713697,6.17346202 18.752413,6.11391338 C17.6926261,6.04212137 14.954737,6 12.0026667,6 C9.04424331,6 6.3050775,6.04210674 5.2370951,6.1144916 C4.22844212,6.17352647 4.03674592,6.26627 3.71489655,6.84342165 C3.2475376,7.66638709 3,9.26898917 3,11.9972 C3,14.7270394 3.24886149,16.33852 3.71873501,17.1577995 C4.03565111,17.7261665 4.22600958,17.8186276 5.23703026,17.8897046 C6.34874254,17.9546989 9.24212825,18 12.0026667,18 C14.7569983,18 17.6489264,17.9546849 18.7500936,17.8904464 C19.7737637,17.8187098 19.961409,17.7274 20.2855157,17.1409953 C20.752236,16.3407623 21,14.7382734 21,12.0084 C21,9.25771396 20.7535449,7.66399511 20.283329,6.84963647 Z M10,9 L15,12 L10,15 L10,9 Z"
        />
      </svg>
    );
  }

  const IconComponent =
    iconMap[variant][name as unknown as keyof (typeof iconMap)[typeof variant]];

  if (!IconComponent) return null;

  return (
    <IconComponent className={`min-h-6 ${iconClass}`}>{children}</IconComponent>
  );
};

export default Icon;
