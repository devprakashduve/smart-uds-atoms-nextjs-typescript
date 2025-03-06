import Button from '@/Components/Atoms/Button';
import Input from '@/Components/Atoms/InputGroup/Input';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import { FooterProps } from './Footer.interface';

export default function Footer({
  title,
  description,
  emailPlaceholder,
  buttonText,
  articlesTitle,
  articlesDescription,
  noSpamTitle,
  noSpamDescription,
}: FooterProps) {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-r from-footer-from_color via-footer-via_color to-footer-to_color py-16 text-footer-text sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-footer-text">{title}</h2>
            <p className="mt-4 text-lg text-footer-text">{description}</p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <Input
                name="email"
                type="email"
                isRequired={true}
                placeholder={emailPlaceholder}
                autoComplete="email"
                showIcon
                className="min-w-0 flex-auto rounded-md px-3.5 py-2 text-base text-footer-text outline-1 -outline-offset-1 sm:text-sm/6"
                value={''}
              />
              <Button
                type="submit"
                className="shadow-xs flex-none rounded-md px-3.5 py-2.5 text-sm font-semibold text-footer-text"
              >
                {buttonText}
              </Button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md p-2">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="size-6 text-footer-text"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-footer-text">
                {articlesTitle}
              </dt>
              <dd className="mt-2 text-base/7 text-footer-text">
                {articlesDescription}
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md p-2">
                <HandRaisedIcon
                  aria-hidden="true"
                  className="size-6 text-footer-text"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-footer-text">
                {noSpamTitle}
              </dt>
              <dd className="mt-2 text-base/7 text-footer-text">
                {noSpamDescription}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
