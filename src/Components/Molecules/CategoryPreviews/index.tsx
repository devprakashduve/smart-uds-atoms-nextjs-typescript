import CustomLink from '@/Components/Atoms/CustomLink';
import UDSImage from '@/Components/Atoms/Image';
import { CategoryPreviewsProps } from './CategoryPreviews.interface';
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  AwaitedReactNode,
  Key,
  ReactPortal,
} from 'react';

export default function CategoryPreviews({
  title,
  categories,
}: CategoryPreviewsProps) {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold">{title}</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {categories.map(
              (category: {
                name:
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | Promise<AwaitedReactNode>
                  | Key
                  | null
                  | undefined;
                imageAlt: string;
                imageSrc: string;
                href: string | undefined;
                description:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<AwaitedReactNode>
                  | null
                  | undefined;
              }) => (
                <div
                  key={String(category.name) || 'xyz'}
                  className="group relative"
                >
                  <UDSImage
                    alt={category.imageAlt}
                    src={category.imageSrc}
                    className="sm:aspect-2/1 w-full rounded-lg object-cover group-hover:opacity-75 max-sm:h-80 lg:aspect-square"
                  />
                  <h3 className="mt-6 text-sm">
                    <CustomLink href={category.href}>
                      <span className="absolute inset-0" />
                      {category.name}
                    </CustomLink>
                  </h3>
                  <p className="text-base font-semibold">
                    {category.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
