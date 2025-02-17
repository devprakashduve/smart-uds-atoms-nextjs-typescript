import Tag from '.';
import Icon from '../Icon'; // Adjust the import path as necessary

export default {
  title: 'Components/Atoms/Tag',
  component: Tag,
  tags: ['autodocs'],
};

export const DefaultTag = {
  args: {
    label: 'Tag 1',
    removable: true,
    icon: (
      <Icon
        name={'close'}
        variant="outline"
        className="text-atom-tag-text hover:text-atom-tag-text/60"
      />
    ),
  },
};

export const InteractiveTag = {
  args: {
    label: 'Click Me',

    onClick: () => console.log('Tag clicked'),
    icon: (
      <Icon
        name={'check'}
        variant="outline"
        className="text-atom-tag-text hover:text-atom-tag-text/60"
      />
    ),
  },
};

export const RemovableTag = {
  args: {
    label: 'Remove Me',

    removable: true,
    onRemove: () => console.log('Remove clicked'),
    icon: (
      <Icon
        name={'close'}
        variant="outline"
        className="text-atom-tag-text hover:text-atom-tag-text/60"
      />
    ),
  },
};

export const ComparisonTag = {
  args: {
    label: 'Compare Me',

    removable: false,
    onCompare: () => console.log('Compare clicked'),
    icon: (
      <Icon
        name={'close'}
        variant="outline"
        className="text-atom-tag-text hover:text-atom-tag-text/60"
      />
    ),
  },
};
