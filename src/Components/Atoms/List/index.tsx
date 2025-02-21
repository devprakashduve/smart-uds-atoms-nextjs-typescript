import UDSImage from '../Image';
import { ListProps } from './ListProps.interface';

const List: React.FC<ListProps> = ({
  items,
  className = '',
  ordered = false,
}) => {
  return (
    <ul
      role="list"
      className={`divide-y divide-atom-list-text/40 ${className}`}
    >
      {items.map(({ avatar, name, subText, role, status, lastSeen }, index) => (
        <li
          key={index}
          className="flex items-center justify-center gap-x-6 py-2"
        >
          {ordered && <div className="mr-2 flex max-w-2">{index + 1}:</div>}

          <div className="flex w-full justify-between">
            {/* Left Section */}
            <div className="flex min-w-0 gap-x-4">
              {avatar && (
                <UDSImage
                  src={avatar}
                  alt={name}
                  className="h-12 w-12 flex-none rounded-full"
                />
              )}

              <div className="min-w-0 flex-auto">
                {name && (
                  <p className="text-sm font-semibold leading-6 text-atom-list-text">
                    {name}
                  </p>
                )}
                {subText && (
                  <p className="mt-1 truncate text-xs leading-5 text-atom-list-text/50">
                    {subText}
                  </p>
                )}
              </div>
            </div>

            {/* Right Section */}
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              {role && (
                <p className="text-sm leading-6 text-atom-list-text/70">
                  {role}
                </p>
              )}

              {status ? (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div
                    className={`flex-none rounded-full p-1 ${
                      status === 'Online'
                        ? 'bg-atom-list-text/40'
                        : 'bg-atom-list-text/30'
                    }`}
                  >
                    <div
                      className={`h-1.5 w-1.5 rounded-full ${
                        status === 'Online'
                          ? 'bg-success/80'
                          : 'bg-atom-list-text/50'
                      }`}
                    ></div>
                  </div>
                  <p className="text-xs leading-5 text-atom-list-text/70">
                    {status}
                  </p>
                </div>
              ) : (
                lastSeen && (
                  <p className="mt-1 text-xs leading-5 text-atom-list-text/70">
                    Last seen <time dateTime={lastSeen}>{lastSeen}</time>
                  </p>
                )
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
