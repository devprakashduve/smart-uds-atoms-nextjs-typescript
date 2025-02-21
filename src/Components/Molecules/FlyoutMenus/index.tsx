import { useState } from 'react';
import Icon from '@/Components/Atoms/Icon';
import {
  FlyoutMenusProps,
  ListItemProps,
  ActionItemProps,
} from './FlyoutMenus.interface';
import CustomLink from '@/Components/Atoms/CustomLink';
import Link from 'next/link';

function ListItem(props: ListItemProps) {
  return (
    <div
      key={props.name}
      className="group relative flex gap-x-6 rounded-lg p-4"
    >
      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg">
        {props.icon && (
          <Icon
            name={props.icon}
            variant={'outline'}
            className="transition-all"
          />
        )}
      </div>
      <div>
        <div className="font-semibold">
          <CustomLink href={props.href} underlineHover={false}>
            {props.name}
            <span className="absolute inset-0" />
          </CustomLink>
        </div>
        <p className="mt-1">{props.description}</p>
      </div>
    </div>
  );
}

function ActionItem(props: ActionItemProps) {
  return (
    <Link
      key={props.name}
      href={props.href}
      className="flex items-center justify-center gap-x-2.5 p-3 font-semibold"
    >
      <Icon
        name={props.icon}
        className="text-primary-dark h-5 w-5 flex-none"
        variant={'solid'}
      />
      {props.name}
    </Link>
  );
}

export default function FlyoutMenus({
  solutions,
  callsToAction,
}: FlyoutMenusProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-x-1 text-sm font-semibold"
      >
        <span>Solutions</span>
        <Icon
          name={'chevronDown'}
          variant="solid"
          className="text-primary-dark hover:text-primary transition-all"
        />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {solutions.map((item) => (
                <ListItem key={item.name} {...item} />
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <ActionItem key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
