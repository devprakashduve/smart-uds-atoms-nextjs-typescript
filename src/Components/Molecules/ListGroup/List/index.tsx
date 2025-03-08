import CustomLink from '../../../Atoms/CustomLink';
import { ListProps } from './List.interface';

const List: React.FC<ListProps> = ({ title, links, textColor }) => (
  <div className="w-full px-4 md:w-1/2 lg:w-1/6">
    {title && (
      <h2
        className={`title-font mb-3 text-start text-sm uppercase tracking-widest ${textColor}`}
      >
        {title}
      </h2>
    )}
    <ul className="mb-10 list-none">
      {links.map((link, index) => (
        <li key={index}>
          <CustomLink
            href={link.href}
            underline
            className={`${textColor} hover:${textColor}`}
          >
            {link.name}
          </CustomLink>
        </li>
      ))}
    </ul>
  </div>
);

export default List;
