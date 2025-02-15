import Avatar from '.';

export default {
  title: 'Components/Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    src: '/images/avatar.jpg',
    alt: 'Default Avatar',
    size: 16,
  },
};

export const Rounded = {
  args: {
    src: '/images/avatar.jpg',
    alt: 'Rounded Avatar',
    size: 16,
    rounded: true,
  },
};

export const CircleWithImage = {
  args: {
    src: '/images/avatar.jpg',
    alt: 'Circular Avatar',
    size: 16,
    circle: true,
  },
};

export const WithInitials = {
  args: {
    initials: 'JD',
    alt: 'Initials Avatar',
    size: 24,
    circle: true,
  },
};

export const OnlineStatus = {
  args: {
    src: '/images/avatar.jpg',
    alt: 'Online User',
    size: 16,
    status: 'online',
  },
};

export const CustomSize = {
  args: {
    initials: 'AB',
    alt: 'Large Avatar',
    size: 32,
    circle: true,
    className: 'border-2 border-blue-500',
  },
};

export const ComplexExample = {
  args: {
    initials: 'CD',
    alt: 'Custom Avatar',
    size: 20,
    circle: true,
    status: 'busy',
    className: 'shadow-lg',
  },
};

export const VariantsComparison = () => (
  <div className="flex flex-col gap-8 p-4">
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Basic Variants</h2>
      <div className="flex items-end gap-4">
        <div className="flex flex-col items-center gap-2">
          <Avatar src="/images/avatar.jpg" alt="Default" size={16} />
          <span>Default</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar src="/images/avatar.jpg" alt="Rounded" size={16} rounded />
          <span>Rounded</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar alt="Circle" size={16} circle />
          <span>Circle (no image)</span>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Status Indicators</h2>
      <div className="flex items-end gap-4">
        <div className="flex flex-col items-center gap-2">
          <Avatar
            src="/images/avatar.jpg"
            alt="Online"
            size={16}
            status="online"
          />
          <span>Online</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar src="/images/avatar.jpg" alt="Away" size={16} status="away" />
          <span>Away</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar src="/images/avatar.jpg" alt="Busy" size={16} status="busy" />
          <span>Busy</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar
            src="/images/avatar.jpg"
            alt="Offline"
            size={16}
            status="offline"
          />
          <span>Offline</span>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Size Comparison</h2>
      <div className="flex items-end gap-4">
        {[8, 16, 24, 32].map((size) => (
          <div key={size} className="flex flex-col items-center gap-2">
            <Avatar initials="JD" alt={`Size ${size}`} size={size} circle />
            <span>Size {size}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Combined Features</h2>
      <div className="flex items-end gap-4">
        <div className="flex flex-col items-center gap-2">
          <Avatar
            initials="AB"
            alt="Custom"
            size={20}
            circle
            status="online"
            className="border-2 border-purple-500"
          />
          <span>Custom Border</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar
            src="/images/avatar.jpg"
            alt="Styled"
            size={24}
            circle
            status="busy"
            className="shadow-xl"
          />
          <span>With Shadow</span>
        </div>
      </div>
    </div>
  </div>
);
