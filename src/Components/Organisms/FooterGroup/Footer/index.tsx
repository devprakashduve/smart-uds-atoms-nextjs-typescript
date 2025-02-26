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
    <div className="from-footer-from_color via-footer-via_color to-footer-to_color text-footer-text relative isolate overflow-hidden bg-gradient-to-r py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-footer-text">{title}</h2>
            <p className="text-footer-text mt-4 text-lg">{description}</p>
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
                className="text-footer-text min-w-0 flex-auto rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 sm:text-sm/6"
                value={''}
              />
              <Button
                type="submit"
                className="shadow-xs text-footer-text flex-none rounded-md px-3.5 py-2.5 text-sm font-semibold"
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
                  className="text-footer-text size-6"
                />
              </div>
              <dt className="text-footer-text mt-4 text-base font-semibold">
                {articlesTitle}
              </dt>
              <dd className="text-footer-text mt-2 text-base/7">
                {articlesDescription}
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md p-2">
                <HandRaisedIcon
                  aria-hidden="true"
                  className="text-footer-text size-6"
                />
              </div>
              <dt className="text-footer-text mt-4 text-base font-semibold">
                {noSpamTitle}
              </dt>
              <dd className="text-footer-text mt-2 text-base/7">
                {noSpamDescription}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
