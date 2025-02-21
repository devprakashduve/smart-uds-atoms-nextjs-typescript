import { BreadcrumbProps } from './BreadcrumbProps.interface';
import CustomLink from '@/Components/Atoms/CustomLink';

const Breadcrumbs: React.FC<BreadcrumbProps> = ({
  items,
  separator = '>',
  className = '',
}) => {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={`px-4 py-2 text-sm ${className}`}>
      <ol className="flex space-x-1">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {item.href !== '#' ? (
              <CustomLink
                href={item.href}
                target="_self"
                text={item.label}
                className="text-atom-breadcrumbs-text/70 cursor-pointer hover:no-underline"
              />
            ) : (
              <CustomLink
                href={'#'}
                target="_self"
                text={item.label}
                className="text-atom-breadcrumbs-text font-semibold hover:no-underline"
              />
            )}
            {index < items.length - 1 && (
              <span className="text-atom-breadcrumbs-text text-primary-dark mx-2">
                {separator}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
