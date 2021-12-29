import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Contact',
      title: 'Contact',
      description:
        '704-430-5510',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Location',
      title: 'Location',
      description:
        'Location',
    },
    {
      id: 3,
      iconSrc: Github,
      altText: 'Under Construction',
      title: 'Under Construction',
      description:
        'Our Website is online but still in work progress. Some content might not be available. Thank you for the support and your understanding.',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/',
      label: 'Adversite',
    },
    {
      path: '/',
      label: 'Supports',
    },
    {
      path: '/',
      label: 'Marketing',
    },
    {
      path: '/',
      label: 'Contact',
    },
  ],
};
