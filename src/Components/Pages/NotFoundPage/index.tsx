import Button from '@/Components/Atoms/Button';
import Icon from '@/Components/Atoms/Icon';
import { NotFoundPageProps } from './NotFoundPage.interface';

export default function NotFoundPage({
  title = '404',
  message = 'Page not found',
  homeLinkText = 'Go back home',
  homeLinkHref = '/',
  contactLinkText = 'Contact support',
  contactLinkHref = '/contact',
  sorryMessage = 'Sorry, we couldn’t find the page you’re looking for.',
}: NotFoundPageProps) {
  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold" data-testid="title-text">
            {title}
          </p>
          <h1
            className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl"
            data-testid="message-text"
          >
            {message}
          </h1>
          <p
            className="mt-6 text-pretty text-lg font-medium sm:text-xl/8"
            data-testid="sorry-message-text"
          >
            {sorryMessage}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {homeLinkText && (
              <Button
                href={homeLinkHref}
                className="home-link"
                variant="outline"
              >
                <Icon
                  name="chevronLeft"
                  variant={'outline'}
                  className="mr-2 size-4"
                />
                {homeLinkText}
              </Button>
            )}
            {contactLinkText && (
              <Button
                href={contactLinkHref}
                className="contact-link"
                variant="outline"
              >
                {contactLinkText}
                <Icon
                  name="chevronRight"
                  variant={'outline'}
                  className="ml-2 size-4"
                />
              </Button>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
